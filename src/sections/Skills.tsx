import { skillGroups } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export function Skills() {
  return (
    <section className="skills-section section-shell" id="skills">
      <div className="page-width">
        <SectionHeading eyebrow="MY TOOLKIT" title="The right tools. Better outcomes." description="A flexible quality toolkit for finding risk, proving behavior, and keeping delivery moving." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal
              as="article"
              className="skill-card"
              key={group.title}
              delay={index * 0.07}
            >
              <div className="skill-card-top"><span className="skill-number">0{index + 1}</span><span className="skill-arrow" aria-hidden="true">↗</span></div>
              <h3>{group.title}</h3>
              <p>{group.detail}</p>
              <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              <div className="skill-meter-row">
                <span>TOOLKIT SIZE</span>
                <span>{group.skills.length} tools</span>
              </div>
              <div className="skill-meter" role="progressbar" aria-label={`${group.title} tools in toolkit`} aria-valuemin={0} aria-valuemax={4} aria-valuenow={group.skills.length}>
                <span style={{ width: `${(group.skills.length / 4) * 100}%` }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
