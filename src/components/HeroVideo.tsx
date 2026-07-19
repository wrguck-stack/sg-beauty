import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
export function HeroVideo() {
  const [videoFailed, setVideoFailed] = useState(false);
  return <div className="absolute inset-0 -z-10 bg-ink"><img src={siteConfig.heroPoster} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />{!videoFailed && <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={siteConfig.heroPoster} onError={() => setVideoFailed(true)} aria-hidden><source src={siteConfig.heroVideoWebm} type="video/webm"/><source src={siteConfig.heroVideoMp4} type="video/mp4"/></video>}<div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_45%,transparent_0,rgba(17,17,17,.12)_32%,rgba(17,17,17,.58)_100%),linear-gradient(90deg,rgba(17,17,17,.72),rgba(17,17,17,.12)_52%,rgba(17,17,17,.48)),linear-gradient(180deg,rgba(17,17,17,.55),transparent_34%,rgba(17,17,17,.38))]"/></div>;
}
