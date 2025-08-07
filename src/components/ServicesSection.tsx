const ServicesSection = () => {
  const services = [
    {
      title: "القبول والتسجيل",
      description: "خدمات القبول والتسجيل للطلاب الجدد والحاليين",
      icon: "📝",
      link: "#registration"
    },
    {
      title: "المكتبة الإلكترونية",
      description: "وصول مجاني للمراجع والكتب الإسلامية",
      icon: "📚",
      link: "#library"
    },
    {
      title: "البحوث العلمية",
      description: "دعم الطلاب في إعداد البحوث والرسائل",
      icon: "🔬",
      link: "#research"
    },
    {
      title: "الفتاوى والاستشارات",
      description: "تقديم الفتاوى والاستشارات الشرعية",
      icon: "⚖️",
      link: "#fatwa"
    },
    {
      title: "التدريب والتطوير",
      description: "برامج تدريبية لتطوير المهارات العلمية",
      icon: "🎯",
      link: "#training"
    },
    {
      title: "النشر والتوثيق",
      description: "نشر الأبحاث والكتب العلمية المحكمة",
      icon: "📖",
      link: "#publishing"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            خدماتنا الأكاديمية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التعليمية والأكاديمية لطلابنا وأعضاء هيئة التدريس
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="islamic-card p-6 group cursor-pointer">
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold arabic-heading mb-3">
                  {service.title}
                </h3>
                <p className="arabic-text leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] font-medium transition-colors"
                >
                  اعرف المزيد
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;