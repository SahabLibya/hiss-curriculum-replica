const NewsSection = () => {
  const news = [
    {
      title: "بدء التسجيل للعام الدراسي الجديد 2024-2025",
      excerpt: "تعلن كلية العلوم الشرعية والإفتاء عن بدء قبول طلبات التسجيل للعام الدراسي الجديد في جميع التخصصات المتاحة",
      date: "15 شعبان 1445",
      image: "📢",
      category: "إعلانات"
    },
    {
      title: "ندوة علمية حول الفتوى في العصر الحديث",
      excerpt: "تنظم الكلية ندوة علمية متخصصة حول أصول الإفتاء والتحديات المعاصرة بمشاركة نخبة من علماء الأمة",
      date: "20 شعبان 1445",
      image: "🎓",
      category: "فعاليات"
    },
    {
      title: "إصدار جديد: موسوعة الفقه المقارن",
      excerpt: "صدر حديثاً عن الكلية الجزء الأول من موسوعة الفقه المقارن التي تضم دراسات معمقة في المذاهب الفقهية",
      date: "25 شعبان 1445",
      image: "📚",
      category: "إصدارات"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            الأخبار والإعلانات
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            آخر الأخبار والفعاليات والإصدارات من كلية العلوم الشرعية والإفتاء
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="islamic-card overflow-hidden group cursor-pointer">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{item.image}</span>
                  <span className="text-xs bg-[hsl(var(--islamic-cream))] text-[hsl(var(--primary))] px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold arabic-heading mb-3 group-hover:text-[hsl(var(--primary))] transition-colors">
                  {item.title}
                </h3>
                
                <p className="arabic-text text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                  <a 
                    href="#" 
                    className="text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] font-medium text-sm transition-colors"
                  >
                    قراءة المزيد ←
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#all-news" 
            className="inline-flex items-center gap-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] font-medium transition-colors"
          >
            عرض جميع الأخبار
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;