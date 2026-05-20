import { Cog, Wrench, Target } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: Cog, title: '自动化改造', description: '实现生产流程自动化' },
    { icon: Wrench, title: '设备维护', description: '专业设备维护与保养' },
    { icon: Target, title: '精准控制', description: '高精度控制系统' },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">GSK改造项目</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            专业的工业自动化改造解决方案，提升生产效率与质量
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center p-4">
                  <div className="bg-white/20 rounded-full p-4 mb-3">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
