import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CountdownTimer from '@/components/CountdownTimer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="min-h-screen font-observatory">
      
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-vault-dark/80 backdrop-blur-sm border-b border-vault-border/20 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-text-gold bg-clip-text text-transparent">
            The Urgency Block
          </div>
          <div className="flex items-center gap-4">
            {user && (
              <span className="text-vault-text-muted text-sm">
                Welcome, {user.email}
              </span>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleAuthAction}
              className="border-vault-gold/20 text-vault-gold hover:bg-vault-gold/10"
            >
              {user ? 'Sign Out' : 'Sign In'}
            </Button>
          </div>
        </div>
      </header>

      {/* Fixed countdown timer */}
      <div className="fixed top-20 right-6 bg-gradient-gold-luminous text-black px-8 py-4 rounded-xl font-bold text-base shadow-gold-glow z-50 border border-vault-gold/40 backdrop-blur-sm">
        <CountdownTimer initialTimeInSeconds={3592} />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-vault-glow"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-vault-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-vault-gold-dim/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-6xl lg:text-9xl font-bold mb-6 bg-gradient-text-gold bg-clip-text text-transparent leading-none tracking-tight">
              The Urgency Block
            </h1>
            <div className="text-3xl lg:text-5xl font-light text-vault-text-secondary tracking-widest uppercase mb-8">
              Master of Moments
            </div>
          </div>

          <p className="text-2xl lg:text-3xl text-vault-text-primary leading-relaxed font-medium mb-12 max-w-4xl mx-auto">
            Where time bends to your will. Where precision strikes like lightning.
            <br />
            Where urgency creates unstoppable conversion spikes.
          </p>

          <Button 
            variant="vault" 
            size="lg"
            onClick={() => navigate('/checkout')}
            className="text-xl px-16 py-6 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-lg mb-8"
          >
            Seize This Moment - A$247
          </Button>

          <div className="text-vault-text-muted text-lg">
            Limited time access expires soon
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vault-deep/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-text-gold bg-clip-text text-transparent mb-8">
              Time Is Bleeding Away
            </h2>
            <p className="text-2xl text-vault-text-secondary leading-relaxed max-w-4xl mx-auto">
              Every second your visitors hesitate, you lose money. Every moment without urgency 
              is a missed conversion. The clock is ticking on your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-vault-surface backdrop-blur-xl border-vault-border shadow-vault-deep">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-bold text-vault-gold mb-4">73%</div>
                <h3 className="text-xl font-bold text-vault-text-primary mb-4">Lost Conversions</h3>
                <p className="text-vault-text-secondary">of visitors leave without taking action when there's no sense of urgency</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-vault-surface backdrop-blur-xl border-vault-border shadow-vault-deep">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-bold text-vault-gold mb-4">47%</div>
                <h3 className="text-xl font-bold text-vault-text-primary mb-4">Revenue Loss</h3>
                <p className="text-vault-text-secondary">average revenue decrease when urgency psychology is ignored</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-vault-surface backdrop-blur-xl border-vault-border shadow-vault-deep">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-bold text-vault-gold mb-4">8sec</div>
                <h3 className="text-xl font-bold text-vault-text-primary mb-4">Decision Window</h3>
                <p className="text-vault-text-secondary">average time visitors spend before deciding to stay or leave your page</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-vault-deep/40"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-text-gold bg-clip-text text-transparent mb-8">
              Master the Moment
            </h2>
            <p className="text-2xl text-vault-text-secondary leading-relaxed max-w-4xl mx-auto">
              The Urgency Block transforms hesitation into action. It weaponizes psychology. 
              It turns time pressure into profit pressure.
            </p>
          </div>

          <div className="bg-gradient-vault-surface backdrop-blur-xl rounded-2xl border-2 border-vault-border shadow-vault-deep p-12 relative overflow-hidden">
            <div className="absolute inset-0 rounded-2xl shadow-inner-glow"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vault-gold/60 to-transparent"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-vault-text-primary mb-6">
                  Psychology Meets Precision
                </h3>
                <ul className="space-y-4 text-xl text-vault-text-secondary">
                  <li className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-vault-gold rounded-full shadow-gold-glow"></div>
                    Scarcity triggers that create instant desire
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-vault-gold-bright rounded-full shadow-gold-glow"></div>
                    Time-based pressure that accelerates decisions  
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-vault-gold-dim rounded-full shadow-gold-glow"></div>
                    Social proof mechanics that validate urgency
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-vault-gold rounded-full shadow-gold-glow"></div>
                    Loss aversion techniques that prevent leaving
                  </li>
                </ul>
              </div>
              
              <div className="bg-vault-deep/90 backdrop-blur-sm border border-vault-gold/30 p-8 rounded-xl">
                <div className="text-vault-gold-bright italic text-xl leading-relaxed font-medium mb-6">
                  "I don't create urgency. I reveal it. I don't manufacture pressure. 
                  I amplify what's already there, waiting to convert."
                </div>
                <div className="text-vault-text-secondary font-bold">
                  — Miguel, Master of Moments
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-text-gold bg-clip-text text-transparent mb-8">
              Your Urgency Arsenal
            </h2>
            <p className="text-2xl text-vault-text-secondary leading-relaxed max-w-4xl mx-auto">
              Every tool designed to compress decision time. Every technique proven to multiply conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Countdown Mastery", desc: "Precision timers that create unstoppable momentum" },
              { title: "Scarcity Scripts", desc: "Psychology-backed copy that triggers immediate action" },  
              { title: "Pressure Points", desc: "Strategic placement for maximum conversion impact" },
              { title: "Urgency Analytics", desc: "Real-time tracking of urgency effectiveness" },
              { title: "Decision Triggers", desc: "Psychological switches that accelerate choices" },
              { title: "Time Compression", desc: "Techniques to make every second count double" },
              { title: "Conversion Accelerators", desc: "Speed multipliers for your sales process" },
              { title: "Urgency Automation", desc: "Set-and-forget systems that work 24/7" }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-vault-surface backdrop-blur-xl border-vault-border shadow-vault-deep hover:shadow-gold-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-vault-text-primary mb-3">{feature.title}</h3>
                  <p className="text-vault-text-secondary text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-vault-deep/20"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-text-gold bg-clip-text text-transparent mb-8">
              Results Speak Loudly
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { metric: "347%", label: "Conversion Increase", quote: "My sales page went from dying to flying in 24 hours." },
              { metric: "892%", label: "Revenue Boost", quote: "The urgency techniques are pure psychological gold." },
              { metric: "12min", label: "Implementation", quote: "Fastest ROI I've ever seen in my business." }
            ].map((proof, index) => (
              <Card key={index} className="bg-gradient-vault-surface backdrop-blur-xl border-vault-border shadow-vault-deep">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-vault-gold mb-4">{proof.metric}</div>
                  <h3 className="text-xl font-bold text-vault-text-primary mb-4">{proof.label}</h3>
                  <p className="text-vault-text-secondary italic">"{proof.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-vault-glow"></div>
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="bg-gradient-vault-surface backdrop-blur-xl rounded-2xl border-2 border-vault-border shadow-vault-deep p-16 relative overflow-hidden">
            <div className="absolute inset-0 rounded-2xl shadow-inner-glow"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-vault-gold/60 to-transparent"></div>
            
            <div className="relative">
              <h2 className="text-5xl font-bold bg-gradient-text-gold bg-clip-text text-transparent mb-8">
                Time-Sensitive Access
              </h2>
              
              <div className="text-8xl font-bold bg-gradient-text-gold bg-clip-text text-transparent mb-4">
                A$247
              </div>
              <div className="text-vault-text-muted text-xl mb-12">
                Complete urgency mastery system
              </div>

              <Button 
                variant="vault" 
                size="lg"
                onClick={() => navigate('/checkout')}
                className="text-2xl px-20 py-8 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-lg mb-8"
              >
                Claim Your Moment Now
              </Button>

              <div className="text-vault-text-muted text-lg">
                Access expires when the timer reaches zero
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-text-gold bg-clip-text text-transparent mb-8">
              Questions Answered
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "How fast will I see results?", a: "Most users see immediate conversion increases within hours of implementation." },
              { q: "Is this ethical?", a: "Absolutely. We create genuine urgency around real value and limited opportunities." },
              { q: "What if it doesn't work for my business?", a: "30-day money-back guarantee. No questions asked." },
              { q: "How is this different from other urgency tactics?", a: "This isn't about fake timers. It's about psychological architecture and authentic pressure points." }
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-vault-surface backdrop-blur-xl border-vault-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-vault-text-primary mb-4">{faq.q}</h3>
                  <p className="text-vault-text-secondary">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-vault-deep/60"></div>
        <div className="max-w-4xl mx-auto relative text-center">
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-text-gold bg-clip-text text-transparent mb-8">
            The Moment Is Now
          </h2>
          <p className="text-2xl text-vault-text-secondary mb-12 leading-relaxed">
            Every second you wait, another opportunity slips away. 
            Every moment of hesitation costs you conversions.
          </p>

          <Button 
            variant="vault" 
            size="lg"
            onClick={() => navigate('/checkout')}
            className="text-2xl px-20 py-8 rounded-xl font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-lg mb-8"
          >
            Seize This Moment - A$247
          </Button>

          <div className="text-vault-text-muted italic text-xl">
            "Time bends to your will." — Miguel
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;