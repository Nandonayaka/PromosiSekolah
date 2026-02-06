import { motion } from 'framer-motion';

const DecayCard = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default DecayCard;
