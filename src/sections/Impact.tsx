import { animate, m, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { projects, skillGroups } from '../data/portfolio';
import { Reveal } from '../components/Reveal';

const technologyCount = skillGroups.reduce((total, group) => total + group.skills.length, 0);
const metrics = [
  { label: 'Years experience', value: 4, suffix: '+', detail: 'Quality engineering' },
  { label: 'Featured projects', value: projects.length, suffix: '', detail: 'Across healthcare & fintech' },
  { label: 'Automated tests', value: null, suffix: '', detail: 'Project metric pending' },
  { label: 'Technologies', value: technologyCount, suffix: '', detail: 'Across six skill groups' },
];

type CountUpProps = { value: number; suffix: string };

function CountUp({ value, suffix }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-24px' });
  const reducedMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: reducedMotion ? 0 : 1.25, ease: 'easeOut' });
    return controls.stop;
  }, [count, inView, reducedMotion, value]);

  return <span className="impact-value"><m.span ref={ref}>{rounded}</m.span>{suffix}</span>;
}

export function Impact() {
  return (
    <section className="impact-section section-shell" id="impact" aria-label="Experience metrics">
      <div className="page-width impact-grid">
        {metrics.map((metric, index) => (
          <Reveal className="impact-metric" key={metric.label} delay={index * 0.07}>
            <span className="impact-index">0{index + 1} / SIGNAL</span>
            {metric.value === null ? <span className="impact-value">--</span> : <CountUp value={metric.value} suffix={metric.suffix} />}
            <b>{metric.label}</b>
            <small>{metric.detail}</small>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
