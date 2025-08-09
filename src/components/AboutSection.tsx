import { Award, Users, BookOpen, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            عن الكلية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تعرف على تاريخ تأسيس الكلية ورحلتها في خدمة العلوم الشرعية والإفتاء
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Establishment Story */}
          <div className="islamic-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold arabic-heading">التأسيس</h3>
            </div>
            <p className="arabic-text leading-relaxed text-muted-foreground">
              انبثقت فكرة إنشاء المعهد من حاجة دار الإفتاء إلى علماء مؤصلين في الفقه المالكي متمتعين بعلوم الآلة المساندة لفهم تلك العلوم، وكذلك من حاجة المجتمع الليبي لسد الفراغ الديني الذي حدث إبان إغلاق المعاهد الدينية.
            </p>
          </div>

          {/* Establishment Steps */}
          <div className="islamic-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold arabic-heading">خطوات التأسيس</h3>
            </div>
            <p className="arabic-text leading-relaxed text-muted-foreground">
              تقدم إدارة الفتوى والبحوث بطلب لسماحة مفتي عام ليبيا لإنشاء هذا المعهد نظرًا لحاجة الدار لهذا الجسم لإعداد مفتين متخصصين، شكلت على إثر ذلك لجنة يرأسها الشيخ غيث بن محمود الفاخري نائب مفتي عام ليبيا للنظر في الأمر، خلصت لمراسلة المفتي مجلس الوزراء الذي أصدر قرارًا بإنشاء المعهد، وكان برقم (497) لسنة (2013م).
              <br /><br />
              ثم صدر قرار لاحقا من مجلس الوزراء بتغيير اسم المعهد إلى كلية العلوم الشرعية والإفتاء.
            </p>
          </div>
        </div>

        {/* Institutional Areas */}
        <div className="islamic-card p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold arabic-heading">مساحات المؤسسة</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">15,250</div>
              <div className="text-sm arabic-text font-medium">متر مربع - مساحة الموقع</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">1,115</div>
              <div className="text-sm arabic-text font-medium">متر مربع - المبنى الإداري</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">6,200</div>
              <div className="text-sm arabic-text font-medium">متر مربع - المبنى التعليمي</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">7,200</div>
              <div className="text-sm arabic-text font-medium">متر مربع - المبنى الخدمي</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;