import { useState } from "react";
import { Button } from "@/components/ui/button";

const CurriculumSection = () => {
  const [selectedYear, setSelectedYear] = useState(1);

  const curriculumData = {
    1: {
      title: "السنة الأولى - الأساسيات الشرعية",
      courses: [
        { name: "القرآن الكريم (1)", books: [{ title: "ربع يس", authors: [] }] },
        {
          name: "علوم القرآن",
          books: [
            { title: "الإتقان في علوم القرآن", authors: ["الإمام السيوطي"] },
            { title: "علوم القرآن الكريم", authors: ["نور الدين عتر"] }
          ]
        },
        { name: "أحاديث الأحكام (1)", books: [{ title: "سبل السلام شرح بلوغ المرام", authors: ["الصنعاني"] }] },
        { name: "مصطلح الحديث (1)", books: [{ title: "فتح المغيث شرح ألفية الحديث", authors: ["السيوطي"] }] },
        { name: "العقيدة (1)", books: [{ title: "مختصر لوامع الأنوار البهية", authors: ["حسن بن عمر الدمشقي"] }] },
        { name: "السيرة النبوية (1)", books: [{ title: "الرحيق المختوم", authors: ["صفي الرحمن المباركفوري"] }] },
        { name: "فقه العبادات (1)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "فقه العبادات (2)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "تاريخ التشريع", books: [{ title: "تاريخ الفقه الإسلامي", authors: ["الشيخ محمد علي السايس"] }] },
        { name: "أصول الفقه (1)", books: [{ title: "مراقي السعود شرح نشر البنود", authors: ["الشيخ عبدالله بن الحاج العلوي"] }] },
        { name: "النحو (1)", books: [{ title: "شرح ابن عقيل على ألفية ابن مالك", authors: [] }] },
        { name: "البلاغة (1)", books: [{ title: "حلية اللب المصون على الجوهر المكنون", authors: ["الشيخ أحمد الدمنهوري"] }] },
        { name: "المنطق", books: [{ title: "إيضاح المبهم لمعاني السلم", authors: ["أحمد الدمنهوري"] }] }
      ]
    },
    2: {
      title: "السنة الثانية - التعمق في النصوص",
      courses: [
        { name: "القرآن الكريم (2)", books: [{ title: "ربع الكهف", authors: [] }] },
        { name: "تفسير القرآن (1)", books: [{ title: "أنوار التنزيل وأسرار التأويل", authors: ["عبدالله الشيرازي البيضاوي"] }] },
        { name: "أحاديث الأحكام (2)", books: [{ title: "سبل السلام شرح بلوغ المرام", authors: ["الصنعاني"] }] },
        { name: "مصطلح الحديث (2)", books: [{ title: "فتح المغيث شرح ألفية الحديث", authors: ["السيوطي"] }] },
        { name: "العقيدة (2)", books: [{ title: "مختصر لوامع الأنوار البهية", authors: ["حسن بن عمر الدمشقي"] }] },
        { name: "السيرة النبوية (2)", books: [{ title: "الرحيق المختوم", authors: ["صفي الرحمن المباركفوري"] }] },
        { name: "فقه العبادات (3)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "فقه العبادات (4)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "فقه الأيمان والنذور", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "أصول الفقه (2)", books: [{ title: "نشر البنود على مراقي السعود", authors: ["عبدالله بن الحاج العلوي"] }] },
        { name: "النحو (2)", books: [{ title: "شرح ابن عقيل على ألفية ابن مالك", authors: [] }] },
        { name: "البلاغة (2)", books: [{ title: "حلية اللب المصون على الجوهر المكنون", authors: ["الشيخ أحمد الدمنهوري"] }] },
        {
          name: "الصرف",
          books: [
            { title: "إتحاف الطرف في علم الصرف", authors: ["ياسين الحافظ"] },
            { title: "شرح بدر الدين على لامية الأفعال", authors: [] }
          ]
        }
      ]
    },
    3: {
      title: "السنة الثالثة - الفقه والأصول",
      courses: [
        { name: "القرآن الكريم (3)", books: [{ title: "ربع الأعراف", authors: [] }] },
        { name: "تفسير القرآن (2)", books: [{ title: "أنوار التنزيل وأسرار التأويل", authors: ["عبدالله الشيرازي البيضاوي"] }] },
        { name: "أحاديث الأحكام (3)", books: [{ title: "سبل السلام شرح بلوغ المرام", authors: ["الصنعاني"] }] },
        { name: "مصطلح الحديث (3)", books: [{ title: "فتح المغيث شرح ألفية الحديث", authors: ["السيوطي"] }] },
        { name: "فقه الأسرة (1)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "فقه الأسرة (2)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "فقه المعاملات (1)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        {
          name: "الفرائض",
          books: [
            { title: "شرح الرحبية", authors: ["المارديني"] },
            { title: "لباب الفرائض", authors: ["محمد الصادق الشطي"] }
          ]
        },
        { name: "أصول الفقه (3)", books: [{ title: "نشر البنود على مراقي السعود", authors: ["عبدالله بن الحاج العلوي"] }] },
        {
          name: "آداب البحث والمناظرة",
          books: [{ title: "رسالة الآداب في علم آداب البحث", authors: ["محمد محيي الدين عبد الحميد"] }]
        },
        {
          name: "القواعد الفقهية (1)",
          books: [
            { title: "إيضاح المسالك", authors: ["الونشريسي"] },
            { title: "شرح المنهج المنتخب", authors: ["المنجور"] }
          ]
        },
        { name: "النحو (3)", books: [{ title: "شرح ابن عقيل على ألفية ابن مالك", authors: [] }] },
        {
          name: "النصوص الأدبية (1)",
          books: [{ title: "النصوص المختارة لطالب الجامعات", authors: ["جواهر الأدب"] }]
        }
      ]
    },
    4: {
      title: "السنة الرابعة - التخصص والمقارنة",
      courses: [
        { name: "القرآن الكريم (4)", books: [{ title: "ربع البقرة", authors: [] }] },
        { name: "تفسير آيات الأحكام (1)", books: [{ title: "أحكام القرآن الصغرى", authors: ["ابن العربي"] }] },
        { name: "أحاديث الأحكام (4)", books: [{ title: "سبل السلام شرح بلوغ المرام", authors: ["الصنعاني"] }] },
        { name: "مصطلح الحديث (4)", books: [{ title: "فتح المغيث شرح ألفية الحديث", authors: ["السيوطي"] }] },
        { name: "فقه المعاملات (2)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "فقه المعاملات (3)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "فقه المعاملات (4)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "الفقه المقارن (أ)", books: [{ title: "مقارنة المذاهب في الفقه", authors: ["محمود شلتوت", "محمد علي السايس"] }] },
        {
          name: "القواعد الفقهية (2)",
          books: [
            { title: "إيضاح المسالك", authors: ["الونشريسي"] },
            { title: "شرح المنهج المنتخب", authors: ["المنجور"] }
          ]
        },
        { name: "أصول الفقه (4)", books: [{ title: "نشر البنود على مراقي السعود", authors: ["عبدالله بن الحاج العلوي"] }] },
        { name: "النحو والصرف", books: [{ title: "شرح ابن عقيل على ألفية ابن مالك", authors: [] }] },
        {
          name: "النصوص الأدبية (2)",
          books: [{ title: "النصوص المختارة لطالب الجامعات", authors: ["جواهر الأدب"] }]
        },
        {
          name: "مناهج البحث",
          books: [{ title: "صناعة البحث والكتابة", authors: ["د. عبدالحميد عبدالله الهرامة", "د. محمد خليل الزروق"] }]
        }
      ]
    },
    5: {
      title: "السنة الخامسة - الإفتاء والتطبيق",
      courses: [
        { name: "تفسير آيات الأحكام (2)", books: [{ title: "أحكام القرآن الصغرى", authors: ["ابن العربي"] }] },
        { name: "أحاديث الأحكام (5)", books: [{ title: "سبل السلام شرح بلوغ المرام", authors: ["الصنعاني"] }] },
        { name: "مناهج المحدثين", books: [{ title: "اختيار المجلات العلمية والعلل", authors: [] }] },
        { name: "فقه المعاملات (5)", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "فقه الأقضية والوصايا", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "فقه الحدود والجنايات", books: [{ title: "الشرح الكبير على مختصر خليل", authors: ["أحمد الدردير"] }] },
        { name: "الفقه المقارن (ب)", books: [{ title: "مقارنة المذاهب في الفقه", authors: ["محمود شلتوت", "محمد علي السايس"] }] },
        { name: "قضايا فقهية معاصرة", books: [{ title: "قضايا فقهية معاصرة", authors: ["الصادق بن عبدالرحمن الغرياني"] }] },
        { name: "مقاصد الشريعة", books: [{ title: "شفاء الغليل في بيان الشبه والمقاصد ومسالك التعليل", authors: ["الغزالي"] }] },
        { name: "السياسة الشرعية", books: [{ title: "اختيارات المجلس العلمي", authors: [] }] },
        { name: "أصول الإفتاء", books: [{ title: "أصول الإفتاء وآدابه", authors: ["محمد تقي الدين العثماني", "الطليحية", "البوع"] }] },
        { name: "أصول الفقه (5)", books: [{ title: "نشر البنود على مراقي السعود", authors: ["عبدالله بن الحاج العلوي"] }] },
        { name: "الفرق والمذاهب المعاصرة", books: [{ title: "الأديان والفرق والمذاهب المعاصرة", authors: ["عبدالقادر شيبة الحمد"] }] },
        { name: "الاقتصاد الإسلامي", books: [{ title: "أسس ومبادئ الاقتصاد الإسلامي وأهدافه", authors: ["عبدالله الطري"] }] },
        {
          name: "النصوص الأدبية (3)",
          books: [{ title: "النصوص المختارة لطالب الجامعات", authors: ["جواهر الأدب"] }]
        },
        { name: "مشروع التخرج", books: [] }
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
      ? "btn-islamic-primary border-2 border-green-700 scale-105"
      : "btn-islamic-secondary opacity-70 hover:opacity-100"
  }`}
>
  السنة {year === 1 ? "الأولى" : year === 2 ? "الثانية" : year === 3 ? "الثالثة" : year === 4 ? "الرابعة" : "الخامسة"}
</Button>

          ))}
        </div>

        {/* Selected Year Content */}
        <div className="islamic-card p-8">
          <h3 className="text-2xl font-bold arabic-heading mb-6 text-center">
            {curriculumData[selectedYear].title}
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold arabic-heading">#</th>
                  <th className="py-3 px-4 font-bold arabic-heading">المقرر</th>
                  <th className="py-3 px-4 font-bold arabic-heading">الكتاب المقرر</th>
                  <th className="py-3 px-4 font-bold arabic-heading">المؤلف</th>
                </tr>
              </thead>
              <tbody>
                {curriculumData[selectedYear].courses.map((course, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-[hsl(var(--islamic-cream))] transition-colors"
                  >
                    <td className="py-4 px-4 arabic-text">{index + 1}</td>
                    <td className="py-4 px-4 arabic-text font-medium">{course.name}</td>
                    <td className="py-4 px-4 arabic-text">
                      {course.books.map((b) => b.title).join(" / ")}
                    </td>
                    <td className="py-4 px-4 arabic-text text-muted-foreground">
                      {course.books.map((b) => b.authors.join(", ")).join(" / ")}
                    </td>
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
