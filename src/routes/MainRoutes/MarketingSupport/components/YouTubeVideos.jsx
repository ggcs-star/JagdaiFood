import React from 'react';
import YouTube from 'react-youtube';

const videos = [
  // {
  //   name: "Mr Telangana Prakash",
  //   role: "Politician",
  //   location: "Hyderabad (Telangana)",
  //   image: "/static/media/first.e5df796160f9940e46c6.png",
  //   videoId: "YOUR_VIDEO_ID_1" // Replace with actual YouTube video ID
  // },
  {
    name: "Mr Rajendra Verma",
    role: "Chartered Accountant",
    location: "Ahmedabad (Gujarat)",
    image: "/static/media/second.7b3142018f4cf3efffbe.png",
    videoId: "YOUR_VIDEO_ID_2" // Replace with actual YouTube video ID
  }
];

const YouTubeVideos = () => {
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src={video.image} 
                alt={video.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-lg font-semibold text-gray-800">{video.name}</div>
                <div className="text-sm text-gray-600">{video.role}</div>
                <div className="text-sm text-gray-500">{video.location}</div>
              </div>
              <div className="p-4">
                <YouTube
                  videoId={video.videoId}
                  opts={opts}
                  className="w-full"
                  iframeClassName="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos; 