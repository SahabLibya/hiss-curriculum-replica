import { Button } from "@/components/ui/button";

const smoothScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ك</span>
            </div>
            <div>
              <h1 className="text-xl font-bold arabic-heading">كلية الإفتاء والعلوم الشرعية</h1>
              <p className="text-sm text-muted-foreground">دولة ليبيا</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => smoothScroll('hero')} className="arabic-text hover:text-[hsl(var(--primary))] transition-colors font-medium">
              الرئيسية
            </button>
            <button onClick={() => smoothScroll('stats')} className="arabic-text hover:text-[hsl(var(--primary))] transition-colors font-medium">
              عن الكلية
            </button>
            <button onClick={() => smoothScroll('curriculum')} className="arabic-text hover:text-[hsl(var(--primary))] transition-colors font-medium">
              المناهج الدراسية
            </button>
            <button onClick={() => smoothScroll('services')} className="arabic-text hover:text-[hsl(var(--primary))] transition-colors font-medium">
              الخدمات
            </button>
            <button onClick={() => smoothScroll('news')} className="arabic-text hover:text-[hsl(var(--primary))] transition-colors font-medium">
              الأخبار
            </button>
            <button onClick={() => smoothScroll('contact')} className="arabic-text hover:text-[hsl(var(--primary))] transition-colors font-medium">
              اتصل بنا
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-islamic-primary">
              التسجيل
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;