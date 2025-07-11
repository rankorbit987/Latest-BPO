"use client";
import { useState, useEffect, useRef } from "react";
import BlastedBackground from "../UI/CardBackground";

export default function ReelsSlider() {
  const [selected, setSelected] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

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

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setSelected(prev => (prev % videos.length) + 1);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, videos.length]);

  const circularIndex = (index) => {
    return ((index % videos.length) + videos.length) % videos.length;
  };

  const visibleIndexes = [
    circularIndex(selected - 3),
    circularIndex(selected - 2),
    circularIndex(selected - 1),
    circularIndex(selected),
    circularIndex(selected + 1),
  ];

  const getPosition = (videoIndex) => {
    const selectedIndex = videos.findIndex(v => v.id === selected);
    const diff = (videoIndex - selectedIndex + videos.length) % videos.length;
    return diff > 2 ? diff - videos.length : diff;
  };

  const getStyle = (position) => {
    const styles = {
      transform: `translateX(${position * 220}px) scale(${1 - Math.abs(position) * 0.1})`,
      zIndex: 5 - Math.abs(position),
      opacity: 1 - Math.abs(position) * 0.2,
    };
    
    if (position === 0) {
      return { ...styles, scale: 1.2, zIndex: 5, opacity: 1 };
    }
    return styles;
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center pt-10 overflow-hidden min-h-screen"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BlastedBackground />

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
          Content Created By Team
        </h1>
        <p className="text-lg md:text-xl text-black font-medium">
          From Our BPO Floor to Your Screen
        </p>
      </div>

      <div className="relative flex justify-center items-center h-[700px] w-full overflow-hidden z-10 mt-8">
        {visibleIndexes.map((videoIndex) => {
          const video = videos[videoIndex];
          const position = getPosition(videoIndex);
          const style = getStyle(position);

          return (
            <div
              key={video.id}
              className="absolute transition-all duration-500 ease-out cursor-pointer will-change-transform"
              style={{
                ...style,
                width: "280px",
                height: "500px",
                backgroundColor: position !== 0 ? "rgba(0, 0, 0, 0.25)" : "transparent",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
              }}
              onClick={() => setSelected(video.id)}
            >
              {position === 0 ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={video.embedUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                  title={`YouTube Short ${video.id}`}
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={video.thumbnail}
                    alt={`Video thumbnail ${video.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-8 flex space-x-3 z-10">
        {videos.map((video) => (
          <button
            key={video.id}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selected === video.id 
                ? "bg-indigo-600 scale-125" 
                : "bg-white/80 hover:bg-white"
            }`}
            onClick={() => setSelected(video.id)}
            aria-label={`Go to video ${video.id}`}
          />
        ))}
      </div>
    </div>
  );
}