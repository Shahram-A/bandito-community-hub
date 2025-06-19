
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Users, Heart, Star, MessageCircle, Award } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-background via-background/95 to-purple-50/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground hover:text-gradient transition-all duration-300 cursor-default">
              A Note from the Founder
            </h2>
          </div>

          {/* Redesigned compact founder section */}
          <div className="mb-16">
            <Card className="border border-purple-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                  {/* Founder image - more compact */}
                  <div className="lg:col-span-1">
                    <div className="relative group">
                      <div className="relative">
                        <img 
                          src="/lovable-uploads/a4b780f9-3334-4971-93f1-c5927d32b0eb.png" 
                          alt="Shahram - Founder of Los Banditos" 
                          className="w-32 h-32 mx-auto rounded-2xl object-cover border-3 border-purple-200 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="font-bold text-lg text-foreground hover:text-gradient transition-all duration-300 cursor-default">Shahram</p>
                        <p className="text-sm text-muted-foreground">Founder & Chief Bandito</p>
                      </div>
                    </div>
                  </div>

                  {/* Founder message - takes more space */}
                  <div className="lg:col-span-3">
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
                      <p className="text-lg font-bold text-foreground hover:text-gradient transition-all duration-300 cursor-default">
                        Welcome to Los Banditos.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-lg text-foreground hover:text-gradient transition-all duration-300 cursor-default">Shahram</p>
                        <p className="text-muted-foreground italic">Just another Bandito like you</p>
                      </div>
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compact team section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground hover:text-gradient transition-all duration-300 cursor-default">Meet Our Amazing Team</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Team image */}
              <div className="order-2 lg:order-1">
                <Card className="bg-white/80 backdrop-blur-sm border border-purple-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-center items-center mb-4">
                      <Users className="w-8 h-8 text-purple-600 mr-3" />
                      <Heart className="w-8 h-8 text-red-500 mr-3" />
                      <Star className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-foreground hover:text-gradient transition-all duration-300 cursor-default">Our Incredible Support System</h4>
                    <p className="text-base text-foreground/80 mb-4 leading-relaxed">
                      Behind every successful community is an amazing team. These wonderful people have been my backbone, 
                      constantly supporting, innovating, and helping shape Los Banditos into what it is today.
                    </p>
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200">
                      <p className="text-base font-semibold text-purple-700 mb-2">
                        "Together we build dreams, create memories, and change lives."
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        Thank you for being the heart of Los Banditos ❤️
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Team image */}
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <img 
                    src="/lovable-uploads/acdff4a3-a747-4bc9-9896-b429234abf01.png" 
                    alt="Los Banditos Team" 
                    className="rounded-2xl shadow-xl w-full h-auto max-h-96 object-cover transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
