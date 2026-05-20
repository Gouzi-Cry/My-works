import { FileText, FileDown, Eye } from 'lucide-react';

interface DocumentsProps {
  documents: { id: number; name: string; type: string; size: string; src: string }[];
}

const Documents = ({ documents }: DocumentsProps) => {
  const getFileIcon = (type: string) => {
    if (type === 'pdf') return 'bg-red-500';
    if (type === 'doc' || type === 'docx') return 'bg-blue-500';
    return 'bg-gray-500';
  };

  const getFileTypeLabel = (type: string) => {
    if (type === 'pdf') return 'PDF';
    if (type === 'doc' || type === 'docx') return 'Word';
    return type.toUpperCase();
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">文档下载</h2>
          <p className="text-gray-600">项目相关的技术文档和使用说明书</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${getFileIcon(doc.type)} rounded-xl w-16 h-16 flex items-center justify-center flex-shrink-0`}>
                <FileText className="text-white" size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-semibold text-gray-800 truncate">{doc.name}</h3>
                  <span className={`${getFileIcon(doc.type)} text-white text-xs px-2 py-0.5 rounded-full`}>
                    {getFileTypeLabel(doc.type)}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-3">{doc.size}</p>
                <div className="flex space-x-3">
                  <a
                    href={doc.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Eye size={18} />
                    <span>预览</span>
                  </a>
                  <a
                    href={doc.src}
                    download
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FileDown size={18} />
                    <span>下载</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
