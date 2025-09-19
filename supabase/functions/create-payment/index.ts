import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const { customerData } = await req.json();
    
    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    let user = null;
    let customerId = null;

    // Check if user is authenticated
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      try {
        const token = authHeader.replace("Bearer ", "");
        const { data } = await supabaseClient.auth.getUser(token);
        user = data.user;
      } catch (error) {
        console.log("No valid auth token, proceeding as guest");
      }
    }

    const customerEmail = user?.email || customerData?.email;
    if (!customerEmail) {
      throw new Error("Email is required for checkout");
    }

    // Check if a Stripe customer exists
    const customers = await stripe.customers.list({ 
      email: customerEmail, 
      limit: 1 
    });
    
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    } else {
      // Create new Stripe customer
      const customer = await stripe.customers.create({
        email: customerEmail,
        name: customerData?.firstName && customerData?.lastName 
          ? `${customerData.firstName} ${customerData.lastName}` 
          : undefined,
      });
      customerId = customer.id;
    }

    // Create or update customer record in database
    const { data: existingCustomer } = await supabaseClient
      .from('customers')
      .select('id')
      .eq('email', customerEmail)
      .maybeSingle();

    let dbCustomerId;
    if (existingCustomer) {
      // Update existing customer
      const { data: updatedCustomer } = await supabaseClient
        .from('customers')
        .update({
          stripe_customer_id: customerId,
          first_name: customerData?.firstName,
          last_name: customerData?.lastName,
          user_id: user?.id || null,
        })
        .eq('id', existingCustomer.id)
        .select('id')
        .single();
      dbCustomerId = updatedCustomer.id;
    } else {
      // Create new customer
      const { data: newCustomer } = await supabaseClient
        .from('customers')
        .insert({
          email: customerEmail,
          first_name: customerData?.firstName,
          last_name: customerData?.lastName,
          stripe_customer_id: customerId,
          user_id: user?.id || null,
        })
        .select('id')
        .single();
      dbCustomerId = newCustomer.id;
    }

    // Create order record
    const { data: order } = await supabaseClient
      .from('orders')
      .insert({
        customer_id: dbCustomerId,
        product_name: 'The Urgency Block Vault',
        amount: 24700, // A$247 in cents
        currency: 'aud',
        status: 'pending',
      })
      .select('id')
      .single();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price: "price_1S950tPSKcW6nG3fGz8Q8hAQ",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/checkout`,
      metadata: {
        order_id: order.id,
        customer_id: dbCustomerId,
      },
    });

    // Update order with session ID
    await supabaseClient
      .from('orders')
      .update({ stripe_session_id: session.id })
      .eq('id', order.id);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});