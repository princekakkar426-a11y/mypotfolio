import { useMemo, useState } from 'react';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/content';
import './Projects.css';

export default function Projects() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], []);
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">// 04 Projects</p>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            Real products, built end-to-end — from wireframe to working code.
          </p>
        </Reveal>

        <Reveal delay={1} className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`skills-tab ${filter === cat ? 'is-active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="projects-grid">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 4) + 1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-more">
          <p>
            More projects are on the way — check back soon, or visit my{' '}
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="gradient-text">
              GitHub
            </a>{' '}
            for work in progress.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
