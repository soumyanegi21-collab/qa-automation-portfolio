import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaBolt, FaCloud, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSelenium, SiTypescript } from 'react-icons/si';
import { profile } from '../data/portfolio';
import { Magnetic } from '../components/Magnetic';
import { useTypewriter } from '../hooks/useTypewriter';

const rolePhrases = [
  'QA Automation Engineer',
  'Playwright Specialist',
  'SDET',
  'API Testing Expert',
  'Quality Engineer',
];

export function Hero() {
  const animatedRole = useTypewriter(rolePhrases);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 80, damping: 22 });
  const y = useSpring(rawY, { stiffness: 80, damping: 22 });
  const rotateX = useSpring(rawRotateX, { stiffness: 90, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 90, damping: 22 });
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid page-width">
        <div className="hero-copy">
          <motion.p className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <span className="status-pulse" /> QUALITY, BUILT IN
          </motion.p>
          <motion.p className="hero-intro" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>Hello, I'm</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.65 }}>
            Soumya <span>Negi</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>{profile.role}</motion.h2>
          <p className="role-cycle"><span aria-hidden="true">&gt;_</span> {animatedRole}<i aria-hidden="true" /></p>
          <motion.p className="hero-summary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }}>{profile.summary}</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Magnetic><a className="button button-primary" href="#contact">Let's connect <FaArrowRight aria-hidden="true" /></a></Magnetic>
            <Magnetic><a className="button button-outline" href={`${import.meta.env.BASE_URL}soumya-negi-resume.txt`} download>Download resume <FaArrowDown aria-hidden="true" /></a></Magnetic>
          </motion.div>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub <span>↗</span></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn <span>↗</span></a>
          </div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          style={{ x, y, rotateX, rotateY, transformPerspective: 1100 }}
          onPointerMove={(event) => {
            if (event.pointerType !== 'mouse' || reducedMotion) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
            const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
            rawX.set(-horizontal * 8);
            rawY.set(-vertical * 6);
            rawRotateX.set(vertical * 2.5);
            rawRotateY.set(horizontal * 3.5);
          }}
          onPointerLeave={() => { rawX.set(0); rawY.set(0); rawRotateX.set(0); rawRotateY.set(0); }}
          aria-label="Illustration of an automated quality dashboard"
          role="img"
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="dashboard-window">
            <div className="window-bar"><span /><span /><span /><p>quality-pulse.ts</p><span className="window-lock">●</span></div>
            <div className="window-body">
              <div className="code-line"><span>01</span><code><b>describe</b>(<i>'release confidence'</i>, () =&gt; {'{'}</code></div>
              <div className="code-line"><span>02</span><code>&nbsp; <b>test</b>(<i>'critical flows'</i>, <em>async</em> () =&gt; {'{'}</code></div>
              <div className="code-line"><span>03</span><code>&nbsp;&nbsp;&nbsp; <b>await</b> page.goto(<i>'/checkout'</i>)</code></div>
              <div className="code-line"><span>04</span><code>&nbsp;&nbsp;&nbsp; <b>expect</b>(payment).toBeVisible()</code></div>
              <div className="code-line"><span>05</span><code>&nbsp; {'}'})</code></div>
              <div className="code-line"><span>06</span><code>{'}'} )</code></div>
              <div className="terminal-status"><span className="status-check">✓</span><span>Pipeline passed</span><small>just now</small></div>
            </div>
          </div>
          <div className="floating-metric metric-top"><span className="metric-mark">↗</span><span><b>4+</b><small>years in QA</small></span></div>
          <div className="floating-metric metric-bottom"><div className="metric-bars"><i /><i /><i /><i /><i /><i /><i /></div><span><b>Quality</b><small>at every layer</small></span></div>
          <div className="profile-orbit" aria-hidden="true">
            <div className="profile-ring" />
            <div className="profile-avatar"><span>SN</span><small>QA / SDET</small></div>
            <span className="orbit-tech orbit-tech-playwright"><FaBolt /></span>
            <span className="orbit-tech orbit-tech-selenium"><SiSelenium /></span>
            <span className="orbit-tech orbit-tech-typescript"><SiTypescript /></span>
            <span className="orbit-tech orbit-tech-github"><FaGithub /></span>
            <span className="orbit-tech orbit-tech-aws"><FaCloud /></span>
          </div>
          <span className="visual-index">01 — 09</span>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i /></a>
    </section>
  );
}
