import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-[hsl(var(--islamic-cream))] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            تواصل معنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لخدمتكم والإجابة على جميع استفساراتكم الأكاديمية والإدارية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Address Card */}
          <div className="islamic-card p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold arabic-heading mb-3">العنوان</h3>
            <p className="arabic-text text-muted-foreground leading-relaxed">
              تاجوراء - بجوار مدرسة الإمام مالك شمال غرب جسر الشاحنات
              <br />
              دولة ليبيا
            </p>
          </div>

          {/* Phone Card */}
          <div className="islamic-card p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold arabic-heading mb-3">أرقام الهاتف</h3>
            <div className="arabic-text text-muted-foreground space-y-1">
              <p>الشؤون العلمية: 00218914557837</p>
              <p>الشؤون الإدارية: 00218917204225</p>
              <p>0213337100 - 0217200666</p>
            </div>
          </div>

          {/* Email & Website Card */}
          <div className="islamic-card p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold arabic-heading mb-3">التواصل الإلكتروني</h3>
            <div className="arabic-text text-muted-foreground space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                info@fssi.edu.ly
              </p>
              <p className="flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" />
                www.fssi.edu.ly
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="islamic-card p-8">
            <h3 className="text-2xl font-bold arabic-heading mb-6 text-center">تواصل معنا مباشرة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block arabic-text font-medium mb-2 text-[hsl(var(--primary))]">الاسم الكامل</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] text-right bg-white/70"
                      placeholder="اكتب اسمك الكامل هنا"
                    />
                  </div>
                  <div>
                    <label className="block arabic-text font-medium mb-2 text-[hsl(var(--primary))]">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] text-right bg-white/70"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block arabic-text font-medium mb-2 text-[hsl(var(--primary))]">رقم الهاتف</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] text-right bg-white/70"
                      placeholder="رقم الهاتف"
                    />
                  </div>
                  <div>
                    <label className="block arabic-text font-medium mb-2 text-[hsl(var(--primary))]">الرسالة</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] text-right resize-none bg-white/70"
                      placeholder="اكتب رسالتك أو استفسارك هنا..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-islamic-primary py-4 font-medium rounded-lg transition-all hover:shadow-lg"
                  >
                    إرسال الرسالة
                  </button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div>
                <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--islamic-cream))] to-white rounded-lg flex items-center justify-center min-h-[400px] border border-border">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[hsl(var(--primary))] mx-auto mb-4" />
                    <h4 className="text-xl font-bold arabic-heading mb-2">موقعنا على الخريطة</h4>
                    <p className="text-muted-foreground">تاجوراء، ليبيا</p>
                    <p className="text-sm text-muted-foreground mt-2">بجوار مدرسة الإمام مالك</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;