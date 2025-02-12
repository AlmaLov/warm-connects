
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import KidsImageSection from "@/components/KidsImageSection";
import PrincipalMessage from "@/components/PrincipalMessage";
import NetworkSection from "@/components/NetworkSection";
import MapSection from "@/components/MapSection";
import EventsAndAnnouncements from "@/components/EventsAndAnnouncements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <KidsImageSection />
        <PrincipalMessage />
        <NetworkSection />
        <MapSection />
        <EventsAndAnnouncements />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
