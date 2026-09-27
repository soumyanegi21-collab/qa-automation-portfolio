import { MotionConfig } from 'framer-motion';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { BackgroundEffects } from './components/BackgroundEffects';
import { useTheme } from './hooks/useTheme';
import { About } from './sections/About';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { GitHubStats } from './sections/GitHubStats';
import { Hero } from './sections/Hero';
import { Impact } from './sections/Impact';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <BackgroundEffects />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Impact />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
