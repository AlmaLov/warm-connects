
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ImageGrid from "@/components/ImageGrid";
import PrincipalMessage from "@/components/PrincipalMessage";
import NetworkSection from "@/components/NetworkSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <ImageGrid />
        <PrincipalMessage />
        <NetworkSection />
      </main>
    </div>
  );
};

export default Index;
