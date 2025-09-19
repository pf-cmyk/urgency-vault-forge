import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import { useNavigate } from 'react-router-dom';

const VaultCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed top-4 right-4 bg-vault-gold text-black px-4 py-2 rounded-lg font-bold text-sm shadow-lg animate-pulse z-50">
        <CountdownTimer initialTimeInSeconds={3592} />
      </div>

      <section className="min-h-screen p-8 flex items-center justify-center font-vault">
        <div className="max-w-3xl mx-auto text-center py-16 px-8">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent leading-tight">
            The Urgency Block Vault
          </h1>
          
          <div className="text-lg text-vault-text-muted mb-8 leading-relaxed">
            Where time bends to Miguel's will.<br/>
            Where precision strikes like lightning.<br/>
            Where urgency creates unstoppable conversion spikes.
          </div>

          <div className="bg-vault-card border-l-4 border-vault-gold text-vault-gold-light italic p-4 rounded-lg mb-8">
            <p className="text-lg leading-relaxed">
              "Time doesn't wait. Neither should your conversions.<br/>
              I architect urgency. I engineer action."<br/>
              — Miguel, Master of Moments
            </p>
          </div>

          <div className="text-4xl font-bold text-vault-gold mb-4">
            A$247
          </div>

          <ul className="text-vault-text-muted mb-8 space-y-2">
            <li>Time Master</li>
            <li>Countdown spells</li>
            <li>Psychology triggers</li>
            <li>Urgency toolkit</li>
          </ul>

          <Button 
            variant="vault" 
            size="lg" 
            onClick={() => navigate('/checkout?vault=urgency')}
            className="mb-8 shadow-lg"
          >
            Seize This Moment
          </Button>

          <div className="text-vault-text-dim italic mb-8">
            "Time bends to your will." — Miguel
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
    </>
  );
};

export default VaultCard;