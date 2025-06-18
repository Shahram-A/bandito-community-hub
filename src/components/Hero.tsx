
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Heart, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 gradient-bandito opacity-20 animate-gradient-shift"></div>
      
      {/* Complex animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-bandito-purple/30 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-bandito-red/30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-bandito-gold/40 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-cyan-400/20 animate-zoom-pulse"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 rounded-full bg-pink-500/20 animate-pulse-rainbow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Flag emoji and main heading with enhanced animations */}
          <div className="mb-8 animate-bounce-in">
            <div className="flex justify-center items-center gap-6 mb-6">
              <span className="text-6xl animate-zoom-pulse">🏴‍☠️</span>
              <img 
                src="/lovable-uploads/5a538d18-86a7-4cae-9b99-fd812d05b1ad.png" 
                alt="Banditos Patch" 
                className="w-20 h-20 animate-float hover-lift retro-glow"
                style={{ animationDelay: '1s' }}
              />
              <span className="text-6xl animate-zoom-pulse" style={{ animationDelay: '0.5s' }}>🤠</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight animate-text-glow">
              Los Banditos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 animate-slide-in-left">
              Live Fully. Give Freely. Grow Together.
            </p>
          </div>

          {/* Description with staggered animations */}
          <div className="mb-12 animate-slide-in-right">
            <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
              We're not just a club. We're a movement.<br />
              A family that parties together, helps together, and grows together.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a community where adventure meets purpose, where fun activities blend with meaningful social impact, 
              and where every member has a voice in shaping our journey.
            </p>
          </div>

          {/* Enhanced Stats/Features with complex hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover-lift hover-glow hover:retro-glow transition-all duration-300 card-3d animate-bounce-in">
              <Users className="w-8 h-8 text-bandito-purple mx-auto mb-3 animate-float" />
              <h3 className="font-semibold text-lg mb-2">Community First</h3>
              <p className="text-sm text-muted-foreground">Connect, share, and grow with like-minded people</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover-lift hover-glow hover:retro-glow-red transition-all duration-300 card-3d animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <Heart className="w-8 h-8 text-bandito-red mx-auto mb-3 animate-float" style={{ animationDelay: '1s' }} />
              <h3 className="font-semibold text-lg mb-2">Social Impact</h3>
              <p className="text-sm text-muted-foreground">Make a difference through charity and community service</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover-lift hover-glow hover:retro-glow-gold transition-all duration-300 card-3d animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <Rocket className="w-8 h-8 text-bandito-gold mx-auto mb-3 animate-float" style={{ animationDelay: '2s' }} />
              <h3 className="font-semibold text-lg mb-2">Adventure Awaits</h3>
              <p className="text-sm text-muted-foreground">Tours, parties, drives, and unforgettable experiences</p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <Link to="/membership">
              <Button 
                size="lg" 
                className="gradient-bandito text-white hover:opacity-90 retro-glow px-8 py-6 text-lg font-semibold group hover-lift hover-rainbow"
              >
                Join the Banditos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-bandito-purple text-bandito-purple hover:bg-bandito-purple hover:text-white px-8 py-6 text-lg font-semibold hover-lift hover-tilt"
              >
                See Our Services
              </Button>
            </Link>
          </div>

          {/* Enhanced location badge */}
          <div className="mt-12 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-bandito-purple/10 border border-bandito-purple/20 hover-glow animate-pulse-rainbow">
              <span className="text-sm font-medium text-bandito-purple">📍 Based in Lahore, Pakistan - Growing Fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
