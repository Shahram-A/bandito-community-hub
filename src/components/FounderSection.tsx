
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Users, Heart, Star } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 bg-gradient-bandito-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-text-glow">
              A Note from the Founder
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Enhanced Founder Image */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="relative inline-block">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/a4b780f9-3334-4971-93f1-c5927d32b0eb.png" 
                    alt="Shahram - Founder of Los Banditos" 
                    className="profile-pic mx-auto retro-glow hover-lift animate-float"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-bandito-purple/20 to-bandito-red/20 animate-pulse-rainbow"></div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border-2 border-bandito-purple/30 rounded-2xl px-6 py-3 shadow-lg hover-glow">
                  <p className="font-bold text-lg text-gradient">Shahram</p>
                  <p className="text-sm text-muted-foreground">Founder & Chief Bandito</p>
                </div>
              </div>
            </div>

            {/* Enhanced Founder Message */}
            <div className="animate-slide-in-right">
              <Card className="border-2 border-bandito-purple/30 bg-gradient-bandito-soft hover-lift card-3d retro-glow">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-bandito-purple mb-4 animate-float" />
                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    <p>
                      Los Banditos started as a small idea — a space where people could come together, 
                      not just to have fun, but to care for each other and for those who need a little extra support.
                    </p>
                    <p>
                      I've always believed that real happiness comes from shared experiences. Whether it's helping 
                      someone in need, going on a late-night drive with friends, planning a trip, or just being 
                      there when it matters — life feels better when we're connected.
                    </p>
                    <p>
                      This community is built on kindness, laughter, adventure, and purpose. It belongs to all of us.
                    </p>
                    <p className="font-semibold text-bandito-purple animate-text-glow">
                      If you're someone who wants to enjoy life and make a difference, you're already one of us.
                    </p>
                    <p className="text-lg font-bold text-gradient">
                      Welcome to Los Banditos.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="font-semibold text-lg">Shahram</p>
                    <p className="text-muted-foreground italic">Just another Bandito like you</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Team Section */}
          <div className="animate-bounce-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient animate-text-glow">Meet Our Amazing Team</h3>
            
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/acdff4a3-a747-4bc9-9896-b429234abf01.png" 
                  alt="Los Banditos Team" 
                  className="rounded-3xl shadow-2xl max-w-full h-auto hover-lift retro-glow max-h-80 object-cover"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-bandito-purple/10 to-bandito-red/10 animate-pulse-rainbow"></div>
              </div>
            </div>
            
            {/* Team appreciation section */}
            <Card className="bg-background/80 backdrop-blur-sm border-2 border-bandito-gold/30 retro-glow-gold hover-lift">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center items-center mb-4">
                  <Users className="w-8 h-8 text-bandito-gold mr-3 animate-float" />
                  <Heart className="w-8 h-8 text-bandito-red mr-3 animate-zoom-pulse" />
                  <Star className="w-8 h-8 text-bandito-purple animate-float" style={{ animationDelay: '1s' }} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gradient">Our Incredible Support System</h4>
                <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                  Behind every successful community is an amazing team. These wonderful people have been my backbone, 
                  constantly supporting, innovating, and helping shape Los Banditos into what it is today.
                </p>
                <p className="text-base text-foreground/80 mb-6">
                  From brainstorming new events to organizing charity drives, from late-night planning sessions to 
                  celebrating our victories - they've been there every step of the way. Their dedication, creativity, 
                  and passion make our community thrive.
                </p>
                <div className="bg-gradient-bandito-soft rounded-2xl p-6 border border-bandito-purple/20">
                  <p className="text-lg font-semibold text-gradient-alt mb-2">
                    "Together we build dreams, create memories, and change lives."
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Thank you for being the heart of Los Banditos ❤️
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
