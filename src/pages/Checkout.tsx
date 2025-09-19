import { Button } from '@/components/ui/button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CountdownTimer from '@/components/CountdownTimer';

const Checkout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const isVaultPurchase = searchParams.get('vault') === 'urgency';
  const isAddonPurchase = searchParams.get('addon') === 'precision';
  
  const getProductInfo = () => {
    if (isAddonPurchase) {
      return {
        title: 'Precision Layer Add-On',
        price: 'A$97',
        features: [
          'Emotion-triggered countdown logic',
          'Urgency copy generator (tone-matched)',
          'Deploy pacing optimizer'
        ]
      };
    }
    return {
      title: 'The Urgency Block Vault',
      price: 'A$247',
      features: [
        'Time Master',
        'Countdown spells', 
        'Psychology triggers',
        'Urgency toolkit'
      ]
    };
  };

  const product = getProductInfo();

  return (
    <div className="min-h-screen bg-vault-dark p-8 flex items-center justify-center font-vault">
      <div className="max-w-2xl mx-auto text-center bg-gradient-vault p-12 rounded-xl shadow-vault-glow relative">
        <div className="absolute top-4 right-4 bg-vault-gold text-black px-4 py-2 rounded-lg font-bold text-sm animate-pulse">
          <CountdownTimer initialTimeInSeconds={3532} />
        </div>

        <h1 className="text-4xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
          {isAddonPurchase ? 'Add Precision Layer' : 'Secure Your Vault Access'}
        </h1>
        
        <div className="bg-vault-darker border border-vault-card rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-vault-gold mb-4">{product.title}</h2>
          <div className="text-3xl font-bold text-vault-gold mb-6">{product.price}</div>
          
          <ul className="text-left text-vault-text-muted space-y-3 mb-6">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-vault-gold mr-3">✓</span>{feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 mb-8">
          <Button variant="vault" size="lg" className="w-full text-lg py-6">
            Complete Purchase - {product.price}
          </Button>
          
          <p className="text-xs text-vault-text-dim">
            Secure payment processing • 30-day money-back guarantee
          </p>
        </div>

        <div className="text-vault-text-dim italic mb-6">
          {isAddonPurchase 
            ? '"Precision without urgency is drift. Miguel will recalibrate your chamber."' 
            : '"The moment of decision defines the trajectory of success."'} — Miguel
        </div>

        <button 
          onClick={() => navigate('/')}
          className="text-vault-text-dim underline hover:text-vault-gold transition-colors text-sm"
        >
          ← Return to Vault
        </button>
      </div>
    </div>
  );
};

export default Checkout;