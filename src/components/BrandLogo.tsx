import { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export function BrandLogo({ light = false }: { light?: boolean }) {
  const [failed, setFailed] = useState(false);
  return <a href="#home" className={`brand-logo ${light ? 'text-warm-white' : 'text-ink'}`} aria-label="SG Beauty Home">
    {!failed ? <img src={siteConfig.logoPath} onError={() => setFailed(true)} alt="SG Beauty" className="h-8 w-auto" /> : <span>SG BEAUTY</span>}
  </a>;
}
