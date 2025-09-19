import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-vault-dark p-8 flex items-center justify-center font-vault">
      <div className="text-center bg-gradient-vault p-12 rounded-xl shadow-vault-glow">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-vault-text-muted mb-8">The vault door you seek does not exist</p>
        <p className="text-vault-text-dim italic mb-8">"Even masters sometimes take wrong turns in the halls of time." — Miguel</p>
        <a 
          href="/" 
          className="inline-block bg-vault-gold text-black px-8 py-3 rounded-lg font-bold hover:bg-vault-gold-light transition-colors"
        >
          Return to the Vault
        </a>
      </div>
    </div>
  );
};

export default NotFound;
