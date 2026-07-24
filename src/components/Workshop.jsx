import Reveal from './Reveal';
import { workshop } from '../data/content';
import './Workshop.css';

export default function Workshop() {
  return (
    <section id="workshop" className="section workshop">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">// 05 Workshop</p>
          <h2 className="section-title">Certifications &amp; Training</h2>
        </Reveal>

        <Reveal delay={1} className="certificate-card glass">
          <div className="certificate-ribbon">Certified</div>
          <div className="certificate-badge">🎓</div>
          <div className="certificate-body">
            <h3>{workshop.title}</h3>
            <p className="certificate-meta">
              {workshop.duration} &middot; {workshop.organizer}
            </p>
            <p className="certificate-desc">{workshop.description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
