
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PartyPopper, Heart, Compass, GraduationCap, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-background to-bandito-purple/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black hover:text-bandito-purple hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] transition-all duration-300 cursor-default">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From wild adventures to meaningful change - we've got something for every Bandito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Fun & Adventure */}
          <Card className="hover-lift hover-glow group border-bandito-purple/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bandito-purple/20 flex items-center justify-center">
                <PartyPopper className="w-8 h-8 text-bandito-purple" />
              </div>
              <CardTitle className="text-2xl font-bold text-black hover:text-bandito-purple hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300 cursor-default">Fun & Adventure</CardTitle>
              <CardDescription>Life's too short for boring weekends</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>Group tours & travel experiences</li>
                <li>Late-night long drives</li>
                <li>Party services & exclusive gatherings</li>
                <li>Movies & Games</li>
                <li>Adventure missions & sports events</li>
              </ul>
              <Link to="/services">
                <Button className="bg-black text-white hover:bg-bandito-purple hover:text-white hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] hover-lift w-full transition-all duration-300">
                  Explore Adventures
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Social Impact */}
          <Card className="hover-lift hover-glow group border-bandito-red/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bandito-red/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-bandito-red" />
              </div>
              <CardTitle className="text-2xl font-bold text-black hover:text-bandito-purple hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300 cursor-default">Social Impact</CardTitle>
              <CardDescription>Together we make the world better</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>Charity programs for families & kids</li>
                <li>Fundraisers & donation drives</li>
                <li>Community outreach programs</li>
                <li>Volunteer & awareness events</li>
                <li>Social impact initiatives</li>
              </ul>
              <Link to="/services">
                <Button className="bg-black text-white hover:bg-bandito-purple hover:text-white hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] hover-lift w-full transition-all duration-300">
                  Make a Difference
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Learning & Growth */}
          <Card className="hover-lift hover-glow group border-bandito-gold/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bandito-gold/20 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-bandito-gold" />
              </div>
              <CardTitle className="text-2xl font-bold text-black hover:text-bandito-purple hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300 cursor-default">Learning & Growth</CardTitle>
              <CardDescription>Grow personally and professionally</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>Study sessions & consulting</li>
                <li>Job placement & skill development</li>
                <li>Motivational talks & coaching</li>
                <li>Tech advice & recommendations</li>
                <li>Personal growth programs</li>
              </ul>
              <Link to="/services">
                <Button className="bg-black text-white hover:bg-bandito-purple hover:text-white hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] hover-lift w-full transition-all duration-300">
                  Start Growing
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Community Voice */}
          <Card className="hover-lift hover-glow group border-green-500/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-black hover:text-bandito-purple hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300 cursor-default">Community Voice</CardTitle>
              <CardDescription>Your ideas shape our future</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>Suggest events or social ideas</li>
                <li>Vote on future activities</li>
                <li>Participate in planning sessions</li>
                <li>Lead new initiatives</li>
                <li>Community feedback & discussions</li>
              </ul>
              <Link to="/services">
                <Button className="bg-black text-white hover:bg-bandito-purple hover:text-white hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] hover-lift w-full transition-all duration-300">
                  Join Discussions
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Free Services */}
          <Card className="hover-lift hover-glow group border-cyan-500/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Compass className="w-8 h-8 text-cyan-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-black hover:text-bandito-purple hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300 cursor-default">Free Services</CardTitle>
              <CardDescription>Because family takes care of family</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>Free movies & entertainment</li>
                <li>Gaming sessions & tournaments</li>
                <li>Life consulting & advice</li>
                <li>Personal guidance & support</li>
                <li>Tech recommendations</li>
              </ul>
              <Link to="/services">
                <Button className="bg-black text-white hover:bg-bandito-purple hover:text-white hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] hover-lift w-full transition-all duration-300">
                  Get Free Help
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Suggestions & Ideas */}
          <Card className="hover-lift hover-glow group border-pink-500/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-pink-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-black hover:text-bandito-purple hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300 cursor-default">Your Ideas Matter</CardTitle>
              <CardDescription>Shape the future of Los Banditos</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>Suggest new activities</li>
                <li>Vote on community decisions</li>
                <li>Propose fundraising ideas</li>
                <li>Plan special events together</li>
                <li>Lead innovation initiatives</li>
              </ul>
              <Link to="/services">
                <Button className="bg-black text-white hover:bg-bandito-purple hover:text-white hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] hover-lift w-full transition-all duration-300">
                  Share Your Ideas
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Clean Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-black hover:text-bandito-purple hover:drop-shadow-[0_0_10px_rgba(124,58,237,0.8)] transition-all duration-300 cursor-default">Ready to Join the Adventure?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of something bigger than yourself. Connect, grow, and make a difference with Los Banditos.
          </p>
          <Link to="/membership">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-bandito-purple hover:text-white hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)] px-12 py-6 text-xl font-bold hover-lift transition-all duration-300"
            >
              Join Los Banditos Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
