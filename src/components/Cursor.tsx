import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onMouseEnter = () => {
      if (dotRef.current) dotRef.current.classList.add('hovering');
      if (ringRef.current) ringRef.current.classList.add('hovering');
    };
    
    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.classList.remove('hovering');
      if (ringRef.current) ringRef.current.classList.remove('hovering');
    };

    const attachListeners = () => {
      const links = document.querySelectorAll('a, button');
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);
        link.addEventListener('mouseenter', onMouseEnter);
        link.addEventListener('mouseleave', onMouseLeave);
      });
    };

    attachListeners();
    window.addEventListener('mousemove', onMouseMove);

    const observer = new MutationObserver(() => {
       attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      const links = document.querySelectorAll('a, button');
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
    </>
  );
}
