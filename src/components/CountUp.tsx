import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  target: number;
  className?: string;
  duration?: number;
  suffix?: string;
  ariaLabel?: string;
};

export function CountUp({ target, className, duration = 1600, suffix = '', ariaLabel }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const frameIdRef = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    setValue(0);
    hasAnimatedRef.current = false;
    cancelAnimationFrame(frameIdRef.current);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      if (prefersReducedMotion || duration <= 0) {
        setValue(target);
        return;
      }

      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        setValue(Math.round(target * easeOut(progress)));

        if (progress < 1) {
          frameIdRef.current = requestAnimationFrame(tick);
        }
      };

      frameIdRef.current = requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      startAnimation();
      return () => cancelAnimationFrame(frameIdRef.current);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        startAnimation();
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.15 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameIdRef.current);
    };
  }, [duration, target]);

  return (
    <span ref={ref} className={className} data-count-to={target} aria-label={ariaLabel}>
      {value.toLocaleString()}{suffix}
    </span>
  );
}
