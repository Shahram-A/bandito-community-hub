
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Shield, Users, Calendar, Heart, Star, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Membership = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-bandito-soft min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16 animate-bounce-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-text-glow">
                Join Los Banditos
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Become part of our amazing community for just $10/year
              </p>
              <Badge className="bg-bandito-gold text-black px-4 py-2 text-lg font-semibold animate-pulse-rainbow">
                🎉 Limited Time Offer
              </Badge>
            </div>

            {/* Main Membership Card */}
            <div className="mb-12 animate-slide-in-left">
              <Card className="border-4 border-bandito-purple/30 bg-gradient-bandito-soft retro-glow hover-lift">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-bandito-purple/20 flex items-center justify-center animate-zoom-pulse">
                      <Star className="w-10 h-10 text-bandito-purple" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-gradient mb-2">Annual Membership</CardTitle>
                  <CardDescription className="text-lg">
                    Full access to all Los Banditos services and community
                  </CardDescription>
                  <div className="text-center mt-4">
                    <span className="text-6xl font-bold text-gradient">$10</span>
                    <span className="text-xl text-muted-foreground">/year</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  
                  {/* Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-bandito-purple flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Community Access
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          WhatsApp group access
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Social media channels
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Community voting rights
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-bandito-red flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        Events & Activities
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Group tours & adventures
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Party services
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Late-night drives
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-bandito-gold flex items-center">
                        <Heart className="w-5 h-5 mr-2" />
                        Social Impact
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Charity program participation
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Community service events
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Volunteer opportunities
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-green-600 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Free Services
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Free movies & games
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Life consulting
                        </li>
                        <li className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2" />
                          Study sessions
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Application Process */}
                  <div className="mb-8 p-6 bg-background/50 rounded-2xl border border-bandito-purple/20">
                    <div className="flex items-center mb-4">
                      <AlertCircle className="w-6 h-6 text-bandito-purple mr-2" />
                      <h3 className="font-bold text-lg">Application Process</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      We carefully review each application to ensure our community maintains its positive and supportive environment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-bandito-purple/10 rounded-xl">
                        <div className="w-8 h-8 bg-bandito-purple text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                        <h4 className="font-medium mb-1">Apply</h4>
                        <p className="text-xs text-muted-foreground">Submit your application with social handles</p>
                      </div>
                      <div className="text-center p-4 bg-bandito-red/10 rounded-xl">
                        <div className="w-8 h-8 bg-bandito-red text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                        <h4 className="font-medium mb-1">Review</h4>
                        <p className="text-xs text-muted-foreground">We check your background and social presence</p>
                      </div>
                      <div className="text-center p-4 bg-bandito-gold/10 rounded-xl">
                        <div className="w-8 h-8 bg-bandito-gold text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                        <h4 className="font-medium mb-1">Welcome</h4>
                        <p className="text-xs text-muted-foreground">Join our amazing community!</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className="gradient-bandito text-white hover:opacity-90 retro-glow px-12 py-6 text-xl font-bold hover-lift hover-rainbow"
                    >
                      Apply for Membership Now
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      * Subject to approval based on background check and community guidelines
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <div className="animate-slide-in-right">
              <h2 className="text-2xl font-bold text-center mb-8 text-gradient">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">What's included in membership?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Full access to all events, community groups, free services, and the ability to participate in all Los Banditos activities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">How does the application work?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We review your social media presence and background to ensure you align with our community values of positivity and respect.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">Can I get a refund?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer a 30-day satisfaction guarantee. If you're not happy with the community, we'll refund your membership fee.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">Are there any hidden costs?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      No hidden costs! Some premium services may have additional fees, but basic membership includes everything listed above.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Membership;
