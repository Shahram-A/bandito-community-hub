
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CommunitySection from '@/components/CommunitySection';
import FounderSection from '@/components/FounderSection';
import Footer from '@/components/Footer';
import DragonCursor from '@/components/DragonCursor';

const Index = () => {
  return (
    <div className="min-h-screen">
      <DragonCursor />
      <Header />
      <Hero />
      <CommunitySection />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Index;
