import { motion } from 'framer-motion';

const MarqueeGallery = ({ children, speed = 50, direction = 'right', pauseOnHover = true }) => {
    const containerVariants = {
        animate: {
            x: direction === 'left' ? [0, -1000] : [-1000, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: speed,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="overflow-hidden whitespace-nowrap relative w-full py-10">
            {/* Decorative gradients to fade the edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFCFB] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDFCFB] to-transparent z-10 pointer-events-none"></div>

            <motion.div
                className="flex gap-8 w-max"
                variants={containerVariants}
                animate="animate"
                whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
            >
                {/* We duplicate children multiple times to ensure seamless looping */}
                {children}
                {children}
                {children}
                {children}
            </motion.div>

            <style>{`
        .w-max { width: max-content; }
      `}</style>
        </div>
    );
};

export default MarqueeGallery;
