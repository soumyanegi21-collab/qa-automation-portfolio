import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Certifications } from './Certifications';
import { Contact } from './Contact';
import { Experience } from './Experience';
import { GitHubStats } from './GitHubStats';
import { Projects } from './Projects';
import { Skills } from './Skills';

type DeferredSectionsProps = { pendingAnchor: string };

export default function DeferredSections({ pendingAnchor }: DeferredSectionsProps) {
  useEffect(() => {
    if (pendingAnchor) document.getElementById(pendingAnchor)?.scrollIntoView();
  }, [pendingAnchor]);

  return (
    <>
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <GitHubStats />
      <Contact />
      <Footer />
    </>
  );
}