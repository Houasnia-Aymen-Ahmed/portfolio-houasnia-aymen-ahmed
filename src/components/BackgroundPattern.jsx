import React from "react";

const BackgroundPattern = ({ theme }) => {
    return (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100 to-slate-200 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 ">
            {/* Full background hexagon grid with random transparency */}
            <div className="absolute inset-0">
                {[...Array(200)].map((_, i) => {
                    const row = Math.floor(i / 20);
                    const col = i % 20;
                    const x = col * 60 + (row % 2) * 30;
                    const y = row * 52;

                    // Random opacity between 0 and 0.4 (more transparent)
                    const randomOpacity = Math.random() * 0.4;
                    // Random rotation between -15 and 15 degrees
                    const randomRotation = (Math.random() - 0.5) * 30;

                    return (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${x}px`,
                                top: `${y}px`,
                                width: "50px",
                                height: "43.3px",
                                background: theme === "dark"
                                    ? "linear-gradient(145deg, rgba(37, 99, 235, 0.3), rgba(29, 78, 216, 0.2))"
                                    : "linear-gradient(145deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.1))",
                                clipPath:
                                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                boxShadow: theme === "dark"
                                    ? "inset 0 0 8px rgba(59, 130, 246, 0.2)"
                                    : "inset 0 0 8px rgba(59, 130, 246, 0.1)",
                                opacity: randomOpacity,
                                transform: `rotate(${randomRotation}deg)`,
                                transition: "opacity 0.3s ease-in-out",
                            }}
                        />
                    );
                })}
            </div>

            {/* Border layer for 3D effect */}
            <div className="absolute inset-0">
                {[...Array(200)].map((_, i) => {
                    const row = Math.floor(i / 20);
                    const col = i % 20;
                    const x = col * 60 + (row % 2) * 30;
                    const y = row * 52;
                    const randomOpacity = Math.random() * 0.2;
                    const randomRotation = (Math.random() - 0.5) * 30;

                    return (
                        <div
                            key={`border-${i}`}
                            className="absolute"
                            style={{
                                left: `${x}px`,
                                top: `${y}px`,
                                width: "50px",
                                height: "43.3px",
                                background: "transparent",
                                clipPath:
                                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                border: theme === "dark"
                                    ? "1px solid rgba(59, 130, 246, 0.3)"
                                    : "1px solid rgba(59, 130, 246, 0.15)",
                                opacity: randomOpacity,
                                transform: `rotate(${randomRotation}deg)`,
                            }}
                        />
                    );
                })}
            </div>

            {/* Highlight layer for 3D effect */}
            <div className="absolute inset-0">
                {[...Array(200)].map((_, i) => {
                    const row = Math.floor(i / 20);
                    const col = i % 20;
                    const x = col * 60 + (row % 2) * 30;
                    const y = row * 52;
                    const randomOpacity = Math.random() * 0.1;
                    const randomRotation = (Math.random() - 0.5) * 30;

                    return (
                        <div
                            key={`highlight-${i}`}
                            className="absolute"
                            style={{
                                left: `${x}px`,
                                top: `${y}px`,
                                width: "50px",
                                height: "43.3px",
                                background: theme === "dark"
                                    ? "linear-gradient(145deg, rgba(255, 255, 255, 0.1), transparent)"
                                    : "linear-gradient(145deg, rgba(255, 255, 255, 0.05), transparent)",
                                clipPath:
                                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                opacity: randomOpacity,
                                transform: `rotate(${randomRotation}deg)`,
                            }}
                        />
                    );
                })}
            </div>

            {/* Connection dots for tech feel */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => {
                    const x = Math.random() * 100;
                    const y = Math.random() * 100;
                    const randomOpacity = Math.random() * 0.3;

                    return (
                        <div
                            key={`dot-${i}`}
                            className="absolute w-1 h-1 rounded-full"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                background: theme === "dark"
                                    ? "rgba(59, 130, 246, 0.6)"
                                    : "rgba(59, 130, 246, 0.3)",
                                opacity: randomOpacity,
                            }}
                        />
                    );
                })}
            </div>

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "20px 20px",
                }}
            />
        </div>
    );
};

export default BackgroundPattern;
