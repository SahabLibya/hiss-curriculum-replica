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
        <section id="hero">
          <HeroSection />
        </section>
        <section id="stats">
          <StatsSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="curriculum">
          <CurriculumSection />
        </section>
        <section id="news">
          <NewsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
