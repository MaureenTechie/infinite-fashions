"use client";

import {motion} from "framer-motion";

const butterflies = [...Array(20)];

export default function ButterflyBackground() {
    return(
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {butterflies.map((_, i) => (
                <motion.img
                key={i}
                src="/butterflies/butterfly.svg"
                alt="Butterfly"
                className="absolute opacity-25 dark:opacity-40"
                style={{
                    width: `${20 + Math.random() * 40}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    x: [0, 80, -50, 0],
                    y: [0, -120, 60, 0],
                    rotate: [0, 15, -15, 0],
                }}
                transition={{
                    duration: 15 + Math.random() * 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                />
            ))}
        </div>
    );
}