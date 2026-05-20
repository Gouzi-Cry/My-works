import { useState } from 'react';
import { Menu, X, Home, Image, Video, FileText } from 'lucide-react';
interface HeaderProps {
 currentPage: string;
 onNavigate: (page: string) => void;
}
const Header = ({ currentPage, onNavigate }: HeaderProps) => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const navItems = [
 { id: 'home', label: '首页', icon: Home },
 { id: 'gallery', label: '图片展示', icon: Image },
 { id: 'videos', label: '视频展示', icon: Video },
 { id: 'documents', label: '文档下载', icon: FileText },
 ];
 return (<header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-16">
 <div className="flex items-center">
 <h1 className="text-xl font-bold text-blue-800">GSK改造项目</h1>
 </div>

 <nav className="hidden md:flex items-center space-x-8">
 {navItems.map((item) => {
 const Icon = item.icon;
 return (<button key={item.id} onClick={() => onNavigate(item.id)} className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${currentPage === item.id
 ? 'bg-blue-100 text-blue-800'
 : 'text-gray-600 hover:bg-gray-100'}`}>
 <Icon size={18}/>
 <span>{item.label}</span>
 </button>);
 })}
 </nav>

 <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
 {isMenuOpen ? <X size={24} className="text-gray-600"/> : <Menu size={24} className="text-gray-600"/>}
 </button>
 </div>

 {isMenuOpen && (<nav className="md:hidden py-4 border-t border-gray-100">
 <div className="flex flex-col space-y-2">
 {navItems.map((item) => {
 const Icon = item.icon;
 return (<button key={item.id} onClick={() => {
 onNavigate(item.id);
 setIsMenuOpen(false);
 }} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${currentPage === item.id
 ? 'bg-blue-100 text-blue-800'
 : 'text-gray-600 hover:bg-gray-100'}`}>
 <Icon size={20}/>
 <span>{item.label}</span>
 </button>);
 })}
 </div>
 </nav>)}
 </div>
 </header>);
};
export default Header;
