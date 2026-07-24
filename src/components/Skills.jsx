import { useState } from 'react';
import Reveal from './Reveal';
import useReveal from '../hooks/useReveal';
import { skills } from '../data/content';
import './Skills.css';

function SkillBar({ name, level, delay }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`skill-bar reveal reveal-delay-${delay}`}>
      <div className="skill-bar-head">
        <span>{name}</span>
        <span className="skill-bar-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ '--target': `${level}%` }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">// 03 Skills</p>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle">A growing toolkit, sharpened with every project.</p>
        </Reveal>

        <Reveal delay={1} className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-tab ${active === cat ? 'is-active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="skills-grid">
          {skills[active].map((skill, i) => (
            <SkillBar key={`${active}-${skill.name}`} {...skill} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
