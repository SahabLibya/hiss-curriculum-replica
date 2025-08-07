import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-scholar.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="عالم إسلامي متميز"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            مسارك العلمي في العلوم الشرعية
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            مع فضيلة الشيخ د. محمد أبو مدينة
          </p>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[hsl(var(--islamic-gold))]">
              برنامج الإسلام والحياة
            </h2>
            <p className="text-lg leading-relaxed opacity-90 max-w-2xl">
              هذا تفصيل عن خارطة طريق لكل من يرغب في الانضمام إليها وخوض رحلة علمية متكاملة على مدار خمس سنوات، 
              وصولاً إلى درجة التأهيل في العلوم الشرعية والإفتاء.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-islamic-primary text-lg px-8">
              ابدأ رحلتك العلمية
            </Button>
            <Button size="lg" variant="outline" className="btn-islamic-secondary text-lg px-8 border-white/30 text-white hover:bg-white/20">
              استعرض المناهج
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[hsl(var(--islamic-cream))] to-transparent"></div>
    </section>
  );
};

export default HeroSection;