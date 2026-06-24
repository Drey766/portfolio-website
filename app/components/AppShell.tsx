'use client';
import { useEffect, useRef, useState } from 'react';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Custom cursor
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      if (cursor2Ref.current) {
        setTimeout(() => {
          if (cursor2Ref.current) {
            cursor2Ref.current.style.left = e.clientX + 'px';
            cursor2Ref.current.style.top = e.clientY + 'px';
          }
        }, 80);
      }
    };

    // Hover effects on links/buttons
    const addHover = () => {
      cursorRef.current && (cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2)');
      cursor2Ref.current && (cursor2Ref.current.style.transform = 'translate(-50%,-50%) scale(0.5)');
    };
    const removeHover = () => {
      cursorRef.current && (cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)');
      cursor2Ref.current && (cursor2Ref.current.style.transform = 'translate(-50%,-50%) scale(1)');
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    // Loader: hide after 2.5s
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add('hidden');
      }
      document.body.classList.add('loaded');
      setLoaded(true);
    }, 2600);

    return () => {
      document.removeEventListener('mousemove', move);
      clearTimeout(timer);
    };
  }, []);

  // Intersection Observer for scroll reveals
  useEffect(() => {
    if (!loaded) return;
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  return (
    <>
      {/* Loader */}
      <div className="loader" ref={loaderRef}>
        <div className="loader-logo">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 20 80 L 50 20 L 80 80"
              stroke="#64ffda"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 30 60 L 70 60"
              stroke="#64ffda"
              strokeWidth="4"
              strokeLinecap="round"
              className="fill"
            />
            <text
              x="50" y="95"
              textAnchor="middle"
              fill="#64ffda"
              fontSize="10"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              className="fill"
            >
              AK
            </text>
          </svg>
        </div>
      </div>

      {/* Custom cursors */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor2" ref={cursor2Ref} />

      {children}
    </>
  );
}
