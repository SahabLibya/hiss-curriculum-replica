import { Shield, Eye, Lightbulb, Users, Heart } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      title: "الالتزام بأحكام الشريعة الإسلامية",
      icon: Shield,
      description: "نلتزم بتطبيق أحكام الشريعة الإسلامية في جميع جوانب العملية التعليمية والإدارية"
    },
    {
      title: "النزاهة والشفافية", 
      icon: Eye,
      description: "نحرص على الوضوح والصدق في جميع معاملاتنا وقراراتنا الإدارية والأكاديمية"
    },
    {
      title: "الإتقان والإبداع",
      icon: Lightbulb,
      description: "نسعى لتحقيق التميز والإبداع في الأداء والبحث العلمي والتدريس"
    },
    {
      title: "العمل بروح الفريق",
      icon: Users,
      description: "نؤمن بأهمية التعاون والعمل الجماعي لتحقيق الأهداف المشتركة"
    },
    {
      title: "التفاعل الإيجابي مع المجتمع",
      icon: Heart,
      description: "نحرص على خدمة المجتمع والمساهمة في حل مشكلاته وتلبية احتياجاته"
    }
  ];

  return (
    <section id="values" className="py-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            قيم المؤسسة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            القيم الأساسية التي تحكم عملنا وتوجه رسالتنا التعليمية والأكاديمية
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="islamic-card p-8 group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex-1 min-w-[280px] max-w-[350px]">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold arabic-heading mb-4 text-[hsl(var(--primary))]">
                    {value.title}
                  </h3>
                  <p className="arabic-text text-muted-foreground leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;