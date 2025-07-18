import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 border-t border-primary/20 py-8">
      <div className="section-container">
        <div className="flex justify-center items-center">
          <p className="text-muted-foreground text-center">
            © {currentYear} <span className="font-semibold">Manyu Goyal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
