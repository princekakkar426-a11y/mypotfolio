import Reveal from './Reveal';
import { softSkills } from '../data/content';
import './SoftSkills.css';

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="section soft-skills">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">// 06 Beyond Code</p>
          <h2 className="section-title">Soft Skills</h2>
        </Reveal>

        <div className="soft-skills-grid">
          {softSkills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 4) + 1}>
              <div className="soft-skill-card glass">
                <span className="soft-skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
