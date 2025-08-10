import { useState } from "react";
import { Button } from "@/components/ui/button";
import logotext from "@/assets/logo-text.png";

const smoothScroll = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <img src={logotext} alt="Logo" className="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "hero", label: "الرئيسية" },
              { id: "about", label: "عن الكلية" },
              { id: "values", label: "القيم" },
              { id: "vision-mission", label: "الرؤية والرسالة" },
              { id: "curriculum", label: "المناهج" },
              { id: "services", label: "الخدمات" },
              { id: "contact", label: "اتصل بنا" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => smoothScroll(id)}
                className="arabic-text hover:text-[hsl(var(--primary))] transition-colors font-medium"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="btn-islamic-primary"
              onClick={() =>
                window.open("https://forms.gle/Qpe82SMSVr3gjgDc9", "_blank")
              }
            >
              التسجيل
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://emis.hiss.edu.ly/login", "_blank")
              }
            >
              بوابة الطلبة
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-border px-4 py-4 space-y-3">
          {[
            { id: "hero", label: "الرئيسية" },
            { id: "about", label: "عن الكلية" },
            { id: "values", label: "القيم" },
            { id: "vision-mission", label: "الرؤية والرسالة" },
            { id: "curriculum", label: "المناهج" },
            { id: "services", label: "الخدمات" },
            { id: "contact", label: "اتصل بنا" },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                smoothScroll(id);
                setMobileMenuOpen(false);
              }}
              className="arabic-text w-full text-right hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              {label}
            </button>
          ))}

          <div className="flex flex-col space-y-2 mt-2">
            <Button
              className="btn-islamic-primary"
              onClick={() => window.open("https://forms.gle/Qpe82SMSVr3gjgDc9", "_blank")}
            >
              التسجيل
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("https://emis.hiss.edu.ly/login", "_blank")}
            >
              بوابة الطلبة
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
