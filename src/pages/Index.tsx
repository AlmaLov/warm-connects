
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import PrincipalMessage from "@/components/PrincipalMessage";
import NetworkSection from "@/components/NetworkSection";
import ImageGrid from "@/components/ImageGrid";

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
