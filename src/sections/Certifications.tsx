import { FaAward } from 'react-icons/fa';
import { certifications } from '../data/portfolio';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

export function Certifications() {
  return (
    <section className="certifications-section section-shell" id="certifications">
      <div className="page-width certification-layout">
        <SectionHeading eyebrow="CONTINUOUS LEARNING" title="Credentials & growth." description="Staying curious is part of doing quality work well." />
        <Reveal className="certification-panel">
          {certifications.length ? certifications.map((certification) => (
            <div className="certification-row" key={certification.label}>
              <span className="certification-icon"><FaAward aria-hidden="true" /></span>
              <span><small>{certification.label}</small><b>{certification.detail}</b></span>
              <span className="certification-status">{certification.status}</span>
            </div>
          )) : (
            <div className="certification-empty">
              <span className="certification-icon"><FaAward aria-hidden="true" /></span>
              <div><b>Certification details</b><p>Credential information has not been provided.</p></div>
              <span className="certification-status">DETAILS PENDING</span>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
