import { useEffect, useRef } from 'react';
import ParticleField from './ParticleField';
import MagneticButton from './MagneticButton';
import Reveal from './Reveal';
import useTypingEffect from '../hooks/useTypingEffect';
import { profile } from '../data/content';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const typed = useTypingEffect(profile.roles);
  const blobRef = useRef(null);
  const cardRef = useRef(null);

  // Mouse parallax on the floating profile card + blob
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return undefined;

    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      if (cardRef.current) {
        cardRef.current.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(0)`;
      }
      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${x * 24}px, ${y * 24}px)`;
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="home" className="hero">
      <ParticleField density={70} />
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow">// hello world</Reveal>
          <Reveal as="h1" delay={1} className="hero-title">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </Reveal>
          <Reveal as="p" delay={2} className="hero-role">
            <span className="hero-role-typed">{typed}</span>
            <span className="hero-caret" aria-hidden="true" />
          </Reveal>
          <Reveal as="p" delay={3} className="hero-desc">{profile.objective}</Reveal>

          <Reveal delay={4} className="hero-actions">
            <MagneticButton as="a" href={profile.resumeUrl} download className="btn btn-primary">
              Download Resume
            </MagneticButton>
            <MagneticButton as="a" href="#contact" className="btn btn-outline">
              Hire Me
            </MagneticButton>
            <MagneticButton as="a" href="#contact" className="btn btn-outline">
              Let&apos;s Connect
            </MagneticButton>
          </Reveal>
        </div>

        <Reveal delay={2} className="hero-visual">
          <div ref={blobRef} className="hero-blob" aria-hidden="true" />
          <div ref={cardRef} className="hero-photo-card">
            <div className="hero-photo-ring">
              <div className="hero-photo-frame">
                <img src={profileImg} alt="Sushil Kumar" className="hero-photo-img" />
              </div>
            </div>
            <div className="hero-status glass">
              <span className="status-dot" /> Open to internships
            </div>
            <div className="hero-tag hero-tag-top glass">Websites</div>
            <div className="hero-tag hero-tag-bottom glass">UI/UX</div>
          </div>
        </Reveal>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <span className="scroll-indicator-track">
          <span className="scroll-indicator-dot" />
        </span>
        Scroll
      </a>
    </section>
  );
}
