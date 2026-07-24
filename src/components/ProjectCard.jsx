import useTilt from '../hooks/useTilt';

export default function ProjectCard({ project }) {
  const { ref, handleMove, handleLeave } = useTilt(6);

  return (
    <article
      ref={ref}
      className="project-card tilt-card glass"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="project-thumb">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-thumb-placeholder">
            <span>{project.title}</span>
            <small>Screenshot coming soon</small>
          </div>
        )}
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>

        <ul className="project-tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-actions">
          <a href={project.liveUrl} className="btn btn-primary project-btn" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href="https://github.com/sushilthakurkkr-creator/ChefX" className="btn btn-outline project-btn" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
