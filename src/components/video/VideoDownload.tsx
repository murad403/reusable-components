"use client";

import { useRef, useState } from "react";
import { Play, Pause, Download } from "lucide-react";

const VideoDownload = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");

  const videoUrl = "/videos/video.mp4"; // তোমার ভিডিওর পথ
  const fileName = "my-video.mp4"; // ডাউনলোডে যে নামে সেভ হবে

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(formatTime(videoRef.current.currentTime));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  // ডাউনলোড ফাংশন
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = videoUrl;
    a.download = fileName; // ফাইলের নাম
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-1/4 max-w-4xl mx-auto">
        {/* ভিডিও */}
        <video
          ref={videoRef}
          className="w-full rounded-2xl h-[300px] shadow-2xl"
          src={videoUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onClick={togglePlayPause}
        />

        {/* কাস্টম ওভারলে */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-2xl cursor-pointer hover:bg-black/40 transition"
          onClick={togglePlayPause}
        >
          {/* Play/Pause আইকন */}
          <div className="mb-12 transition-transform hover:scale-110">
            {isPlaying ? (
              <Pause className="w-20 h-20 text-white drop-shadow-2xl" fill="white" />
            ) : (
              <Play className="w-20 h-20 text-white drop-shadow-2xl ml-3" fill="white" />
            )}
          </div>

          {/* টাইম + ডিসপ্লে */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 px-6 py-3 rounded-full">
            <span className="text-white font-medium text-lg">
              {currentTime} / {duration}
            </span>
          </div>
        </div>

        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2">
          <button
            onClick={(e) => {
              e.stopPropagation(); // যাতে ভিডিও পজ না হয়
              handleDownload();
            }}
            className="flex items-center gap-3 px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-xl rounded-full shadow-2xl transition transform hover:scale-105 active:scale-95"
          >
            <Download className="w-7 h-7" />
            ডাউনলোড করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDownload;