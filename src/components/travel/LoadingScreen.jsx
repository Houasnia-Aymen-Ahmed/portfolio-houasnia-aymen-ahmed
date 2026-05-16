import { useState, useEffect } from "react";

export default function LoadingScreen({ onReady }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervals = [
      setTimeout(() => setProgress(30), 200),
      setTimeout(() => setProgress(65), 500),
      setTimeout(() => setProgress(90), 900),
      setTimeout(() => setProgress(100), 1200),
      setTimeout(() => {
        setVisible(false);
        onReady?.();
      }, 1600),
    ];
    return () => intervals.forEach(clearTimeout);
  }, [onReady]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "#050510" }}
    >
      <div className="text-center space-y-6">
        <div className="text-cyan-400 text-5xl font-mono font-bold tracking-widest animate-pulse">
          ▲
        </div>
        <div className="text-white font-mono text-xl tracking-[0.2em]">
          AYMEN&apos;S WORLD
        </div>
        <div className="text-cyan-400/50 font-mono text-xs tracking-[0.3em] uppercase">
          Loading interactive experience
        </div>

        {/* Progress bar */}
        <div className="w-64 h-[2px] bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #64ffda, #a78bfa)",
              boxShadow: "0 0 8px #64ffda",
            }}
          />
        </div>

        <div className="text-cyan-400/30 font-mono text-xs">
          {progress < 100 ? `${progress}%` : "READY"}
        </div>

        <div className="text-gray-500 font-mono text-xs mt-4 space-y-1">
          <p>Use <span className="text-cyan-400">WASD</span> or <span className="text-cyan-400">Arrow Keys</span> to drive</p>
          <p>Explore the world to discover portfolio sections</p>
        </div>
      </div>
    </div>
  );
}
