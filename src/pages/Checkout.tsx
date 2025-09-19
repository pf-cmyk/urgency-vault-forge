import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '@/components/CountdownTimer';

const Checkout = () => {
  const navigate = useNavigate();

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

        <div className="space-y-4 mb-8">
          <Button variant="vault" size="lg" className="w-full text-lg py-6">
            Complete Purchase - A$247
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