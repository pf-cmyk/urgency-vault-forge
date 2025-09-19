import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Here you could verify the payment with your backend if needed
    // For now, we'll just show success after a brief delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [sessionId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-vault-dark p-8 flex items-center justify-center font-vault">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-vault-gold mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-vault-gold mb-2">
            Processing your payment...
          </h1>
          <p className="text-vault-text-muted">
            Please wait while we confirm your purchase.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vault-dark p-8 flex items-center justify-center font-vault">
      <div className="max-w-2xl mx-auto text-center bg-gradient-vault p-12 rounded-xl shadow-vault-glow">
        <div className="mb-8">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Payment Successful!
          </h1>
          <p className="text-xl text-vault-text-muted mb-6">
            Welcome to The Urgency Block Vault
          </p>
        </div>

        <div className="bg-vault-darker border border-vault-card rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-vault-gold mb-4">Your Purchase</h2>
          <div className="text-left space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-vault-text">Product:</span>
              <span className="text-vault-gold font-semibold">The Urgency Block Vault</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-vault-text">Amount:</span>
              <span className="text-vault-gold font-semibold">A$247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-vault-text">Status:</span>
              <span className="text-green-500 font-semibold">Completed</span>
            </div>
          </div>
          
          <div className="border-t border-vault-card pt-6">
            <h3 className="text-lg font-bold text-vault-gold mb-3">What's Included:</h3>
            <ul className="text-left text-vault-text-muted space-y-2">
              <li className="flex items-center"><span className="text-vault-gold mr-3">✓</span>Time Master</li>
              <li className="flex items-center"><span className="text-vault-gold mr-3">✓</span>Countdown spells</li>
              <li className="flex items-center"><span className="text-vault-gold mr-3">✓</span>Psychology triggers</li>
              <li className="flex items-center"><span className="text-vault-gold mr-3">✓</span>Urgency toolkit</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-vault-text-dim">
            You will receive an email confirmation shortly with access details.
          </p>
          <p className="text-xs text-vault-text-dim">
            If you have any questions, please contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/')}
            variant="vault" 
            size="lg" 
            className="w-full"
          >
            Return to Homepage
          </Button>
        </div>

        <div className="text-vault-text-dim italic mt-8">
          "Success is not final, failure is not fatal: it is the courage to continue that counts." — Miguel
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;