import { useRef } from 'react';
import type { PointerEvent, ReactNode } from 'react';

type MagneticProps = { children: ReactNode };

export function Magnetic({ children }: MagneticProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.transition = 'none';
    event.currentTarget.style.transform = `translate3d(${(event.clientX - bounds.left - bounds.width / 2) * 0.12}px, ${(event.clientY - bounds.top - bounds.height / 2) * 0.12}px, 0)`;
  };

  const handlePointerLeave = () => {
    if (!wrapRef.current) return;
    wrapRef.current.style.transition = 'transform 150ms ease-out';
    wrapRef.current.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <div
      ref={wrapRef}
      className="magnetic-wrap"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}
