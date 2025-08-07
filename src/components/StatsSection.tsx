const StatsSection = () => {
  const stats = [
    {
      number: "5",
      label: "سنوات دراسية",
      icon: "📚"
    },
    {
      number: "75+",
      label: "مقرر دراسي",
      icon: "📖"
    },
    {
      number: "15+",
      label: "مجال علمي",
      icon: "🎓"
    },
    {
      number: "500+",
      label: "طالب متخرج",
      icon: "👥"
    },
    {
      number: "25+",
      label: "عضو هيئة تدريس",
      icon: "👨‍🏫"
    },
    {
      number: "1000+",
      label: "ساعة دراسية",
      icon: "⏰"
    }
  ];

  return (
    <section className="py-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            إحصائيات الكلية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نفتخر بما حققناه من إنجازات في مجال التعليم الشرعي والأكاديمي
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="stats-card">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">
                {stat.number}
              </div>
              <div className="text-sm arabic-text font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;