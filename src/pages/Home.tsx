import HeroSection from '../components/HeroSection';
import { Image, Video, FileText, ArrowRight } from 'lucide-react';

const Home = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const sections = [
    {
      id: 'gallery',
      title: '图片展示',
      description: '浏览项目现场的高清图片，了解设备改造的各个环节',
      icon: Image,
      color: 'bg-blue-500',
    },
    {
      id: 'videos',
      title: '视频展示',
      description: '观看设备运行和改造过程的视频记录',
      icon: Video,
      color: 'bg-green-500',
    },
    {
      id: 'documents',
      title: '文档下载',
      description: '下载项目相关的技术文档和使用说明书',
      icon: FileText,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <HeroSection />
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">项目作品</h2>
            <p className="text-gray-600">探索GSK改造项目的各个方面</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  onClick={() => onNavigate(section.id)}
                >
                  <div className={`${section.color} rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-200">
                    <span>查看详情</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-8 text-white">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">关于项目</h3>
              <p className="text-blue-100 mb-4">
                GSK改造项目是一项工业自动化改造工程，旨在提升生产效率和产品质量。通过引入先进的自动化设备和控制系统，实现生产流程的智能化管理。
              </p>
              <p className="text-blue-100">
                项目涵盖设备改造、控制系统升级、工艺流程优化等多个方面，为企业提供全面的自动化解决方案。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
