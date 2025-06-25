"use client";
import { useState, useEffect, useRef } from "react";

export default function MusicSlider() {
  const [selected, setSelected] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // YouTube Shorts videos from BPO Brigade channel
  const videos = [
    { 
      id: 1, 
      videoId: "0IZOyNmtrd0",
      embedUrl: "https://www.youtube.com/embed/0IZOyNmtrd0?autoplay=1&mute=1&enablejsapi=1&playsinline=1&showinfo=0",
      thumbnail: "https://img.youtube.com/vi/0IZOyNmtrd0/maxresdefault.jpg"
    },
    { 
      id: 2, 
      videoId: "b6Vq0vQm5U4",
      embedUrl: "https://www.youtube.com/embed/b6Vq0vQm5U4?autoplay=1&mute=1&enablejsapi=1&playsinline=1&showinfo=0",
      thumbnail: "https://img.youtube.com/vi/b6Vq0vQm5U4/maxresdefault.jpg"
    },
    { 
      id: 3, 
      videoId: "TeYYDf4hKGI",
      embedUrl: "https://www.youtube.com/embed/TeYYDf4hKGI?autoplay=1&mute=1&enablejsapi=1&playsinline=1&showinfo=0",
      thumbnail: "https://img.youtube.com/vi/TeYYDf4hKGI/maxresdefault.jpg"
    },
    { 
      id: 4, 
      videoId: "bl3Beno4MUA",
      embedUrl: "https://www.youtube.com/embed/bl3Beno4MUA?autoplay=1&mute=1&enablejsapi=1&playsinline=1&showinfo=0",
      thumbnail: "https://img.youtube.com/vi/bl3Beno4MUA/maxresdefault.jpg"
    },
    { 
      id: 5, 
      videoId: "jRHuBfl-hl4",
      embedUrl: "https://www.youtube.com/embed/jRHuBfl-hl4?autoplay=1&mute=1&enablejsapi=1&playsinline=1&showinfo=0",
      thumbnail: "https://img.youtube.com/vi/jRHuBfl-hl4/maxresdefault.jpg"
    },
    { 
      id: 6, 
      videoId: "A7XZlsi0R0I",
      embedUrl: "https://www.youtube.com/embed/A7XZlsi0R0I?autoplay=1&mute=1&enablejsapi=1&playsinline=1&showinfo=0",
      thumbnail: "https://img.youtube.com/vi/A7XZlsi0R0I/maxresdefault.jpg"
    },
  ];

  // Start or stop the auto-slide interval based on hover state
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setSelected((prev) => (prev >= videos.length ? 1 : prev + 1));
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, videos.length]);

  // Compute circular index helper
  const circularIndex = (index) => {
    if (index < 0) return videos.length + index;
    if (index >= videos.length) return index - videos.length;
    return index;
  };

  // Calculate visible indexes: [-2, -1, 0, 1, 2]
  const visibleIndexes = [
    circularIndex(selected - 3),
    circularIndex(selected - 2),
    circularIndex(selected - 1),
    circularIndex(selected - 1 + 1),
    circularIndex(selected - 1 + 2),
  ];

  // Assign positions for styling
  const getPosition = (videoIndex) => {
    const positionMap = {
      [circularIndex(selected - 3)]: -2,
      [circularIndex(selected - 2)]: -1,
      [circularIndex(selected - 1)]: 0,
      [circularIndex(selected - 1 + 1)]: 1,
      [circularIndex(selected - 1 + 2)]: 2,
    };
    return positionMap[videoIndex];
  };

  const getStyle = (position) => {
    switch (position) {
      case 0:
        return { translate: 0, scale: 1.2, zIndex: 5, opacity: 1 };
      case -1:
        return { translate: -220, scale: 1, zIndex: 4, opacity: 1 };
      case -2:
        return { translate: -400, scale: 0.9, zIndex: 3, opacity: 0.8 };
      case 1:
        return { translate: 220, scale: 1, zIndex: 4, opacity: 1 };
      case 2:
        return { translate: 400, scale: 0.9, zIndex: 3, opacity: 0.8 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div 
      className="flex flex-col justify-center items-center bg-[#c394f8] relative pt-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-0 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black">
          Content Created By Team
        </h1>
        <p className="text-lg md:text-xl text-black font-semibold mt-4">Watch our Latest Content</p>
      </div>

      <div className="relative flex justify-center items-center h-[700px] w-full overflow-hidden">
        {visibleIndexes.map((videoIndex) => {
          const position = getPosition(videoIndex);
          const { translate, scale, zIndex, opacity } = getStyle(position);
          const video = videos[videoIndex];

          return (
            <div
              key={video.id}
              className="absolute transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                transform: `translateX(${translate}px) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
                width: "250px",
                height: "444px",
                // Dark background for side cards with opacity to make it visible
                backgroundColor: position !== 0 ? "rgba(1, 2, 0.9, 0.5)" : "transparent",
                borderRadius: "10px", // Adding rounded corners to the side cards for better UI
              }}
              onClick={() => setSelected(video.id)}
            >
              {position === 0 ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={video.embedUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                  title={`YouTube Short ${video.id}`}
                ></iframe>
              ) : (
                <img
                  src={video.thumbnail}
                  alt={`Video thumbnail ${video.id}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-0 mb-10 flex space-x-3">
        {videos.map((video) => (
          <button
            key={video.id}
            className={`w-3 h-3 rounded-full ${selected === video.id ? "bg-[#284d8a]" : "bg-white/70"}`}
            onClick={() => setSelected(video.id)}
          />
        ))}
      </div>
    </div>
  );
}
