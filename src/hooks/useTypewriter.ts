import { useEffect, useState } from 'react';

export function useTypewriter(phrases: string[]) {
  const [text, setText] = useState(phrases[0] ?? '');

  useEffect(() => {
    if (!phrases.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(phrases[0]);
      return;
    }

    let phraseIndex = 0;
    let characterIndex = phrases[0].length;
    let deleting = false;
    let timeout = 0;

    const tick = () => {
      const phrase = phrases[phraseIndex];
      if (!deleting) {
        characterIndex += 1;
        setText(phrase.slice(0, characterIndex));
        if (characterIndex >= phrase.length) {
          deleting = true;
          timeout = window.setTimeout(tick, 1250);
          return;
        }
      } else {
        characterIndex -= 1;
        setText(phrase.slice(0, characterIndex));
        if (characterIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeout = window.setTimeout(tick, 300);
          return;
        }
      }
      timeout = window.setTimeout(tick, deleting ? 32 : 68);
    };

    timeout = window.setTimeout(tick, 1350);
    return () => window.clearTimeout(timeout);
  }, [phrases]);

  return text;
}
