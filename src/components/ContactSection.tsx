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
              <p className="flex items-center justify-center gap-2">
              {/* WhatsApp Icon */}
           
              الشؤون العلمية: 00218914557837
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.696.626.713.227 1.362.195 1.874.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.45-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 0 5.373 0 11.988c0 2.114.553 4.174 1.601 5.981L.057 24l6.164-1.627a11.934 11.934 0 005.769 1.472h.005c6.615 0 11.988-5.373 11.988-11.988a11.86 11.86 0 00-3.494-8.683z"/>
              </svg>
              </p>
              <p className="flex items-center justify-center gap-2">
            
              الشؤون الإدارية: 00218917204225
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.696.626.713.227 1.362.195 1.874.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.45-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 0 5.373 0 11.988c0 2.114.553 4.174 1.601 5.981L.057 24l6.164-1.627a11.934 11.934 0 005.769 1.472h.005c6.615 0 11.988-5.373 11.988-11.988a11.86 11.86 0 00-3.494-8.683z"/>
              </svg>
              </p>
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
                fssi.edu.ly
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-8xl mx-auto">
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
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d926.7570498082993!2d13.362483364173974!3d32.8752546079904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a89b3ec82ada9b%3A0x33fe4e0d86464b22!2z2YPZhNmK2Kkg2KfZhNi52YTZiNmFINin2YTYtNix2LnZitipINmI2KfZhNil2YHYqtin2KE!5e1!3m2!1sen!2sly!4v1754745325697!5m2!1sen!2sly"

  width="100%"
  height="100%"
  style={{ border: 0, minHeight: '400px', borderRadius: '0.5rem' }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;