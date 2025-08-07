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
              <li><a href="#admission" className="opacity-80 hover:opacity-100 transition-opacity">القبول والتسجيل</a></li>
              <li><a href="#research" className="opacity-80 hover:opacity-100 transition-opacity">البحوث العلمية</a></li>
              <li><a href="#library" className="opacity-80 hover:opacity-100 transition-opacity">المكتبة</a></li>
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
                <Phone className="w-4 h-4 text-[hsl(var(--islamic-gold))]" />
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