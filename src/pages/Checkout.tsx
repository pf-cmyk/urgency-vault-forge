import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';
import CountdownTimer from '@/components/CountdownTimer';

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [isLoading, setIsLoading] = useState(false);
  const [guestData, setGuestData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  const handlePurchase = async () => {
    setIsLoading(true);
    
    try {
      // Validate guest data if user is not logged in
      if (!user && !guestData.email) {
        toast({
          title: "Email Required",
          description: "Please enter your email address to continue.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          customerData: user ? null : guestData
        }
      });

      if (error) {
        throw error;
      }

      if (data?.url) {
        // Redirect to Stripe Checkout
        window.open(data.url, '_blank');
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error: any) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-vault-dark p-8 flex items-center justify-center font-vault">
      <div className="max-w-2xl mx-auto text-center bg-gradient-vault p-12 rounded-xl shadow-vault-glow relative">
        <div className="absolute top-4 right-4 bg-vault-gold text-black px-4 py-2 rounded-lg font-bold text-sm">
          <CountdownTimer initialTimeInSeconds={3532} />
        </div>

        <h1 className="text-4xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
          Secure Your Vault Access
        </h1>
        
        <div className="bg-vault-darker border border-vault-card rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-vault-gold mb-4">The Urgency Block Vault</h2>
          <div className="text-3xl font-bold text-vault-gold mb-6">A$247</div>
          
          <ul className="text-left text-vault-text-muted space-y-3 mb-6">
            <li className="flex items-center"><span className="text-vault-gold mr-3">✓</span>Time Master</li>
            <li className="flex items-center"><span className="text-vault-gold mr-3">✓</span>Countdown spells</li>
            <li className="flex items-center"><span className="text-vault-gold mr-3">✓</span>Psychology triggers</li>
            <li className="flex items-center"><span className="text-vault-gold mr-3">✓</span>Urgency toolkit</li>
          </ul>
        </div>

        {!user && (
          <div className="bg-vault-darker border border-vault-card rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-vault-gold mb-4">Your Details</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-vault-text">First Name</Label>
                  <Input
                    id="firstName"
                    value={guestData.firstName}
                    onChange={(e) => setGuestData({ ...guestData, firstName: e.target.value })}
                    className="bg-vault-dark border-vault-card text-vault-text"
                    placeholder="Your first name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-vault-text">Last Name</Label>
                  <Input
                    id="lastName"
                    value={guestData.lastName}
                    onChange={(e) => setGuestData({ ...guestData, lastName: e.target.value })}
                    className="bg-vault-dark border-vault-card text-vault-text"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-vault-text">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={guestData.email}
                  onChange={(e) => setGuestData({ ...guestData, email: e.target.value })}
                  className="bg-vault-dark border-vault-card text-vault-text"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <button 
                onClick={() => navigate('/auth')}
                className="text-vault-gold underline hover:text-vault-gold/80 transition-colors text-sm"
              >
                Already have an account? Sign in
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4 mb-8">
          <Button 
            variant="vault" 
            size="lg" 
            className="w-full text-lg py-6"
            onClick={handlePurchase}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Complete Purchase - A$247'}
          </Button>
          
          <p className="text-xs text-vault-text-dim">
            Secure payment processing • 30-day money-back guarantee
          </p>
        </div>

        <div className="text-vault-text-dim italic mb-6">
          "The moment of decision defines the trajectory of success." — Miguel
        </div>

        <button 
          onClick={() => navigate('/')}
          className="text-vault-text-dim underline hover:text-vault-gold transition-colors text-sm"
        >
          ← Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default Checkout;