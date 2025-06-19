
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - now with hover effects */}
          <Link to="/" className="flex items-center space-x-3 hover-lift transition-all duration-300 group">
            <img 
              src="/lovable-uploads/0d6eac9a-aa81-4713-904c-88b07a62e72c.png" 
              alt="Los Banditos Logo" 
              className="h-10 w-auto filter brightness-0 group-hover:filter-none group-hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300"
            />
            <div>
              <h1 className="text-xl font-bold text-black group-hover:text-bandito-purple group-hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300">Los Banditos</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Live Fully. Give Freely. Grow Together.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#community" className="text-foreground hover:text-bandito-purple transition-colors">Community</a>
            <a href="#events" className="text-foreground hover:text-bandito-purple transition-colors">Events</a>
            <a href="#about" className="text-foreground hover:text-bandito-purple transition-colors">About</a>
            <a href="#founder" className="text-foreground hover:text-bandito-purple transition-colors">Founder</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-bandito-purple text-bandito-purple hover:bg-bandito-purple hover:text-white">
              Login
            </Button>
            <Link to="/membership">
              <Button className="bg-black text-white hover:bg-bandito-purple hover:text-white hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] transition-all duration-300">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#community" className="text-foreground hover:text-bandito-purple transition-colors">Community</a>
              <a href="#events" className="text-foreground hover:text-bandito-purple transition-colors">Events</a>
              <a href="#about" className="text-foreground hover:text-bandito-purple transition-colors">About</a>
              <a href="#founder" className="text-foreground hover:text-bandito-purple transition-colors">Founder</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-bandito-purple text-bandito-purple hover:bg-bandito-purple hover:text-white">
                  Login
                </Button>
                <Link to="/membership">
                  <Button className="bg-black text-white hover:bg-bandito-purple hover:text-white w-full">
                    Join Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
