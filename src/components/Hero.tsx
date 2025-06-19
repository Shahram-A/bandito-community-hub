
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Heart, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveCanvas from './InteractiveCanvas';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <InteractiveCanvas />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-bandito-purple/5"></div>
      
      {/* Clean animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-bandito-purple/20 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-bandito-red/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-bandito-gold/20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Clean main heading */}
          <div className="mb-8 animate-bounce-in">
            <div className="flex justify-center items-center gap-6 mb-6">
              <img 
                src="/lovable-uploads/27f88fa2-6435-4890-af10-864fb949f126.png" 
                alt="Los Banditos Logo" 
                className="w-16 h-16 animate-float hover-lift filter brightness-0 hover:filter-none transition-all duration-300"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground hover:text-gradient transition-all duration-300 leading-tight cursor-default">
              Los Banditos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 hover:text-bandito-purple transition-all duration-300 cursor-default">
              Live Fully. Give Freely. Grow Together.
            </p>
          </div>

          {/* Clean description */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed hover:text-bandito-purple transition-all duration-300 cursor-default">
              We're not just a club. We're a movement.<br />
              A family that parties together, helps together, and grows together.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto hover:text-bandito-purple transition-all duration-300 cursor-default">
              Join a community where adventure meets purpose, where fun activities blend with meaningful social impact, 
              and where every member has a voice in shaping our journey.
            </p>
          </div>

          {/* Clean Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover-lift transition-all duration-300">
              <Users className="w-8 h-8 text-bandito-purple mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-foreground hover:text-bandito-purple transition-all duration-300 cursor-default">Community First</h3>
              <p className="text-sm text-muted-foreground">Connect, share, and grow with like-minded people</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover-lift transition-all duration-300">
              <Heart className="w-8 h-8 text-bandito-red mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-foreground hover:text-bandito-purple transition-all duration-300 cursor-default">Social Impact</h3>
              <p className="text-sm text-muted-foreground">Make a difference through charity and community service</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover-lift transition-all duration-300">
              <Rocket className="w-8 h-8 text-bandito-gold mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-foreground hover:text-bandito-purple transition-all duration-300 cursor-default">Adventure Awaits</h3>
              <p className="text-sm text-muted-foreground">Tours, parties, drives, and unforgettable experiences</p>
            </div>
          </div>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/membership">
              <Button 
                size="lg" 
                className="gradient-bandito text-white hover:opacity-90 px-8 py-6 text-lg font-semibold group hover-lift"
              >
                Join the Banditos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-bandito-purple text-bandito-purple hover:bg-bandito-purple hover:text-white px-8 py-6 text-lg font-semibold hover-lift"
              >
                See Our Services
              </Button>
            </Link>
          </div>

          {/* Clean location badge */}
          <div className="mt-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-bandito-purple/10 border border-bandito-purple/20">
              <span className="text-sm font-medium text-bandito-purple">Based in Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
