import { FaHeartbeat, FaShieldAlt, FaSlidersH } from 'react-icons/fa';
import { profile } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const strengths = [
  { icon: FaShieldAlt, label: 'Quality strategy', text: 'Risk-led, user-focused coverage' },
  { icon: FaSlidersH, label: 'Test engineering', text: 'Maintainable UI and API automation' },
  { icon: FaHeartbeat, label: 'Domain context', text: 'Healthcare and fintech workflows' },
];

export function About() {
  return (
    <section className="about-section section-shell" id="about">
      <div className="page-width">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Quality is a team sport." description="Thoughtful testing connects product intent to the confidence to ship." />
        <div className="about-layout">
          <Reveal className="about-copy">
            <p className="about-lead">I help teams find the important risks early, build the right checks around them, and keep feedback close to the work.</p>
            <p>Over {profile.experience}, I have worked across the testing lifecycle: from functional and regression testing to automated browser, API, and SQL validation. I bring a practical mindset to complex systems and a steady focus on the people who use them.</p>
            <div className="about-stat"><span className="stat-number">4<span>+</span></span><span>years building<br />release confidence</span></div>
          </Reveal>
          <div className="strength-list">
            {strengths.map(({ icon: Icon, label, text }, index) => (
              <Reveal key={label} delay={index * 0.09} className="strength-row">
                <span className="strength-icon"><Icon aria-hidden="true" /></span>
                <span className="strength-text"><b>{label}</b><small>{text}</small></span>
                <span className="strength-arrow" aria-hidden="true">↗</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
