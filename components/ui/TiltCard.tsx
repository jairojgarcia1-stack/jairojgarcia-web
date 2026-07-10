"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), springConfig);
  const scale = useSpring(1, springConfig);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseEnter() {
    scale.set(1.03);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
    scale.set(1);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, scale, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
