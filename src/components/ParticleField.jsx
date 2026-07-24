import { useEffect, useRef } from 'react';
import './ParticleField.css';

/**
 * Lightweight canvas particle field — small dots that drift slowly
 * and connect with faint lines when close together. Pauses when the
 * tab is hidden and respects prefers-reduced-motion.
 */
export default function ParticleField({ density = 60 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width;
    let height;
    let particles = [];
    let animationId;
    let visible = true;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };

    const initParticles = () => {
      const count = Math.min(density, Math.floor((width * height) / 60000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const step = () => {
      if (!visible) {
        animationId = requestAnimationFrame(step);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(184, 192, 204, 0.55)';
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 130 * devicePixelRatio) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(79, 140, 255, ${0.12 * (1 - dist / (130 * devicePixelRatio))})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(step);
    };

    const handleVisibility = () => {
      visible = document.visibilityState === 'visible';
    };

    resize();
    initParticles();
    if (!prefersReducedMotion) {
      animationId = requestAnimationFrame(step);
    }

    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [density]);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
