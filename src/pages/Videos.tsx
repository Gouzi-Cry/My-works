import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideosProps {
  videos: { id: number; src: string; title: string; description: string }[];
}

const Videos = ({ videos }: VideosProps) => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = (videoId: number) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">视频展示</h2>
          <p className="text-gray-600">设备运行和改造过程的视频记录</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-contain"
                  src={video.src}
                  controls
                  poster=""
                  onPlay={() => setPlayingVideo(video.id)}
                  onPause={() => setPlayingVideo(null)}
                  muted={isMuted}
                />
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button
                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                    <Maximize size={20} />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{video.title}</h3>
                <p className="text-gray-500 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
