'use client';

import { useRef, useEffect, useState } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function RevealOnScroll({ children, className = "" }: RevealOnScrollProps) {
  var ref = useRef<HTMLDivElement>(null);
  var [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    var el = ref.current;
    if (!el) return;
    var observer = new IntersectionObserver(
      function(entries: IntersectionObserverEntry[]) {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el as Element);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return function() { observer.disconnect(); };
  }, []);

  return (
    <div
      ref={ref}
      className={"transition-all duration-700 ease-out " + (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8") + " " + className}
    >
      {children}
    </div>
  );
}