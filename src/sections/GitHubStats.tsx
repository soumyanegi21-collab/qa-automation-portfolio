import { FaCodeBranch, FaFolderOpen, FaGithub, FaStar } from 'react-icons/fa';
import { githubStats, profile } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const statIcons = [FaFolderOpen, FaStar, FaCodeBranch];

export function GitHubStats() {
  return (
    <section className="github-section section-shell" id="github">
      <div className="page-width">
        <SectionHeading eyebrow="OPEN SOURCE & PRACTICE" title="Built in the open." description="A snapshot of the experience and disciplines behind the work." />
        <div className="github-layout">
          <Reveal className="github-intro">
            <FaGithub className="github-mark" aria-hidden="true" />
            <h3>Code tells a story.</h3>
            <p>Explore automation patterns, test architecture, and the thinking behind a reliable quality practice.</p>
            <a className="button button-light" href={profile.github} target="_blank" rel="noreferrer">Visit GitHub <span>↗</span></a>
            <small className="github-handle">Profile: {profile.github.replace(/^https?:\/\//, '')}</small>
          </Reveal>
          <div className="stats-grid">
            {githubStats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
              <Reveal key={stat.label} delay={index * 0.1} className="github-stat">
                <span className="stat-icon"><Icon aria-hidden="true" /></span>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
                <i className="stat-rule" />
              </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
