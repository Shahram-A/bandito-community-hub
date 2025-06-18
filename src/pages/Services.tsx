
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  PartyPopper, 
  Heart, 
  GraduationCap, 
  MessageCircle,
  Camera,
  Car,
  Gamepad2,
  Music,
  Plane,
  Users,
  BookOpen,
  Briefcase,
  DollarSign
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      category: "Fun & Adventure",
      icon: PartyPopper,
      color: "bandito-purple",
      services: [
        {
          name: "Group Tours & Travel",
          description: "Explore amazing destinations with fellow Banditos",
          price: "Varies by destination",
          icon: Plane,
          features: ["Professional planning", "Group discounts", "Memorable experiences"],
          image: "🏔️"
        },
        {
          name: "Late-night Long Drives",
          description: "Scenic drives and midnight adventures",
          price: "Free for members",
          icon: Car,
          features: ["Fuel sharing", "Safe routes", "Great company"],
          image: "🌙"
        },
        {
          name: "Party Services",
          description: "Birthday parties, celebrations, and events",
          price: "$50-200",
          icon: Music,
          features: ["Event planning", "Decoration", "Entertainment"],
          image: "🎉"
        },
        {
          name: "Movies & Games",
          description: "Latest movies and gaming sessions",
          price: "Free",
          icon: Gamepad2,
          features: ["Latest releases", "Gaming tournaments", "Movie nights"],
          image: "🎬",
          popular: ["Spider-Man: No Way Home", "God of War", "Among Us", "Avengers: Endgame", "FIFA 23"]
        }
      ]
    },
    {
      category: "Social Impact",
      icon: Heart,
      color: "bandito-red",
      services: [
        {
          name: "Charity Programs",
          description: "Help families and children in need",
          price: "Donation-based",
          icon: Heart,
          features: ["Food distribution", "Educational support", "Healthcare assistance"],
          image: "❤️"
        },
        {
          name: "Community Outreach",
          description: "Volunteer events and awareness campaigns",
          price: "Free participation",
          icon: Users,
          features: ["Volunteer opportunities", "Awareness drives", "Community building"],
          image: "🤝"
        },
        {
          name: "Fundraising Events",
          description: "Organize and participate in fundraisers",
          price: "Contribution-based",
          icon: DollarSign,
          features: ["Event organization", "Fund collection", "Transparent distribution"],
          image: "💰"
        }
      ]
    },
    {
      category: "Learning & Growth",
      icon: GraduationCap,
      color: "bandito-gold",
      services: [
        {
          name: "Study Sessions",
          description: "Group study and academic support",
          price: "Free",
          icon: BookOpen,
          features: ["Study groups", "Exam preparation", "Academic guidance"],
          image: "📚"
        },
        {
          name: "Life Consulting",
          description: "Personal advice and guidance",
          price: "Free for members",
          icon: MessageCircle,
          features: ["Career advice", "Personal decisions", "Life planning"],
          image: "💡"
        },
        {
          name: "Job Placement",
          description: "Career opportunities and networking",
          price: "Success fee only",
          icon: Briefcase,
          features: ["Job referrals", "Interview prep", "Networking events"],
          image: "💼"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gradient-bandito-soft min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16 animate-bounce-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-text-glow">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Discover all the amazing services and experiences Los Banditos has to offer
              </p>
            </div>

            {/* Services by Category */}
            {services.map((category, categoryIndex) => (
              <div key={category.category} className="mb-20 animate-slide-in-left" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-${category.color}/20 flex items-center justify-center mr-4 animate-float`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-gradient">{category.category}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card 
                      key={service.name} 
                      className="hover-lift card-3d retro-glow transition-all duration-300 animate-bounce-in"
                      style={{ animationDelay: `${(categoryIndex * 3 + serviceIndex) * 100}ms` }}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-${category.color}/10 flex items-center justify-center animate-zoom-pulse`}>
                            <service.icon className={`w-8 h-8 text-${category.color}`} />
                          </div>
                          <span className="text-4xl animate-float" style={{ animationDelay: `${serviceIndex}s` }}>
                            {service.image}
                          </span>
                        </div>
                        <CardTitle className="text-xl font-bold mb-2">{service.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {service.description}
                        </CardDescription>
                        <div className="flex items-center justify-between mt-4">
                          <Badge className={`bg-${category.color}/20 text-${category.color} hover:bg-${category.color}/30`}>
                            {service.price}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm">What's Included:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm">
                                <div className={`w-2 h-2 rounded-full bg-${category.color}/60 mr-3 animate-pulse`}></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          {/* Popular items for Movies & Games */}
                          {service.popular && (
                            <div className="mt-4 p-3 bg-background/50 rounded-xl border border-border">
                              <h5 className="font-semibold text-sm mb-2 text-bandito-purple">Popular Options:</h5>
                              <div className="flex flex-wrap gap-1">
                                {service.popular.map((item, itemIndex) => (
                                  <Badge key={itemIndex} variant="outline" className="text-xs">
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA Section */}
            <div className="text-center mt-20 animate-slide-in-right">
              <Card className="bg-gradient-bandito-soft border-2 border-bandito-purple/30 retro-glow hover-lift max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">
                    Join Los Banditos today and get access to all these amazing services and experiences!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/membership">
                      <Button 
                        size="lg" 
                        className="gradient-bandito text-white hover:opacity-90 retro-glow px-8 py-4 text-lg font-semibold hover-lift hover-rainbow"
                      >
                        Become a Member
                      </Button>
                    </Link>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-bandito-purple text-bandito-purple hover:bg-bandito-purple hover:text-white px-8 py-4 text-lg font-semibold hover-lift"
                    >
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
