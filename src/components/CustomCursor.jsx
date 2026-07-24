import { useEffect, useRef } from 'react';
import './CustomCursor.css';

/**
 * Renders a two-part custom cursor (dot + trailing ring) and a
 * radial "spotlight" that follows the pointer across dark sections.
 * Automatically disables itself on touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return undefined;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let raf;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(79,140,255,0.06), transparent 40%)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    const handleOver = (e) => {
      const interactive = e.target.closest('a, button, .tilt-card, input, textarea, .cursor-grow');
      ringRef.current?.classList.toggle('cursor-hover', Boolean(interactive));
      dotRef.current?.classList.toggle('cursor-hover', Boolean(interactive));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={spotlightRef} className="mouse-spotlight" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
