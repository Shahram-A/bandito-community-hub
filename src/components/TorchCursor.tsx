
import { useEffect, useRef } from 'react';

const TorchCursor = () => {
  const torchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const torch = torchRef.current;
    if (!torch) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (torch) {
        torch.style.left = `${e.clientX}px`;
        torch.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={torchRef}
      className="fixed pointer-events-none z-[9998] w-[200px] h-[200px] transform -translate-x-1/2 -translate-y-1/2"
      style={{
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, rgba(124, 58, 237, 0.15) 30%, rgba(124, 58, 237, 0.05) 60%, transparent 100%)',
        borderRadius: '50%',
        filter: 'blur(2px)',
        mixBlendMode: 'multiply',
      }}
    />
  );
};

export default TorchCursor;
