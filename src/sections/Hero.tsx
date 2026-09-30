import { useRef } from 'react';
import type { PointerEvent } from 'react';
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
  const visualRef = useRef<HTMLDivElement>(null);

  const handleVisualPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.transform = `perspective(1100px) translate3d(${-horizontal * 8}px, ${-vertical * 6}px, 0) rotateX(${vertical * 2.5}deg) rotateY(${horizontal * 3.5}deg)`;
  };

  const handleVisualPointerLeave = () => {
    if (!visualRef.current) return;
    visualRef.current.style.transition = 'transform 180ms ease-out';
    visualRef.current.style.transform = 'perspective(1100px)';
  };

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid page-width">
        <div className="hero-copy">
          <p className="availability">
            <span className="status-pulse" /> QUALITY, BUILT IN
          </p>
          <p className="hero-intro">Hello, I'm</p>
          <h1>
            Soumya <span>Negi</span>
          </h1>
          <h2>{profile.role}</h2>
          <p className="role-cycle"><span aria-hidden="true">&gt;_</span> {animatedRole}<i aria-hidden="true" /></p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Magnetic><a className="button button-primary" href="#contact">Let's connect <FaArrowRight aria-hidden="true" /></a></Magnetic>
            <Magnetic><a className="button button-outline" href={`${import.meta.env.BASE_URL}soumya-negi-resume.pdf`} download>Download resume <FaArrowDown aria-hidden="true" /></a></Magnetic>
          </div>
          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub <span>↗</span></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn <span>↗</span></a>
          </div>
        </div>
        <div
          ref={visualRef}
          className="hero-visual"
          onPointerMove={handleVisualPointerMove}
          onPointerLeave={handleVisualPointerLeave}
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
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i /></a>
    </section>
  );
}
