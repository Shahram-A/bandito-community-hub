
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PartyPopper, Heart, Compass, GraduationCap, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-gradient-bandito-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-text-glow">
            What We Offer 🤠
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From wild adventures to meaningful change - we've got something for every Bandito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Fun & Adventure */}
          <Card className="hover-lift hover-glow retro-glow animate-slide-in-left group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bandito-purple/20 flex items-center justify-center group-hover:animate-zoom-pulse">
                <PartyPopper className="w-8 h-8 text-bandito-purple animate-float" />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient">🎉 Fun & Adventure</CardTitle>
              <CardDescription>Life's too short for boring weekends</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>🚗 Group tours & travel experiences</li>
                <li>🌙 Late-night long drives</li>
                <li>🎊 Party services & exclusive gatherings</li>
                <li>🎬 Movies & Games</li>
                <li>⚡ Adventure missions & sports events</li>
              </ul>
              <Link to="/services">
                <Button className="gradient-bandito text-white hover:opacity-90 retro-glow hover-lift w-full">
                  Explore Adventures
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Social Impact */}
          <Card className="hover-lift hover-glow retro-glow-red animate-slide-in-left group" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bandito-red/20 flex items-center justify-center group-hover:animate-zoom-pulse">
                <Heart className="w-8 h-8 text-bandito-red animate-float" style={{ animationDelay: '1s' }} />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient">❤️ Social Impact</CardTitle>
              <CardDescription>Together we make the world better</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>🏠 Charity programs for families & kids</li>
                <li>💰 Fundraisers & donation drives</li>
                <li>🤝 Community outreach programs</li>
                <li>🌟 Volunteer & awareness events</li>
                <li>🎯 Social impact initiatives</li>
              </ul>
              <Link to="/services">
                <Button className="gradient-bandito text-white hover:opacity-90 retro-glow hover-lift w-full">
                  Make a Difference
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Learning & Growth */}
          <Card className="hover-lift hover-glow retro-glow-gold animate-slide-in-left group" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bandito-gold/20 flex items-center justify-center group-hover:animate-zoom-pulse">
                <GraduationCap className="w-8 h-8 text-bandito-gold animate-float" style={{ animationDelay: '2s' }} />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient">📚 Learning & Growth</CardTitle>
              <CardDescription>Grow personally and professionally</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>📖 Study sessions & consulting</li>
                <li>💼 Job placement & skill development</li>
                <li>🎯 Motivational talks & coaching</li>
                <li>💻 Tech advice & recommendations</li>
                <li>🚀 Personal growth programs</li>
              </ul>
              <Link to="/services">
                <Button className="gradient-bandito text-white hover:opacity-90 retro-glow hover-lift w-full">
                  Start Growing
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Community Voice */}
          <Card className="hover-lift hover-glow animate-slide-in-right group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center group-hover:animate-zoom-pulse">
                <Users className="w-8 h-8 text-green-500 animate-float" style={{ animationDelay: '3s' }} />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient">🗣️ Community Voice</CardTitle>
              <CardDescription>Your ideas shape our future</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>💡 Suggest events or social ideas</li>
                <li>🗳️ Vote on future activities</li>
                <li>📋 Participate in planning sessions</li>
                <li>👥 Lead new initiatives</li>
                <li>🎤 Community feedback & discussions</li>
              </ul>
              <Link to="/services">
                <Button className="gradient-bandito text-white hover:opacity-90 retro-glow hover-lift w-full">
                  Join Discussions
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Free Services */}
          <Card className="hover-lift hover-glow animate-slide-in-right group" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:animate-zoom-pulse">
                <Compass className="w-8 h-8 text-cyan-500 animate-float" style={{ animationDelay: '4s' }} />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient">🆓 Free Services</CardTitle>
              <CardDescription>Because family takes care of family</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>🎬 Free movies & entertainment</li>
                <li>🎮 Gaming sessions & tournaments</li>
                <li>💬 Life consulting & advice</li>
                <li>🤝 Personal guidance & support</li>
                <li>📱 Tech recommendations</li>
              </ul>
              <Link to="/services">
                <Button className="gradient-bandito text-white hover:opacity-90 retro-glow hover-lift w-full">
                  Get Free Help
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Suggestions & Ideas */}
          <Card className="hover-lift hover-glow animate-slide-in-right group" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:animate-zoom-pulse">
                <Lightbulb className="w-8 h-8 text-pink-500 animate-float" style={{ animationDelay: '5s' }} />
              </div>
              <CardTitle className="text-2xl font-bold text-gradient">💡 Your Ideas Matter</CardTitle>
              <CardDescription>Shape the future of Los Banditos</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>🎯 Suggest new activities</li>
                <li>🗳️ Vote on community decisions</li>
                <li>💰 Propose fundraising ideas</li>
                <li>🎉 Plan special events together</li>
                <li>🚀 Lead innovation initiatives</li>
              </ul>
              <Link to="/services">
                <Button className="gradient-bandito text-white hover:opacity-90 retro-glow hover-lift w-full">
                  Share Your Ideas
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-bounce-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Join the Adventure? 🤠</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of something bigger than yourself. Connect, grow, and make a difference with Los Banditos.
          </p>
          <Link to="/membership">
            <Button 
              size="lg" 
              className="gradient-bandito text-white hover:opacity-90 retro-glow px-12 py-6 text-xl font-bold hover-lift hover-rainbow"
            >
              Join Los Banditos Now 🏴‍☠️
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
