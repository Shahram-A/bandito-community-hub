
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bandito-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/0d6eac9a-aa81-4713-904c-88b07a62e72c.png" 
                alt="Los Banditos Logo" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="text-2xl font-bold">Los Banditos</h3>
                <p className="text-gray-300">Live Fully. Give Freely. Grow Together.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Join our movement of adventure, purpose, and community. Where every member has a voice, 
              every activity has meaning, and every day brings new possibilities.
            </p>
            <div className="flex items-center text-gray-300 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Based in Lahore, Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#community" className="hover:text-bandito-purple transition-colors">Community</a></li>
              <li><a href="#events" className="hover:text-bandito-purple transition-colors">Events</a></li>
              <li><a href="#about" className="hover:text-bandito-purple transition-colors">About</a></li>
              <li><a href="#founder" className="hover:text-bandito-purple transition-colors">Founder</a></li>
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <div className="space-y-3">
              <Button className="w-full bg-black text-white hover:bg-bandito-purple hover:text-white hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] transition-all duration-300">
                Join Now
              </Button>
              <Button variant="outline" className="w-full border-white text-white bg-transparent hover:bg-white hover:text-bandito-dark transition-all duration-300">
                See Events
              </Button>
              <Button variant="ghost" className="w-full text-bandito-gold hover:bg-bandito-gold/10">
                Suggest an Idea
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Community Quote */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-xl font-semibold text-gray-200 mb-2">Follow the Journey</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-bandito-purple transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-bandito-red transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-lg font-medium text-gray-200 mb-2 flex items-center justify-center md:justify-end">
                <Heart className="w-5 h-5 text-bandito-red mr-2" />
                "In Los Banditos, we don't just make memories — we make change."
              </p>
              <p className="text-sm text-gray-400">Building community, one adventure at a time</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Los Banditos. Made with ❤️ in Lahore, Pakistan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
