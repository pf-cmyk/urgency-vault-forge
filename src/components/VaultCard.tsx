import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import { useNavigate } from 'react-router-dom';

const VaultCard = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed countdown timer */}
      <div className="fixed top-6 right-6 bg-gradient-gold-luminous text-black px-8 py-4 rounded-xl font-bold text-base shadow-gold-glow z-50 border border-vault-gold/40 backdrop-blur-sm">
        <CountdownTimer initialTimeInSeconds={3592} />
      </div>

      {/* Main vault section */}
      <section className="min-h-screen flex items-center justify-center font-observatory p-6 relative overflow-hidden">
        
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-vault-glow"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-vault-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-vault-gold-dim/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl w-full">
          {/* Main vault container */}
          <div className="relative bg-gradient-vault-surface backdrop-blur-xl rounded-2xl border-2 border-vault-border shadow-vault-deep p-16 text-center overflow-hidden">
            
            {/* Inner glow and highlights */}
            <div className="absolute inset-0 rounded-2xl shadow-inner-glow"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vault-gold/60 to-transparent"></div>
            
            {/* Content */}
            <div className="relative z-10">
              
              {/* Main title */}
              <div className="mb-12">
                <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-text-gold bg-clip-text text-transparent leading-none tracking-tight">
                  The Urgency Block
                </h1>
                <div className="text-3xl lg:text-4xl font-light text-vault-text-secondary tracking-widest uppercase">
                  Vault
                </div>
              </div>

              {/* Description */}
              <div className="mb-16 space-y-6 max-w-3xl mx-auto">
                <p className="text-2xl text-vault-text-primary leading-relaxed font-medium">
                  Where time bends to Miguel's will.
                </p>
                <p className="text-xl text-vault-text-secondary leading-relaxed">
                  Where precision strikes like lightning. Where urgency creates
                  <br className="hidden md:block" />
                  unstoppable conversion spikes.
                </p>
              </div>

              {/* Miguel's quote */}
              <div className="relative mb-16">
                <div className="bg-vault-deep/90 backdrop-blur-sm border border-vault-gold/30 p-12 rounded-xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold-luminous"></div>
                  <div className="text-vault-gold-bright italic text-2xl leading-relaxed font-medium mb-8">
                    "Time doesn't wait. Neither should your conversions.
                    <br />
                    I architect urgency. I engineer action."
                  </div>
                  <div className="text-vault-text-secondary font-bold text-lg">
                    — Miguel, Master of Moments
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-12">
                <div className="text-7xl lg:text-8xl font-bold bg-gradient-text-gold bg-clip-text text-transparent mb-4">
                  A$247
                </div>
                <div className="text-vault-text-muted text-xl font-light">
                  Access to the vault
                </div>
              </div>

              {/* Features */}
              <div className="mb-16">
                <ul className="text-vault-text-secondary space-y-4 text-xl font-light max-w-md mx-auto">
                  <li className="flex items-center justify-center gap-4">
                    <div className="w-3 h-3 bg-vault-gold rounded-full shadow-gold-glow"></div>
                    Time Master
                  </li>
                  <li className="flex items-center justify-center gap-4">
                    <div className="w-3 h-3 bg-vault-gold-bright rounded-full shadow-gold-glow"></div>
                    Countdown Spells
                  </li>
                  <li className="flex items-center justify-center gap-4">
                    <div className="w-3 h-3 bg-vault-gold-dim rounded-full shadow-gold-glow"></div>
                    Psychology Triggers
                  </li>
                  <li className="flex items-center justify-center gap-4">
                    <div className="w-3 h-3 bg-vault-gold rounded-full shadow-gold-glow"></div>
                    Urgency Toolkit
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mb-12">
                <Button 
                  variant="vault" 
                  size="lg" 
                  onClick={() => navigate('/checkout?vault=urgency')}
                  className="text-xl px-16 py-6 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Seize This Moment
                </Button>
              </div>

              {/* Footer quote */}
              <div className="mb-10 text-vault-text-muted italic text-xl font-light">
                "Time bends to your will." — Miguel
              </div>

              {/* Navigation */}
              <div className="text-vault-text-muted">
                <button 
                  onClick={() => navigate('/gallery')}
                  className="text-vault-text-muted hover:text-vault-gold transition-colors duration-300 text-lg font-light border-b border-vault-text-muted/30 hover:border-vault-gold/50"
                >
                  ← Return to Miguel's Gallery
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VaultCard;