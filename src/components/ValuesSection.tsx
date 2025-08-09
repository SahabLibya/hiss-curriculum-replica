import { Shield, Eye, Lightbulb, Users, Heart } from "lucide-react";

const ValuesSection = () => {
  const values = [
    {
      title: "الالتزام بأحكام الشريعة الإسلامية",
      icon: Shield,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "النزاهة والشفافية",
      icon: Eye,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "الإتقان والإبداع",
      icon: Lightbulb,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "العمل بروح الفريق",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "التفاعل الإيجابي مع المجتمع",
      icon: Heart,
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="values" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            قيم المؤسسة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            القيم الأساسية التي تحكم عملنا وتوجه رسالتنا التعليمية والأكاديمية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="islamic-card p-6 group hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold arabic-heading leading-relaxed">
                    {value.title}
                  </h3>
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