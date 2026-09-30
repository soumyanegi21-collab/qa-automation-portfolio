import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { BackgroundEffects } from './components/BackgroundEffects';
import { useTheme } from './hooks/useTheme';
import { About } from './sections/About';
import { Hero } from './sections/Hero';
import { Impact } from './sections/Impact';

const DeferredSections = lazy(() => import('./sections/DeferredSections'));

const deferredSectionIds = new Set(['skills', 'experience', 'projects', 'certifications', 'github', 'contact']);

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const deferredRef = useRef<HTMLDivElement>(null);
  const initialHash = window.location.hash.slice(1);
  const [sectionsLoaded, setSectionsLoaded] = useState(() => deferredSectionIds.has(initialHash));
  const [pendingAnchor, setPendingAnchor] = useState(() => deferredSectionIds.has(initialHash) ? initialHash : '');

  useEffect(() => {
    if (sectionsLoaded) return;

    const target = deferredRef.current;
    if (!target || !('IntersectionObserver' in window)) {
      setSectionsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSectionsLoaded(true);
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -120px 0px' });

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') setSectionsLoaded(true);
    };

    observer.observe(target);
    window.addEventListener('keydown', handleKeydown);
    return () => {
      observer.disconnect();
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [sectionsLoaded]);

  const handleDeferredNavigation = (sectionId: string) => {
    window.history.pushState(null, '', `#${sectionId}`);
    setPendingAnchor(sectionId);
    setSectionsLoaded(true);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <BackgroundEffects />
      <Header theme={theme} onToggleTheme={toggleTheme} sectionsLoaded={sectionsLoaded} onDeferredNavigate={handleDeferredNavigation} />
      <main id="main-content">
        <Hero />
        <About />
        <Impact />
        <div className="deferred-sections" ref={deferredRef}>
          {sectionsLoaded && (
            <Suspense fallback={<div className="deferred-sections-fallback" aria-hidden="true" />}>
              <DeferredSections pendingAnchor={pendingAnchor} />
            </Suspense>
          )}
        </div>
      </main>
    </>
  );
}
