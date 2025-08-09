import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[hsl(var(--islamic-cream))] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            تواصل معنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لخدمتكم والإجابة على جميع استفساراتكم الأكاديمية والإدارية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="islamic-card p-6">
              <h3 className="text-xl font-bold arabic-heading mb-6">معلومات الاتصال</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium arabic-heading mb-1">العنوان</h4>
                    <p className="arabic-text text-muted-foreground">
                      تاجوراء - بجوار مدرسة الإمام مالك شمال غرب جسر الشاحنات
                      <br />
                      دولة ليبيا
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium arabic-heading mb-1">أرقام الهاتف</h4>
                    <p className="arabic-text text-muted-foreground">
                      الشؤون العلمية: 00218914557837<br />
                      الشؤون الإدارية: 00218917204225<br />
                      0213337100 - 0217200666
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium arabic-heading mb-1">البريد الإلكتروني</h4>
                    <p className="arabic-text text-muted-foreground">
                      info@fssi.edu.ly
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center text-white">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium arabic-heading mb-1">الموقع الإلكتروني</h4>
                    <p className="arabic-text text-muted-foreground">
                      www.fssi.edu.ly
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Map and Quick Contact */}
          <div className="space-y-8">
            {/* Interactive Map Placeholder */}
            <div className="islamic-card p-6">
              <h3 className="text-xl font-bold arabic-heading mb-4">موقعنا على الخريطة</h3>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <p className="text-muted-foreground">خريطة تفاعلية</p>
                  <p className="text-sm text-muted-foreground mt-1">تاجوراء، ليبيا</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="islamic-card p-6">
              <h3 className="text-xl font-bold arabic-heading mb-4">رسالة سريعة</h3>
              <form className="space-y-4">
                <div>
                  <label className="block arabic-text font-medium mb-2">الاسم</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] text-right"
                    placeholder="اكتب اسمك هنا"
                  />
                </div>
                <div>
                  <label className="block arabic-text font-medium mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] text-right"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block arabic-text font-medium mb-2">الرسالة</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] text-right resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-islamic-primary py-3 font-medium rounded-lg transition-all"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;