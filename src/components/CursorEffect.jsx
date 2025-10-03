import React, { useEffect, useRef, useState } from "react";

const CursorEffect = () => {
    const [reducePageLoadMotion, setReducePageLoadMotion] = useState(false);
    const followerRef = useRef(null);

    useEffect(() => {
        setReducePageLoadMotion(
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        );
    }, []);

    // Blurred glow effect that follows default cursor
    useEffect(() => {
        if (reducePageLoadMotion) {
            return;
        }

        const glow = followerRef.current;

        if (!glow) {
            return;
        }

        const handleMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            // Center the glow exactly on the cursor position
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        };

        document.addEventListener("mousemove", handleMove);

        return () => {
            document.removeEventListener("mousemove", handleMove);
        };
    }, [reducePageLoadMotion]);

    if (reducePageLoadMotion) {
        return null;
    }

    return (
        <div
            ref={followerRef}
            className="fixed pointer-events-none z-[99999] w-[120px] h-[120px] rounded-full"
            style={{
                background:
                    "radial-gradient(circle, rgba(51, 65, 85, 0.9) 0%, rgba(51, 65, 85, 0.6) 30%, rgba(51, 65, 85, 0.3) 60%, transparent 80%)",
                transform: "translate(-50%, -50%)",
                left: "0px",
                top: "0px",
                filter: "blur(20px)",
                mixBlendMode: "screen",
                opacity: "1",
            }}
        />
    );
};

export default CursorEffect;
