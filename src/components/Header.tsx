import { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import type { Theme } from '../hooks/useTheme';

const links = [
  ['About', '#about'],
  ['Signals', '#impact'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
  sectionsLoaded: boolean;
  onDeferredNavigate: (sectionId: string) => void;
};

export function Header({ theme, onToggleTheme, sectionsLoaded, onDeferredNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (visibleSection) setActiveSection(visibleSection.target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.2, 0.5, 1] });

    links.forEach(([, href]) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateScrollState);
    };
  }, [sectionsLoaded]);

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    const sectionId = href.slice(1);
    if (!document.getElementById(sectionId)) {
      event.preventDefault();
      onDeferredNavigate(sectionId);
    }
  };

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="wordmark" href="#home" aria-label="Soumya Negi home">
          SN<span>.</span>
        </a>
        <nav className={`main-nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined} onClick={(event) => handleNavigation(event, href)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" aria-current={activeSection === 'contact' ? 'location' : undefined} onClick={(event) => handleNavigation(event, '#contact')}>
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
