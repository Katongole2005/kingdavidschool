import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  target: number;
  className?: string;
  duration?: number;
};

export function CountUp({ target, className, duration = 2000 }: CountUpProps) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;

      setHasAnimated(true);
      let frameId = 0;
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        setValue(Math.floor(target * progress));
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
      observer.disconnect();

      return () => cancelAnimationFrame(frameId);
    }, { threshold: 0.5 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, hasAnimated, target]);

  return (
    <span ref={ref} className={className} data-count-to={target}>
      {value.toLocaleString()}
    </span>
  );
}
