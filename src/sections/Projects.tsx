import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { useRef } from 'react';
import type { PointerEvent } from 'react';
import { projects, profile } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

type ProjectVisualProps = { kind: string; number: string };

function ProjectVisual({ kind, number }: ProjectVisualProps) {
  const visualRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.transition = 'none';
    event.currentTarget.style.transform = `perspective(1000px) rotateX(${ -((event.clientY - bounds.top) / bounds.height - 0.5) * 5}deg) rotateY(${((event.clientX - bounds.left) / bounds.width - 0.5) * 7}deg)`;
  };

  const handlePointerLeave = () => {
    if (!visualRef.current) return;
    visualRef.current.style.transition = 'transform 180ms ease-out';
    visualRef.current.style.transform = 'perspective(1000px)';
  };

  return (
    <div
      ref={visualRef}
      className="project-visual-tilt"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={`project-visual visual-${kind}`} role="img" aria-label={`${kind} project interface illustration`}>
        <div className="preview-topbar"><span className="preview-logo">Q<span>.</span></span><span className="preview-route">/ workspace / {kind}</span><span className="preview-live"><i /> LIVE</span></div>
        <div className="preview-body">
          <div className="preview-sidebar"><i /><i /><i /><i /></div>
          <div className="preview-content">
            <div className="preview-heading"><span><small>TEST RUN / 0{number}</small><b>{kind === 'framework' ? 'Run overview' : kind === 'healthcare' ? 'Patient journey' : 'Payment flow'}</b></span><span className="preview-date">Today, 09:42</span></div>
            <div className="preview-metric-row"><div className="preview-metric"><small>PASSING</small><b>{kind === 'framework' ? '128' : kind === 'healthcare' ? '96.8%' : '99.2%'}</b><span>↑ stable</span></div><div className="preview-metric"><small>EXECUTION</small><b>{kind === 'framework' ? '02:14' : kind === 'healthcare' ? '340ms' : '184ms'}</b><span>within target</span></div></div>
            <div className="preview-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="preview-progress"><span /><span /><span /><span /><span /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="projects-section section-shell" id="projects">
      <div className="page-width">
        <SectionHeading eyebrow="SELECTED WORK" title="Quality you can see." description="A few ways I turn complex testing challenges into clear, repeatable confidence." />
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.number} className={`project-row${index % 2 ? ' project-row-reverse' : ''}`} delay={index * 0.06}>
              <ProjectVisual kind={project.visual} number={project.number} />
              <div className="project-info">
                <p className="project-category"><span>{project.number}</span> / {project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-features">{project.features.map((feature) => <span key={feature}><i>+</i>{feature}</span>)}</div>
                <div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                <div className="project-actions">
                  <a href={'repository' in project ? project.repository : profile.github} target="_blank" rel="noreferrer" className="text-link"><FaGithub aria-hidden="true" /> GitHub <span>↗</span></a>
                  <a href={`mailto:${profile.email}?subject=${encodeURIComponent(`Demo request: ${project.title}`)}`} className="text-link" title="Request a project demo by email">Live demo <FaArrowRight aria-hidden="true" /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
