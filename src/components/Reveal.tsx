import { useEffect, useRef } from 'react';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export function Reveal({ children, className, delay = 0, as: Element = 'div' }: RevealProps) {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible');
        observer.unobserve(element);
      } else {
        element.classList.add('reveal-pending');
      }
    }, { threshold: 0.12, rootMargin: '40px' });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Element
      ref={revealRef}
      className={`reveal${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </Element>
  );
}
