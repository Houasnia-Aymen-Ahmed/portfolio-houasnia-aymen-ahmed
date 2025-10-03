import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedSection = ({
    children,
    className = "",
    variants = null,
    staggerChildren = 0,
    threshold = 0.2,
    triggerOnce = true,
}) => {
    const shouldReduceMotion = useReducedMotion();

    const defaultVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                ...(staggerChildren > 0 && { staggerChildren }),
            },
        },
    };

    const activeVariants = variants || defaultVariants;

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: triggerOnce, amount: threshold }}
            variants={activeVariants}
        >
            {children}
        </motion.div>
    );
};

AnimatedSection.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variants: PropTypes.object,
    staggerChildren: PropTypes.number,
    threshold: PropTypes.number,
    triggerOnce: PropTypes.bool,
};

export default AnimatedSection;
