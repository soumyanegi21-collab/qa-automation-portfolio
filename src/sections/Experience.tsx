import { experience } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Experience() {
  return (
    <section className="experience-section section-shell" id="experience">
      <div className="page-width">
        <SectionHeading eyebrow="HOW I WORK" title="From test strategy to signal." description="A connected approach to quality, built around the way real teams deliver." />
        <div className="timeline">
          <div className="timeline-progress" aria-hidden="true" />
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1} className="timeline-item">
              <div className="timeline-marker"><span>0{index + 1}</span></div>
              <div className="timeline-content">
                <div className="timeline-topline"><span>{item.period}</span><span>QUALITY ENGINEERING</span></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="timeline-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="timeline-note">Experience overview · {experience.length} connected focus areas · Healthcare &amp; fintech</p>
      </div>
    </section>
  );
}
