import Reveal from './Reveal';
import StatCounter from './StatCounter';
import { stats } from '../data/content';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="eyebrow">// 01 About Me</p>
            <h2 className="section-title">
              Building interfaces people <span className="gradient-text">enjoy using</span>.
            </h2>
            <p className="about-text">
              I&apos;m a B.Tech Computer Science student who fell in love with the intersection of
              code and design — the moment a layout stops looking like a wireframe and starts
              feeling like a product. I spend my time crafting beautiful websites and interactive
              user experiences, obsessing over the small details that make an interface feel
              premium: spacing, motion, and the way a button responds when you hover it.
            </p>
            <p className="about-text">
              I&apos;m currently <strong>actively looking for internship opportunities</strong> in
              Frontend Development, Web Design, and UI/UX Design, where I can bring that same
              attention to detail to a real product team.
            </p>

            <div className="about-badges">
              <span className="about-badge">Frontend Development</span>
              <span className="about-badge">Web Design</span>
              <span className="about-badge">UI/UX Design</span>
            </div>
          </Reveal>

          <div className="about-stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) + 1}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
