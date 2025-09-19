import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import { useNavigate } from 'react-router-dom';

const VaultCard = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-vault-dark p-8 flex items-center justify-center font-vault">
      <div className="max-w-2xl mx-auto text-center bg-gradient-vault p-12 rounded-xl shadow-vault-glow relative">
        <div className="absolute top-4 right-4 bg-vault-gold text-black px-4 py-2 rounded-lg font-bold text-sm">
          <CountdownTimer initialTimeInSeconds={3592} />
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent leading-tight">
          The Urgency Block Vault
        </h1>
        
        <p className="text-lg text-vault-text-muted mb-8 leading-relaxed">
          Where time bends to Miguel's will. Where precision strikes like lightning. Where urgency creates unstoppable conversion spikes.
        </p>

        <p className="text-base text-vault-text-muted mb-8 leading-relaxed">
          Feel the urgency pulse through marble halls. Hear the echo of decisive moments. Your conversion spike awaits precise timing.
        </p>

        <div className="bg-vault-darker text-vault-gold-light italic p-6 rounded-lg mb-8 border border-vault-card">
          <p className="text-lg leading-relaxed">
            "Time doesn't wait. Neither should your conversions. I architect urgency. I engineer action."
          </p>
          <p className="mt-3 text-right font-semibold">— Miguel, Master of Moments</p>
        </div>

        <div className="text-4xl lg:text-5xl font-bold text-vault-gold mb-6">
          A$247
        </div>

        <ul className="text-vault-text-muted mb-8 space-y-3 text-lg">
          <li>Time Master</li>
          <li>Countdown spells</li>
          <li>Psychology triggers</li>
          <li>Urgency toolkit</li>
        </ul>

        <Button 
          variant="vault" 
          size="lg" 
          onClick={() => navigate('/checkout')}
          className="mb-4"
        >
          Seize This Moment
        </Button>

        <div className="text-vault-text-dim italic text-base mb-8">
          "Time bends to your will" — Miguel
        </div>

        <div className="text-vault-text-dim">
          <button 
            onClick={() => navigate('/gallery')}
            className="text-vault-text-dim underline hover:text-vault-gold transition-colors text-sm"
          >
            ← Return to Miguel's Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default VaultCard;