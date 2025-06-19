
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Users, Heart, Star } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-background via-background/95 to-purple-50/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              A Note from the Founder
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Improved Founder Image */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <div className="relative group">
                  <img 
                    src="/lovable-uploads/a4b780f9-3334-4971-93f1-c5927d32b0eb.png" 
                    alt="Shahram - Founder of Los Banditos" 
                    className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-purple-200 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-6 bg-white/90 backdrop-blur-sm border border-purple-200 rounded-xl px-6 py-3 shadow-md">
                  <p className="font-bold text-lg text-gradient">Shahram</p>
                  <p className="text-sm text-muted-foreground">Founder & Chief Bandito</p>
                </div>
              </div>
            </div>

            {/* Founder Message */}
            <div>
              <Card className="border border-purple-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-purple-600 mb-4" />
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
                    <p className="font-semibold text-purple-700">
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

          {/* Team Section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Meet Our Amazing Team</h3>
            
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/acdff4a3-a747-4bc9-9896-b429234abf01.png" 
                  alt="Los Banditos Team" 
                  className="rounded-2xl shadow-xl max-w-full h-auto max-h-80 object-cover transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Team appreciation section */}
            <Card className="bg-white/80 backdrop-blur-sm border border-purple-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center items-center mb-4">
                  <Users className="w-8 h-8 text-purple-600 mr-3" />
                  <Heart className="w-8 h-8 text-red-500 mr-3" />
                  <Star className="w-8 h-8 text-yellow-500" />
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
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
                  <p className="text-lg font-semibold text-purple-700 mb-2">
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
