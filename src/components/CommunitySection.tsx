
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PartyPopper, 
  Heart, 
  GraduationCap, 
  MessageCircle,
  Calendar,
  Music,
  Users,
  Coins
} from 'lucide-react';

const CommunitySection = () => {
  const features = [
    {
      icon: PartyPopper,
      title: "Fun & Adventure",
      description: "Group tours, late-night drives, exclusive parties, movies, games, and adventure missions",
      color: "text-bandito-purple",
      bgColor: "bg-bandito-purple/10",
      items: ["Group Tours & Travel", "Late-night Long Drives", "Party Services", "Movies & Games", "Adventure Missions & Sports"]
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Charity programs, fundraisers, and community outreach for families and kids in need",
      color: "text-bandito-red",
      bgColor: "bg-bandito-red/10",
      items: ["Charity Programs", "Fundraisers & Donation Drives", "Community Outreach", "Volunteer Events", "Awareness Campaigns"]
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Study sessions, consulting, job placement, and personal development programs",
      color: "text-bandito-gold",
      bgColor: "bg-bandito-gold/10",
      items: ["Study Sessions & Consulting", "Job Placement Programs", "Skill Development", "Personal Growth", "Motivational Talks"]
    },
    {
      icon: MessageCircle,
      title: "Community Voice",
      description: "Suggest events, vote on activities, and participate in planning new initiatives",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      items: ["Suggest Events & Ideas", "Vote on Future Activities", "Participate in Planning", "Lead New Initiatives", "Community Feedback"]
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-bandito-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Los Banditos is more than a community - it's a complete ecosystem for personal growth, 
            social impact, and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`hover:shadow-xl transition-all duration-300 border-2 hover:retro-glow group animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full ${feature.bgColor} mr-3`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Membership Info */}
        <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-border retro-glow">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Coins className="w-12 h-12 text-bandito-gold mr-4" />
              <h3 className="text-3xl font-bold">How Membership Works</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              To be part of Los Banditos, members contribute a small joining fee. In return, you get access to 
              all our services, events, and the support of our amazing community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <Users className="w-8 h-8 text-bandito-purple mx-auto mb-2" />
                <p className="font-medium">Community Access</p>
                <p className="text-sm text-muted-foreground">Join our WhatsApp groups and social channels</p>
              </div>
              <div className="text-center p-4">
                <Calendar className="w-8 h-8 text-bandito-red mx-auto mb-2" />
                <p className="font-medium">Event Participation</p>
                <p className="text-sm text-muted-foreground">Attend tours, parties, and community activities</p>
              </div>
              <div className="text-center p-4">
                <Heart className="w-8 h-8 text-bandito-gold mx-auto mb-2" />
                <p className="font-medium">Impact Programs</p>
                <p className="text-sm text-muted-foreground">Participate in charity and social service</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="gradient-bandito text-white hover:opacity-90 retro-glow px-8 py-4 text-lg font-semibold"
            >
              Learn About Membership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
