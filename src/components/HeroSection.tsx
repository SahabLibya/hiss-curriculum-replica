import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";
const smoothScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="أعضاء هيئة التدريس بكلية العلوم الشرعية و الإفتاء"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            كلية العلوم الشرعية و الإفتاء
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/95">
            دولة ليبيا - دار الإفتاء الليبية
          </p>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[hsl(var(--islamic-gold))]">
              التعليم الشرعي الأكاديمي المتميز
            </h2>
            <p className="text-lg leading-relaxed text-white/90 max-w-2xl">
              برنامج أكاديمي متكامل لإعداد علماء مؤهلين في العلوم الشرعية والإفتاء على مدار خمس سنوات، 
              يهدف إلى تخريج علماء متمكنين قادرين على خدمة الدين والأمة.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-islamic-primary text-lg px-8"
              onClick={() => window.open('https://forms.gle/Qpe82SMSVr3gjgDc9', '_blank')}
            >
              ابدأ رحلتك العلمية
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white/30 text-black hover:bg-white/20 hover:border-white/50 transition-all duration-300"
             onClick={() => smoothScroll('curriculum')}
            >
              استعرض المناهج
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[hsl(var(--islamic-cream))] to-transparent"></div>
    </section>
  );
};

export default HeroSection;