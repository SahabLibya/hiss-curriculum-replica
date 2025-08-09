import { Building2, School, Settings, Users } from "lucide-react";

const InstitutionalAreasSection = () => {
  const areas = [
    {
      title: "مساحة الموقع",
      value: "15,250",
      unit: "متر مربع",
      icon: Building2,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "المبنى الإداري",
      value: "1,115", 
      unit: "متر مربع",
      icon: Users,
      color: "from-green-500 to-green-600"
    },
    {
      title: "المبنى التعليمي",
      value: "6,200",
      unit: "متر مربع", 
      icon: School,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "المبنى الخدمي",
      value: "7,200",
      unit: "متر مربع",
      icon: Settings,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="areas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading mb-4">
            مساحات المؤسسة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تعرف على المساحات والمرافق المختلفة التي تضمها الكلية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className="islamic-card p-6 text-center group hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">
                  {area.value}
                </div>
                <div className="text-sm arabic-text text-muted-foreground">
                  {area.unit}
                </div>
                <h3 className="text-lg font-bold arabic-heading mt-3">
                  {area.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalAreasSection;