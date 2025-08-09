import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ServicesSection from "@/components/ServicesSection";
import CurriculumSection from "@/components/CurriculumSection";
import InstitutionalAreasSection from "@/components/InstitutionalAreasSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="stats">
          <StatsSection />
        </section>
        <AboutSection />
        <ValuesSection />
        <VisionMissionSection />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="curriculum">
          <CurriculumSection />
        </section>
        <InstitutionalAreasSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
