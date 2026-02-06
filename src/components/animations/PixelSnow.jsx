import React, { useEffect, useRef } from 'react';

const PixelSnow = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const particles = [];
        const particleCount = 100;
        const pixelSize = 4; // Size of each "pixel" snowflake

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: 1 + Math.random() * 2,
                opacity: 0.3 + Math.random() * 0.5,
                drift: Math.random() * 0.5 - 0.25
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#FFFFFF';
            particles.forEach(p => {
                ctx.globalAlpha = p.opacity;
                // Draw as a pixel (square)
                ctx.fillRect(
                    Math.floor(p.x / pixelSize) * pixelSize,
                    Math.floor(p.y / pixelSize) * pixelSize,
                    pixelSize,
                    pixelSize
                );

                p.y += p.speed;
                p.x += p.drift;

                if (p.y > canvas.height) {
                    p.y = -pixelSize;
                    p.x = Math.random() * canvas.width;
                }

                if (p.x > canvas.width) p.x = 0;
                if (p.x < 0) p.x = canvas.width;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{
                imageRendering: 'pixelated',
                opacity: 0.4
            }}
        />
    );
};

export default PixelSnow;
