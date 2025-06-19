
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CommunitySection from '@/components/CommunitySection';
import FounderSection from '@/components/FounderSection';
import Footer from '@/components/Footer';
import TorchCursor from '@/components/TorchCursor';

const Index = () => {
  return (
    <div className="min-h-screen">
      <TorchCursor />
      <Header />
      <Hero />
      <CommunitySection />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Index;
