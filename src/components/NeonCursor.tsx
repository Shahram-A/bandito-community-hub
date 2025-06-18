
import { useEffect, useRef } from 'react';

const NeonCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const ease = 0.12;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = currentX + 'px';
        cursorRef.current.style.top = currentY + 'px';
      }
      
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="neon-follower" />;
};

export default NeonCursor;
