import { useEffect } from 'react';
import type { CSSProperties } from 'react';

const particles = Array.from({ length: 52 }, (_, index) => ({
  left: `${(index * 73 + 17) % 100}%`,
  top: `${(index * 41 + 9) % 100}%`,
  size: `${1 + ((index * 7) % 3)}px`,
  duration: `${18 + ((index * 13) % 22)}s`,
  delay: `${-((index * 7) % 19)}s`,
}));

export function BackgroundEffects() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let targetX = pointerX;
    let targetY = pointerY;

    const updateEffects = () => {
      frame = 0;
      pointerX += (targetX - pointerX) * 0.16;
      pointerY += (targetY - pointerY) * 0.16;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      root.style.setProperty('--pointer-x', `${pointerX}px`);
      root.style.setProperty('--pointer-y', `${pointerY}px`);
      root.style.setProperty('--scroll-progress', `${progress}`);
      if (Math.abs(targetX - pointerX) > 0.5 || Math.abs(targetY - pointerY) > 0.5) {
        frame = window.requestAnimationFrame(updateEffects);
      }
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateEffects);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      targetX = event.clientX;
      targetY = event.clientY;
      root.style.setProperty('--pointer-active', '1');
      scheduleUpdate();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    updateEffects();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      root.style.removeProperty('--pointer-active');
      root.style.removeProperty('--scroll-progress');
    };
  }, []);

  return (
    <>
      <div className="ambient-background" aria-hidden="true">
        <div className="aurora aurora-cyan" />
        <div className="aurora aurora-violet" />
        <div className="engineering-grid" />
        <div className="particle-field">
          {particles.map((particle, index) => (
            <i
              className="particle"
              key={index}
              style={{
                '--particle-x': particle.left,
                '--particle-y': particle.top,
                '--particle-size': particle.size,
                '--particle-duration': particle.duration,
                '--particle-delay': particle.delay,
              } as CSSProperties}
            />
          ))}
        </div>
        <div className="noise-overlay" />
      </div>
      <div className="pointer-glow" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
    </>
  );
}
