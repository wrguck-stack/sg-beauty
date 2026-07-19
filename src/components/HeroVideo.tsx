import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
export function HeroVideo() {
  const [videoFailed, setVideoFailed] = useState(false);
  return <div className="absolute inset-0 z-0 bg-ink" aria-hidden><img src={siteConfig.heroPoster} alt="" className="absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] md:object-center" fetchPriority="high" />{!videoFailed && <video className="absolute inset-0 z-0 h-full w-full object-cover object-[58%_center] md:object-center" autoPlay muted loop playsInline preload="metadata" poster={siteConfig.heroPoster} onError={() => setVideoFailed(true)}><source src={siteConfig.heroVideoWebm} type="video/webm"/><source src={siteConfig.heroVideoMp4} type="video/mp4"/></video>}<div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_62%_42%,rgba(250,248,245,.06)_0,rgba(17,17,17,.1)_30%,rgba(17,17,17,.5)_100%),linear-gradient(90deg,rgba(17,17,17,.74),rgba(17,17,17,.28)_48%,rgba(17,17,17,.56)),linear-gradient(180deg,rgba(17,17,17,.62),rgba(17,17,17,.18)_34%,rgba(17,17,17,.48))]"/></div>;
}
