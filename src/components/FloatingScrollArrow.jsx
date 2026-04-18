import { useEffect, useState } from 'react';
import { ArrowUp } from '@phosphor-icons/react';

export default function FloatingScrollArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 bottom-8 z-50 w-10 h-10 bg-yellow-400 hover:bg-yellow-300 text-red-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Go to top"
    >
      <ArrowUp size={20} weight="bold" />
    </button>
  );
}
