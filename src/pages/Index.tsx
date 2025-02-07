
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import PrincipalMessage from "@/components/PrincipalMessage";
import NetworkSection from "@/components/NetworkSection";
import MapSection from "@/components/MapSection";
import EventsAndAnnouncements from "@/components/EventsAndAnnouncements";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <PrincipalMessage />
        <NetworkSection />
        <MapSection />
        <EventsAndAnnouncements />
      </main>
    </div>
  );
};

export default Index;
