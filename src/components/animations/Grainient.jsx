import { useRef, useEffect } from "react";

const Grainient = ({
    colors = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"],
    speed = 0.02,
    noiseOpacity = 0.03,
    className = ""
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        let particles = colors.map((color) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * speed * 150,
            vy: (Math.random() - 0.5) * speed * 150,
            color,
            radius: Math.random() * 600 + 400
        }));

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "screen";

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -p.radius) p.x = canvas.width + p.radius;
                if (p.x > canvas.width + p.radius) p.x = -p.radius;
                if (p.y < -p.radius) p.y = canvas.height + p.radius;
                if (p.y > canvas.height + p.radius) p.y = -p.radius;

                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                grad.addColorStop(0, p.color + "66"); // Add some transparency
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [colors, speed]);

    return (
        <div className={`fixed inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}>
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full filter blur-[100px]" />
            <div
                className="absolute inset-0"
                style={{
                    opacity: noiseOpacity > 1 ? noiseOpacity / 100 : noiseOpacity,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default Grainient;
