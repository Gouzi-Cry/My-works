import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">GSK改造项目作品集</h3>
            <p className="text-gray-400 text-sm mt-1">专业展示工业自动化改造项目成果</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
              <span>Github</span>
            </a>
            <a href="mailto:contact@example.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
              <span>联系邮箱</span>
            </a>
            <a href="tel:+8612345678900" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Phone size={20} />
              <span>联系电话</span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>© 2024 GSK改造项目. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
