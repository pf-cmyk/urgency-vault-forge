import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-vault-dark p-8 flex items-center justify-center font-vault">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-gold bg-clip-text text-transparent">
          Miguel's Gallery
        </h1>
        <p className="text-xl text-vault-text-muted mb-12 leading-relaxed">
          Master architect of conversion. Creator of urgency. Designer of decisive moments.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-vault p-8 rounded-xl shadow-vault-glow border border-vault-card">
            <h3 className="text-2xl font-bold text-vault-gold mb-4">The Urgency Block Vault</h3>
            <p className="text-vault-text-muted mb-6">Where time bends to Miguel's will. Where precision strikes like lightning.</p>
            <Button variant="vault" onClick={() => navigate('/')}>
              Enter Vault
            </Button>
          </div>

          <div className="bg-gradient-vault p-8 rounded-xl opacity-60 border border-vault-card">
            <h3 className="text-2xl font-bold text-vault-text-dim mb-4">Future Creations</h3>
            <p className="text-vault-text-dim mb-6">More masterpieces coming soon...</p>
            <Button variant="outline" disabled className="text-vault-text-dim">
              Coming Soon
            </Button>
          </div>
        </div>

        <div className="text-vault-text-dim italic text-lg">
          "Every moment is an opportunity. Every second, a chance for conversion." — Miguel
        </div>
      </div>
    </div>
  );
};

export default Gallery;