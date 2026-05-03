"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ end, prefix = "", suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center py-4">
      <span className="font-display text-[48px] md:text-[64px] text-white leading-none">
        {prefix}{count.toLocaleString("es-ES")}{suffix}
      </span>
      <span className="font-body text-white/80 text-sm uppercase tracking-wider mt-2">{label}</span>
    </div>
  );
}
