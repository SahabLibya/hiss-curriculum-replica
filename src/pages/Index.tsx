import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import CurriculumSection from "@/components/CurriculumSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <CurriculumSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
