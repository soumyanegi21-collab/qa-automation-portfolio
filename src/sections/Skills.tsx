import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

export function Skills() {
  return (
    <section className="skills-section section-shell" id="skills">
      <div className="page-width">
        <SectionHeading eyebrow="MY TOOLKIT" title="The right tools. Better outcomes." description="A flexible quality toolkit for finding risk, proving behavior, and keeping delivery moving." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07, duration: 0.45 }}
              whileHover={{ y: -5 }}
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
                <motion.span initial={{ width: 0 }} whileInView={{ width: `${(group.skills.length / 4) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: index * 0.07, ease: 'easeOut' }} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
