import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Videos from './pages/Videos';
import Documents from './pages/Documents';

const images = [
  { id: 1, src: '/images/微信图片_20260520200829_890_269.jpg', title: '设备控制面板', description: 'com.Timer 计时器控制面板' },
  { id: 2, src: '/images/微信图片_20260520200830_891_269.jpg', title: '接线端子', description: '设备接线端子排' },
  { id: 3, src: '/images/微信图片_20260520200946_893_269.jpg', title: '焊接设备B面', description: '焊接设备B面整体视图' },
  { id: 4, src: '/images/微信图片_20260520201731_899_269.jpg', title: '焊接设备A面', description: '焊接设备A面整体视图' },
];

const videos = [
  { id: 1, src: '/videos/3f15aebb1491b678654dd9597408f36a.mp4', title: '设备运行视频1', description: '设备正常运行状态记录' },
  { id: 2, src: '/videos/6ac11cd81d112feaf1c258376ae2435f.mp4', title: '设备运行视频2', description: '设备运行细节展示' },
  { id: 3, src: '/videos/98bb4e6a87b95b8fe4f35a8ae2111a2f.mp4', title: '设备运行视频3', description: '设备操作演示' },
];

const documents = [
  { id: 1, name: 'VX-300K中文使用说明书', type: 'doc', size: '约 2.5 MB', src: '/documents/VX-300K中文使用說明書（旧）.doc' },
  { id: 2, name: '项目电焊机技术文档', type: 'pdf', size: '约 1.8 MB', src: '/documents/项目电焊机(1).pdf' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'gallery':
        return <Gallery images={images} />;
      case 'videos':
        return <Videos videos={videos} />;
      case 'documents':
        return <Documents documents={documents} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 pt-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
