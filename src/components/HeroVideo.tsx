import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 bg-ink" aria-hidden="true">
      <img
        src={siteConfig.heroPoster}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      {!videoFailed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 z-[1] h-full w-full object-cover object-center transition-opacity duration-700 ease-out motion-reduce:transition-none ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={siteConfig.heroPoster}
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={() => setIsVideoReady(true)}
          onCanPlay={() => setIsVideoReady(true)}
          onError={() => {
            setIsVideoReady(false);
            setVideoFailed(true);
          }}
        >
          <source src={siteConfig.heroVideoMp4} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_68%_45%,transparent_0,rgba(17,17,17,.12)_32%,rgba(17,17,17,.58)_100%),linear-gradient(90deg,rgba(17,17,17,.72),rgba(17,17,17,.12)_52%,rgba(17,17,17,.48)),linear-gradient(180deg,rgba(17,17,17,.55),transparent_34%,rgba(17,17,17,.38))]" />
    </div>
  );
}
