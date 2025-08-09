import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[hsl(var(--islamic-gold))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ك</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">كلية الإفتاء والعلوم الشرعية</h3>
                <p className="text-sm opacity-80">دولة ليبيا</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              مؤسسة أكاديمية متخصصة في تدريس العلوم الشرعية والإفتاء، تهدف إلى إعداد علماء مؤهلين في خدمة الدين والأمة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">عن الكلية</a></li>
              <li><a href="#curriculum" className="opacity-80 hover:opacity-100 transition-opacity">المناهج الدراسية</a></li>
              <li><a href="https://forms.gle/Qpe82SMSVr3gjgDc9" className="opacity-80 hover:opacity-100 transition-opacity">القبول والتسجيل</a></li>
              <li><a href="https://search.shabcenter.ly/" target="__blank" className="opacity-80 hover:opacity-100 transition-opacity">البحوث العلمية</a></li>
              <li><a href="https://www.shabcenter.ly/" className="opacity-80 hover:opacity-100 transition-opacity">المكتبة</a></li>
            </ul>
          </div>

          {/* Academic Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">الخدمات الأكاديمية</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#fatwa" className="opacity-80 hover:opacity-100 transition-opacity">دار الإفتاء</a></li>
              <li><a href="#consultation" className="opacity-80 hover:opacity-100 transition-opacity">الاستشارات الشرعية</a></li>
              <li><a href="#training" className="opacity-80 hover:opacity-100 transition-opacity">التدريب والتطوير</a></li>
              <li><a href="#publishing" className="opacity-80 hover:opacity-100 transition-opacity">النشر العلمي</a></li>
              <li><a href="#conferences" className="opacity-80 hover:opacity-100 transition-opacity">المؤتمرات والندوات</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[hsl(var(--islamic-gold))]" />
                <span className="text-white/80">تاجوراء - بجوار مدرسة الإمام مالك شمال غرب جسر الشاحنات</span>
              </div>
              <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[hsl(var(--islamic-gold))]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.696.626.713.227 1.362.195 1.874.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.45-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 0 5.373 0 11.988c0 2.114.553 4.174 1.601 5.981L.057 24l6.164-1.627a11.934 11.934 0 005.769 1.472h.005c6.615 0 11.988-5.373 11.988-11.988a11.86 11.86 0 00-3.494-8.683z"/>
              </svg>
                <span className="text-white/80">0213337100 - 0217200666</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[hsl(var(--islamic-gold))]" />
                <span className="text-white/80">info@fssi.edu.ly</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[hsl(var(--islamic-gold))]" />
                <span className="text-white/80">www.fssi.edu.ly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © 2024 كلية الإفتاء والعلوم الشرعية - جميع الحقوق محفوظة
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="#privacy" className="opacity-80 hover:opacity-100 transition-opacity">سياسة الخصوصية</a>
              <a href="#terms" className="opacity-80 hover:opacity-100 transition-opacity">الشروط والأحكام</a>
              <a href="#sitemap" className="opacity-80 hover:opacity-100 transition-opacity">خريطة الموقع</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;