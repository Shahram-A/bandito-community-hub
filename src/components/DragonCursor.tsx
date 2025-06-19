
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DragonCursor = () => {
  const dragonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dragon = dragonRef.current;
    if (!dragon) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(dragon, {
        duration: 0.5,
        x: e.clientX - 50,
        y: e.clientY - 50,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dragonRef}
      className="fixed pointer-events-none z-[9999] w-[100px] h-[100px]"
      style={{
        filter: 'drop-shadow(0 0 10px cyan)',
        left: 0,
        top: 0,
      }}
    >
      {/* Dragon SVG */}
      <svg width="100" height="100" viewBox="0 0 64 64" fill="cyan" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 2C30 5 20 10 10 18C5 22 2 30 5 36C7 42 14 45 19 45C17 49 18 54 21 58C28 56 30 50 31 45C34 46 37 46 40 44C45 48 49 48 54 42C52 38 49 34 46 33C48 28 46 22 43 19C41 16 38 14 34 14C35 11 34 8 32 6C34 5 36 4 38 3C36 3 34 2 32 2Z" />
      </svg>
    </div>
  );
};

export default DragonCursor;
