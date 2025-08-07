import { useState } from "react";
import { Button } from "@/components/ui/button";

const CurriculumSection = () => {
  const [selectedYear, setSelectedYear] = useState(1);

  const curriculumData = {
    1: {
      title: "السنة الأولى - الأساسيات الشرعية",
      courses: [
        { name: "القرآن الكريم (1)", book: "ربع يس", author: "" },
        { name: "علوم القرآن", book: "الإتقان في علوم القرآن", author: "الإمام السيوطي" },
        { name: "أحاديث الأحكام (1)", book: "سبل السلام شرح بلوغ المرام", author: "الصنعاني" },
        { name: "مصطلح الحديث (1)", book: "فتح المغيث شرح ألفية الحديث", author: "السيوطي" },
        { name: "العقيدة (1)", book: "مختصر لوامع الأنوار البهية", author: "حسن بن عمر الدمشقي" },
        { name: "السيرة النبوية (1)", book: "الرحيق المختوم", author: "مبارك خوري" },
        { name: "فقه العبادات (1)", book: "الشرح الكبير على مختصر خليل", author: "أحمد الدردير" },
        { name: "فقه العبادات (2)", book: "الشرح الكبير على مختصر خليل", author: "أحمد الدردير" }
      ]
    },
    2: {
      title: "السنة الثانية - التعمق في النصوص",
      courses: [
        { name: "القرآن الكريم (2)", book: "ربع الكهف", author: "" },
        { name: "تفسير القرآن (1)", book: "أنوار التنزيل وأسرار التأويل", author: "عبدالله الشيرازي البيضاوي" },
        { name: "أحاديث الأحكام (2)", book: "سبل السلام شرح بلوغ المرام", author: "الصنعاني" },
        { name: "مصطلح الحديث (2)", book: "فتح المغيث شرح ألفية الحديث", author: "السيوطي" },
        { name: "العقيدة (2)", book: "مختصر لوامع الأنوار البهية", author: "حسن بن عمر الدمشقي" },
        { name: "فقه الأيمان والنذور", book: "الشرح الكبير على مختصر خليل", author: "أحمد الدردير" }
      ]
    },
    3: {
      title: "السنة الثالثة - الفقه والأصول",
      courses: [
        { name: "القرآن الكريم (3)", book: "ربع الأعراف", author: "" },
        { name: "تفسير القرآن (2)", book: "أنوار التنزيل وأسرار التأويل", author: "عبدالله الشيرازي البيضاوي" },
        { name: "فقه الأسرة (1)", book: "الشرح الكبير على مختصر خليل", author: "أحمد الدردير" },
        { name: "فقه المعاملات (1)", book: "الشرح الكبير على مختصر خليل", author: "أحمد الدردير" },
        { name: "الفرائض", book: "شرح الرحبية", author: "الماردين" },
        { name: "أصول الفقه (3)", book: "نشر البنود على مراقي السعود", author: "عبدالله بن الحاج العلوي" }
      ]
    },
    4: {
      title: "السنة الرابعة - التخصص والمقارنة",
      courses: [
        { name: "القرآن الكريم (4)", book: "ربع البقرة", author: "" },
        { name: "تفسير آيات الأحكام (1)", book: "أحكام القرآن الصغرى", author: "ابن العربي" },
        { name: "فقه المعاملات (2-4)", book: "الشرح الكبير على مختصر خليل", author: "أحمد الدردير" },
        { name: "الفقه المقارن (أ)", book: "مقارنة المذاهب في الفقه", author: "محمود شلتوت" },
        { name: "القواعد الفقهية (2)", book: "إيضاح المسالك", author: "الونشريسي" },
        { name: "مناهج البحث", book: "ورقات في البحث والكتابة", author: "د.عبدالحميد عبدالله الهرامة" }
      ]
    },
    5: {
      title: "السنة الخامسة - الإفتاء والتطبيق",
      courses: [
        { name: "تفسير آيات الأحكام (2)", book: "أحكام القرآن الصغرى", author: "ابن العربي" },
        { name: "أحاديث الأحكام (5)", book: "سبل السلام شرح بلوغ المرام", author: "الصنعاني" },
        { name: "فقه الأقضية والوصايا", book: "الشرح الكبير على مختصر خليل", author: "أحمد الدردير" },
        { name: "فقه الحدود والجنايات", book: "الشرح الكبير على مختصر خليل", author: "أحمد الدردير" },
        { name: "قضايا فقهية معاصرة", book: "قضايا فقهية معاصرة", author: "الصادق بن عبدالرحمن الغرياني" },
        { name: "التربية وأصول الإفتاء", book: "أصول الإفتاء وآدابه", author: "محمد تقي الدين العثماني" }
      ]
    }
  };

  return (
    <section className="py-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            المناهج الدراسية
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            برنامج أكاديمي متكامل على مدار خمس سنوات للحصول على درجة التأهيل في العلوم الشرعية والإفتاء
          </p>
        </div>

        {/* Year Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3, 4, 5].map((year) => (
            <Button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedYear === year
                  ? 'btn-islamic-primary'
                  : 'btn-islamic-secondary'
              }`}
            >
              السنة {year === 1 ? 'الأولى' : year === 2 ? 'الثانية' : year === 3 ? 'الثالثة' : year === 4 ? 'الرابعة' : 'الخامسة'}
            </Button>
          ))}
        </div>

        {/* Selected Year Content */}
        <div className="islamic-card p-8">
          <h3 className="text-2xl font-bold arabic-heading mb-6 text-center">
            {curriculumData[selectedYear as keyof typeof curriculumData].title}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold arabic-heading">المقرر</th>
                  <th className="py-3 px-4 font-bold arabic-heading">الكتاب المقرر</th>
                  <th className="py-3 px-4 font-bold arabic-heading">المؤلف</th>
                </tr>
              </thead>
              <tbody>
                {curriculumData[selectedYear as keyof typeof curriculumData].courses.map((course, index) => (
                  <tr key={index} className="border-b border-border hover:bg-[hsl(var(--islamic-cream))] transition-colors">
                    <td className="py-4 px-4 arabic-text font-medium">{course.name}</td>
                    <td className="py-4 px-4 arabic-text">{course.book}</td>
                    <td className="py-4 px-4 arabic-text text-muted-foreground">{course.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;