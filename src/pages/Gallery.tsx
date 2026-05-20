import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface GalleryProps {
  images: { id: number; src: string; title: string; description: string }[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">图片展示</h2>
          <p className="text-gray-600">项目现场的高清图片记录</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{image.title}</h3>
                <p className="text-gray-500 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          {images.find((img) => img.id === selectedImage) && (
            <div className="max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <img
                src={images.find((img) => img.id === selectedImage)?.src}
                alt={images.find((img) => img.id === selectedImage)?.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-semibold">
                  {images.find((img) => img.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-300">
                  {images.find((img) => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
