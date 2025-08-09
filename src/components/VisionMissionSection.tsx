import { Telescope, Send, Target } from "lucide-react";

const VisionMissionSection = () => {
  const objectives = [
    "إعداد علماء متخصصين من علوم الشريعة، واعين بواقع أمتهم وفقًا لمنهج معتدل.",
    "تلبية الحاجة إلى باحثين ودعاة ومستشارين متخصصين.",
    "الإسهام في الرقابة والتدقيق على المؤسسات المالية، من الناحية الشرعية.",
    "مواكبة المناهج، والأساليب المتطورة، التي تمكن الطالب من التعامل مع القضايا، والنوازل.",
    "تبني ثقافة الجودة، ونشرها بين جميع الأطراف ذات العلاقة بالعملية التعليمية، والعمل بمبدأ التحسين المستمر.",
    "الاهتمام بالبحث العلمي، وخدمة المجتمع والبيئة."
  ];

  return (
    <section id="vision-mission" className="py-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <div className="islamic-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <Telescope className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold arabic-heading">الرؤية</h3>
            </div>
            <p className="arabic-text leading-relaxed text-muted-foreground text-lg">
              الارتقاء بمستوى جودة العملية التعليمية، وتلبية احتياجات دار الإفتاء والأوقاف.
            </p>
          </div>

          {/* Mission */}
          <div className="islamic-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold arabic-heading">الرسالة</h3>
            </div>
            <p className="arabic-text leading-relaxed text-muted-foreground text-lg">
              يقدم المعهد أفضل مخرجات تعليمية من باحثين وعلماء مخلصين وفق أسس ومناهج شرعية لتلبية حاجة المجتمع.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="islamic-card p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold arabic-heading">الأهداف</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white/50 rounded-lg">
                <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="arabic-text leading-relaxed text-muted-foreground">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;