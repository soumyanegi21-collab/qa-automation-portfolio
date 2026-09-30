import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';

type MagneticProps = { children: ReactNode };

export function Magnetic({ children }: MagneticProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 420, damping: 30, mass: 0.25 });
  const y = useSpring(pointerY, { stiffness: 420, damping: 30, mass: 0.25 });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="magnetic-wrap"
      style={{ x, y }}
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse' || reducedMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left - bounds.width / 2) * 0.12);
        pointerY.set((event.clientY - bounds.top - bounds.height / 2) * 0.12);
      }}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
    >
      {children}
    </motion.div>
  );
}
