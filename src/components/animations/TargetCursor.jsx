import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TargetCursor = () => {
    const cursorRef = useRef(null);
    const ringRef = useRef(null);
    const dotRef = useRef(null);
    const rotationRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const ring = ringRef.current;
        const dot = dotRef.current;

        // 1. Continuous Rotation Animation
        rotationRef.current = gsap.to(ring, {
            rotation: "+=360",
            duration: 4,
            ease: "none",
            repeat: -1
        });

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
            });

            gsap.to(ring, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out"
            });

            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.05,
            });
        };

        // 2. Auto Focus Logic for Buttons
        const handleMouseEnter = (e) => {
            // Expand ring
            gsap.to(ring, {
                scale: 1.8,
                borderColor: "#FFD700",
                duration: 0.3,
                ease: "back.out(1.7)"
            });

            // Pulse dot
            gsap.to(dot, {
                scale: 1.5,
                backgroundColor: "#FFD700",
                duration: 0.2
            });

            // Speed up rotation on focus
            gsap.to(rotationRef.current, { timeScale: 4, duration: 0.5 });
        };

        const handleMouseLeave = () => {
            gsap.to(ring, {
                scale: 1,
                borderColor: "#00FF41",
                duration: 0.3
            });
            gsap.to(dot, {
                scale: 1,
                backgroundColor: "#00FF41",
                duration: 0.2
            });

            // Reset rotation speed
            gsap.to(rotationRef.current, { timeScale: 1, duration: 0.5 });
        };

        const attachListeners = () => {
            const interactables = document.querySelectorAll('button, a, .pixel-button');
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter); // Prevent duplicate listeners
                el.removeEventListener('mouseleave', handleMouseLeave); // Prevent duplicate listeners
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
                // Force none cursor on elements too
                el.style.cursor = 'none';
            });
        };

        const handleMouseDown = () => {
            gsap.to(ring, { scale: 0.7, duration: 0.2 });
        };

        const handleMouseUp = () => {
            gsap.to(ring, { scale: 1.2, duration: 0.2 });
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        attachListeners();

        // Re-attach if DOM changes (optional but good for dynamic content)
        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            observer.disconnect();
            document.body.style.cursor = 'auto';

            // Clean up interactable element cursors and listeners
            const interactables = document.querySelectorAll('button, a, .pixel-button');
            interactables.forEach(el => {
                el.style.cursor = 'auto'; // Reset cursor
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
            {/* Main Crosshair Container */}
            <div ref={cursorRef} className="absolute -translate-x-1/2 -translate-y-1/2">
                {/* Crosshair Lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[2px] bg-[#00FF41]/40 shadow-[0_0_8px_#00FF41]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-[2px] bg-[#00FF41]/40 shadow-[0_0_8px_#00FF41]" />
            </div>

            {/* Lagging Ring */}
            <div
                ref={ringRef}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-2 border-[#00FF41] rounded-none rotate-45"
                style={{
                    boxShadow: '0 0 10px rgba(0,255,65,0.5)',
                    imageRendering: 'pixelated'
                }}
            >
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#00FF41]" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#00FF41]" />
            </div>

            {/* Center Dot */}
            <div
                ref={dotRef}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#00FF41] shadow-[0_0_5px_#00FF41]"
            />
        </div>
    );
};

export default TargetCursor;
