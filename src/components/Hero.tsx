
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Heart, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bandito opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-bandito-purple/20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-bandito-red/20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-bandito-gold/30 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Flag emoji and main heading */}
          <div className="mb-8 animate-fade-in">
            <span className="text-6xl mb-4 block">🏴‍☠️</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
              Los Banditos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
              Live Fully. Give Freely. Grow Together.
            </p>
          </div>

          {/* Description */}
          <div className="mb-12 animate-fade-in delay-200">
            <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
              We're not just a club. We're a movement.<br />
              A family that parties together, helps together, and grows together.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a community where adventure meets purpose, where fun activities blend with meaningful social impact, 
              and where every member has a voice in shaping our journey.
            </p>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in delay-400">
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:retro-glow transition-all duration-300">
              <Users className="w-8 h-8 text-bandito-purple mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Community First</h3>
              <p className="text-sm text-muted-foreground">Connect, share, and grow with like-minded people</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:retro-glow-red transition-all duration-300">
              <Heart className="w-8 h-8 text-bandito-red mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Social Impact</h3>
              <p className="text-sm text-muted-foreground">Make a difference through charity and community service</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:retro-glow transition-all duration-300">
              <Rocket className="w-8 h-8 text-bandito-gold mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Adventure Awaits</h3>
              <p className="text-sm text-muted-foreground">Tours, parties, drives, and unforgettable experiences</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-600">
            <Button 
              size="lg" 
              className="gradient-bandito text-white hover:opacity-90 retro-glow px-8 py-6 text-lg font-semibold group"
            >
              Join the Banditos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-bandito-purple text-bandito-purple hover:bg-bandito-purple hover:text-white px-8 py-6 text-lg font-semibold"
            >
              See Upcoming Events
            </Button>
          </div>

          {/* Location badge */}
          <div className="mt-12 animate-fade-in delay-800">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-bandito-purple/10 border border-bandito-purple/20">
              <span className="text-sm font-medium text-bandito-purple">📍 Based in Lahore, Pakistan - Growing Fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
