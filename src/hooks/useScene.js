import { useEffect } from 'react';

// Басты экран көрінбей тұрғанда барлық анимацияны тоқтатады: төменгі бөлімдерде скролл жеңіл болады.
export function usePauseOffscreen(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => el.classList.toggle('paused', !e.isIntersecting), { rootMargin: '80px' });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
}
