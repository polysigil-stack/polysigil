import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-16">
        <HeroSection />
        <CompaniesSection />
        <FocusAreasSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
