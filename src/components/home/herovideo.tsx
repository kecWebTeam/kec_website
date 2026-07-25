"use client";

import { useRef, useEffect } from "react";


interface HeroVideoProps {
  videoSrc: string;
  startTime?: number;
}

export default function HeroVideo({ videoSrc, startTime = 0 }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set the start time once the video metadata is loaded.
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // When metadata is loaded we can seek to the desired start time.
      const setStart = () => {
        video.currentTime = startTime;
      };
      if (video.readyState >= 1) {
        // Metadata already available.
        setStart();
      } else {
        video.addEventListener('loadedmetadata', setStart, { once: true });
      }
    }
  }, [startTime]);


  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-screen w-full object-cover"
      muted
      loop
      playsInline
      preload="auto"
      autoPlay

    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}