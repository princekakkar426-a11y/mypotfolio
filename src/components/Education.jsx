import Reveal from './Reveal';
import { education } from '../data/content';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">// 02 Education</p>
          <h2 className="section-title">Academic Timeline</h2>
          <p className="section-subtitle">The path that got me here.</p>
        </Reveal>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={(i % 4) + 1} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card glass">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-degree">{item.degree}</h3>
                <p className="timeline-school">{item.school}</p>
                <p className="timeline-detail">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
