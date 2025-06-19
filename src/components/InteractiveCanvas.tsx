
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  baseX: number;
  baseY: number;
}

const InteractiveCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class ParticleClass {
      x: number;
      y: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;

      constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = (200 - dist) / 200;

        if (dist < 200) {
          this.x -= dx * force * 0.05;
          this.y -= dy * force * 0.05;
        } else {
          this.x += (this.baseX - this.x) * 0.02;
          this.y += (this.baseY - this.y) * 0.02;
        }

        this.draw();
      }
    }

    const init = () => {
      particlesRef.current = [];
      const spacing = 50;
      for (let y = spacing; y < canvas.height; y += spacing) {
        for (let x = spacing; x < canvas.width; x += spacing) {
          particlesRef.current.push(new ParticleClass(x, y, 3, '#7C3AED'));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(p => p.update());
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default InteractiveCanvas;
