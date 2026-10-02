
import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
};

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const isMobile = window.innerWidth < 768;

    const config = {
      particleCount: isMobile ? 45 : 85,
      connectionDistance: isMobile ? 115 : 145,
      mouseDistance: 180,
      maxSpeed: 0.28,
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,

      vx:
        (Math.random() - 0.5) *
        config.maxSpeed,

      vy:
        (Math.random() - 0.5) *
        config.maxSpeed,

      radius:
        Math.random() * 1.4 + 0.5,

      opacity:
        Math.random() * 0.45 + 0.25,

      pulse: Math.random() * Math.PI * 2,

      pulseSpeed:
        Math.random() * 0.015 + 0.005,
    });

    const createParticles = () => {
      particles = Array.from(
        { length: config.particleCount },
        createParticle,
      );
    };

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        width,
        height,
      );

      gradient.addColorStop(0, '#050914');
      gradient.addColorStop(0.45, '#071426');
      gradient.addColorStop(1, '#030711');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Indigo atmosphere
      const glowOne = ctx.createRadialGradient(
        width * 0.15,
        height * 0.2,
        0,
        width * 0.15,
        height * 0.2,
        width * 0.45,
      );

      glowOne.addColorStop(
        0,
        'rgba(59, 130, 246, 0.12)',
      );

      glowOne.addColorStop(
        1,
        'rgba(59, 130, 246, 0)',
      );

      ctx.fillStyle = glowOne;
      ctx.fillRect(0, 0, width, height);

      // Purple atmosphere
      const glowTwo = ctx.createRadialGradient(
        width * 0.85,
        height * 0.75,
        0,
        width * 0.85,
        height * 0.75,
        width * 0.4,
      );

      glowTwo.addColorStop(
        0,
        'rgba(99, 102, 241, 0.10)',
      );

      glowTwo.addColorStop(
        1,
        'rgba(99, 102, 241, 0)',
      );

      ctx.fillStyle = glowTwo;
      ctx.fillRect(0, 0, width, height);
    };

    const drawGrid = () => {
      const gridSize = 70;

      ctx.beginPath();

      for (
        let x = 0;
        x <= width;
        x += gridSize
      ) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      for (
        let y = 0;
        y <= height;
        y += gridSize
      ) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      ctx.strokeStyle =
        'rgba(148, 163, 184, 0.025)';

      ctx.lineWidth = 1;

      ctx.stroke();
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const other = particles[j];

          const dx = particle.x - other.x;
          const dy = particle.y - other.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy,
          );

          if (
            distance >
            config.connectionDistance
          ) {
            continue;
          }

          const opacity =
            (1 -
              distance /
                config.connectionDistance) *
            0.22;

          const gradient =
            ctx.createLinearGradient(
              particle.x,
              particle.y,
              other.x,
              other.y,
            );

          gradient.addColorStop(
            0,
            `rgba(148, 163, 184, ${opacity})`,
          );

          gradient.addColorStop(
            0.5,
            `rgba(96, 165, 250, ${opacity * 1.3})`,
          );

          gradient.addColorStop(
            1,
            `rgba(148, 163, 184, ${opacity})`,
          );

          ctx.beginPath();

          ctx.moveTo(
            particle.x,
            particle.y,
          );

          ctx.lineTo(
            other.x,
            other.y,
          );

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.65;

          ctx.stroke();
        }
      }
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        particle.pulse += particle.pulseSpeed;

        const pulse =
          Math.sin(particle.pulse) * 0.25 +
          0.75;

        // Mouse interaction
        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy,
          );

          if (
            distance <
            config.mouseDistance
          ) {
            const force =
              (1 - distance / config.mouseDistance) *
              0.015;

            particle.vx += dx * force;
            particle.vy += dy * force;
          }
        }

        // Limit speed
        particle.vx = Math.max(
          -config.maxSpeed,
          Math.min(
            config.maxSpeed,
            particle.vx,
          ),
        );

        particle.vy = Math.max(
          -config.maxSpeed,
          Math.min(
            config.maxSpeed,
            particle.vy,
          ),
        );

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < -20) {
          particle.x = width + 20;
        }

        if (particle.x > width + 20) {
          particle.x = -20;
        }

        if (particle.y < -20) {
          particle.y = height + 20;
        }

        if (particle.y > height + 20) {
          particle.y = -20;
        }

        // Outer glow
        const glowRadius =
          particle.radius * 6;

        const glow =
          ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            glowRadius,
          );

        glow.addColorStop(
          0,
          `rgba(96, 165, 250, ${
            0.16 * pulse
          })`,
        );

        glow.addColorStop(
          1,
          'rgba(96, 165, 250, 0)',
        );

        ctx.fillStyle = glow;

        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          glowRadius,
          0,
          Math.PI * 2,
        );

        ctx.fill();

        // Main node
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
        );

        ctx.fillStyle = `rgba(226, 232, 240, ${
          particle.opacity * pulse
        })`;

        ctx.fill();
      });
    };

    const drawMouseGlow = () => {
      if (!mouse.active) return;

      const glow =
        ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          180,
        );

      glow.addColorStop(
        0,
        'rgba(59, 130, 246, 0.06)',
      );

      glow.addColorStop(
        0.5,
        'rgba(99, 102, 241, 0.025)',
      );

      glow.addColorStop(
        1,
        'rgba(99, 102, 241, 0)',
      );

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        mouse.x,
        mouse.y,
        180,
        0,
        Math.PI * 2,
      );

      ctx.fill();
    };

    const animate = () => {
      drawBackground();
      drawGrid();
      drawMouseGlow();
      drawConnections();
      drawParticles();

      animationFrame =
        requestAnimationFrame(animate);
    };

    const handleMouseMove = (
      event: MouseEvent,
    ) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    resize();
    createParticles();
    animate();

    window.addEventListener(
      'resize',
      resize,
    );

    window.addEventListener(
      'mousemove',
      handleMouseMove,
    );

    window.addEventListener(
      'mouseleave',
      handleMouseLeave,
    );

    return () => {
      cancelAnimationFrame(
        animationFrame,
      );

      window.removeEventListener(
        'resize',
        resize,
      );

      window.removeEventListener(
        'mousemove',
        handleMouseMove,
      );

      window.removeEventListener(
        'mouseleave',
        handleMouseLeave,
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="network-background"
    />
  );
}
