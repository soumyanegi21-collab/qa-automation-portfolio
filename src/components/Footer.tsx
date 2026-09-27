import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <a className="footer-wordmark" href="#home">SN<span>.</span></a>
        <p>Thoughtful tests. Confident releases.</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#home" aria-label="Back to top"><FaArrowUp /></a>
        </div>
        <small>© {new Date().getFullYear()} Soumya Negi. Built with care.</small>
      </div>
    </footer>
  );
}
