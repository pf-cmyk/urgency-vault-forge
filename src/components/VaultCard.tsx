import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import { useNavigate } from 'react-router-dom';

const VaultCard = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed countdown timer */}
      <div className="fixed top-6 right-6 bg-vault-gold text-black px-6 py-3 rounded-2xl font-bold text-sm shadow-gold-glow animate-pulse z-50 border border-vault-gold/30">
        <CountdownTimer initialTimeInSeconds={3592} />
      </div>

      {/* Main vault observatory */}
      <section className="min-h-screen flex items-center justify-center font-observatory p-6">
        <div className="relative max-w-4xl w-full">
          
          {/* Background constellation effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-2 h-2 bg-vault-gold rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-1 h-1 bg-vault-gold-bright rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-vault-gold rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-40 right-10 w-1 h-1 bg-vault-gold-dim rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Main vault chamber */}
          <div className="relative bg-gradient-vault-surface backdrop-blur-sm rounded-3xl border border-vault-border shadow-vault-deep p-12 text-center overflow-hidden">
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-3xl shadow-inner-glow"></div>
            
            {/* Ambient lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-vault-gold/10 rounded-full blur-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              
              {/* Observatory title */}
              <div className="mb-8">
                <h1 className="text-6xl lg:text-7xl font-bold mb-4 bg-gradient-text-gold bg-clip-text text-transparent leading-tight tracking-tight">
                  The Urgency Block
                </h1>
                <div className="text-2xl lg:text-3xl font-light text-vault-text-secondary tracking-wide">
                  Observatory Vault
                </div>
              </div>

              {/* Philosophical description */}
              <div className="mb-12 space-y-4">
                <p className="text-xl text-vault-text-secondary leading-relaxed font-light">
                  Where time bends to Miguel's celestial will.
                </p>
                <p className="text-lg text-vault-text-muted leading-relaxed">
                  Where precision strikes like stellar lightning. Where urgency creates
                  <br className="hidden md:block" />
                  unstoppable conversion constellations.
                </p>
              </div>

              {/* Miguel's quote chamber */}
              <div className="relative mb-12">
                <div className="bg-vault-deep/80 backdrop-blur-sm border-l-4 border-vault-gold p-8 rounded-2xl shadow-lg">
                  <div className="text-vault-gold-bright italic text-xl leading-relaxed font-light">
                    "Time doesn't wait. Neither should your conversions.
                    <br />
                    I architect urgency. I engineer cosmic action."
                  </div>
                  <div className="mt-6 text-vault-text-secondary font-semibold">
                    — Miguel, Master of Temporal Moments
                  </div>
                </div>
                
                {/* Subtle glow behind quote */}
                <div className="absolute inset-0 bg-vault-gold/5 rounded-2xl blur-xl"></div>
              </div>

              {/* Observatory pricing */}
              <div className="mb-8">
                <div className="text-5xl lg:text-6xl font-bold text-vault-gold mb-2">
                  A$247
                </div>
                <div className="text-vault-text-muted text-lg">
                  Access to the temporal observatory
                </div>
              </div>

              {/* Vault instruments */}
              <div className="mb-12">
                <ul className="text-vault-text-secondary space-y-3 text-lg font-light">
                  <li className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-vault-gold rounded-full"></span>
                    Time Master Observatory
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-vault-gold-bright rounded-full"></span>
                    Countdown Constellation Spells
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-vault-gold-dim rounded-full"></span>
                    Cosmic Psychology Triggers
                  </li>
                  <li className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-vault-gold rounded-full"></span>
                    Stellar Urgency Toolkit
                  </li>
                </ul>
              </div>

              {/* Observatory access portal */}
              <div className="mb-10">
                <Button 
                  variant="vault" 
                  size="lg" 
                  onClick={() => navigate('/checkout?vault=urgency')}
                  className="text-lg px-12 py-4 rounded-2xl font-semibold tracking-wide hover:scale-105 transition-all duration-300"
                >
                  Enter the Observatory
                </Button>
              </div>

              {/* Miguel's temporal blessing */}
              <div className="mb-8 text-vault-text-muted italic text-lg font-light">
                "Time bends to your cosmic will." — Miguel
              </div>

              {/* Navigation portal */}
              <div className="text-vault-text-muted">
                <button 
                  onClick={() => navigate('/gallery')}
                  className="text-vault-text-muted underline hover:text-vault-gold transition-colors duration-300 text-base"
                >
                  ← Return to Miguel's Celestial Gallery
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