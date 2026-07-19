import { useEffect, useState } from 'react';
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? 'home');
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return undefined;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(id);
      }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [ids]);
  return active;
}
