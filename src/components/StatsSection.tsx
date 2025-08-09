import { BookOpen, Book, GraduationCap, Users, UserCheck, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      number: "5",
      label: "سنوات دراسية",
      icon: BookOpen
    },
    {
      number: "68+",
      label: "مقرر دراسي",
      icon: Book
    },
    {
      number: "154+",
      label: "عدد الطلاب",
      icon: GraduationCap
    },
    {
      number: "46+",
      label: "طالب متخرج",
      icon: Users
    },
    {
      number: "50+",
      label: "عضو هيئة تدريس",
      icon: UserCheck
    },
    {
      number: "4673+",
      label: "ساعة دراسية",
      icon: Clock
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
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stats-card">
                <div className="w-12 h-12 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm arabic-text font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;