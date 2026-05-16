import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function CollectToast({ orb, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                 px-5 py-3 rounded-xl backdrop-blur-xl bg-black/70 border
                 text-center pointer-events-none animate-fade-in-up"
      style={{ borderColor: orb.color + "66", boxShadow: `0 0 24px ${orb.color}44` }}
    >
      <div className="text-xs tracking-widest uppercase mb-1" style={{ color: orb.color }}>
        ✦ Collected
      </div>
      <div className="text-white font-semibold text-sm">{orb.label}</div>
      <div className="text-white/50 text-xs mt-1 max-w-[200px]">{orb.content}</div>
    </div>
  );
}

export default function HUD({ activeNode, speed, onCollect, latestCollect }) {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const kmh = Math.abs(Math.round(speed * 680));
  const isMoving = Math.abs(speed) > 0.008;
  const isReverse = speed < -0.008;

  useEffect(() => {
    if (latestCollect) setToast(latestCollect);
  }, [latestCollect]);

  const clearToast = useCallback(() => setToast(null), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 select-none font-mono">
      {/* Back button */}
      <button
        className="pointer-events-auto absolute top-5 left-5 flex items-center gap-2
                   px-4 py-2 rounded-lg text-sm font-semibold
                   bg-black/50 backdrop-blur-md border border-white/10
                   text-white/80 hover:text-white hover:border-white/30
                   transition-all duration-200 hover:bg-black/70"
        onClick={() => navigate("/")}
      >
        <span>←</span>
        <span>Portfolio</span>
      </button>

      {/* Title */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-center">
        <span className="text-[11px] tracking-[0.4em] uppercase text-white/30">
          Aymen&apos;s World
        </span>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-6 text-[11px] text-white/30 space-y-1.5">
        <div className="flex items-center gap-1.5">
          {["W", "A", "S", "D"].map((k) => (
            <kbd key={k} className="w-7 h-7 flex items-center justify-center rounded-md bg-white/5 border border-white/15 text-white/50 text-xs">
              {k}
            </kbd>
          ))}
          <span className="ml-1 text-white/20">/ Arrow Keys</span>
        </div>
        <div className="flex items-center gap-1.5">
          <kbd className="px-2 h-7 flex items-center justify-center rounded-md bg-white/5 border border-white/15 text-white/50 text-xs">
            Space
          </kbd>
          <span className="text-white/20">brake</span>
        </div>
        {!isMoving && (
          <p className="text-white/20 mt-1.5 tracking-wide">Follow the glowing road to explore</p>
        )}
      </div>

      {/* Speedometer */}
      <div className="absolute bottom-6 right-6 text-right">
        <div className="text-3xl font-bold text-white/90 tabular-nums leading-none">{kmh}</div>
        <div className="text-[10px] text-white/25 mt-0.5 tracking-widest">KM/H</div>
        <div className={`text-[10px] mt-1.5 tracking-widest font-semibold ${isMoving ? (isReverse ? "text-amber-400" : "text-emerald-400") : "text-white/20"}`}>
          {isMoving ? (isReverse ? "▼ REV" : "▲ FWD") : "• IDLE"}
        </div>
      </div>

      {/* Collectible toast */}
      {toast && <CollectToast orb={toast} onDone={clearToast} />}

      {/* Section info card — appears when near a big node */}
      {activeNode && !toast && (
        <div
          className="absolute top-1/2 right-6 -translate-y-1/2 w-72 rounded-2xl overflow-hidden backdrop-blur-xl border bg-black/65 shadow-2xl"
          style={{ borderColor: activeNode.color + "33", boxShadow: `0 0 50px ${activeNode.color}18` }}
        >
          <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${activeNode.color}, transparent)` }} />
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{activeNode.emoji}</span>
              <span className="text-sm font-bold tracking-wide" style={{ color: activeNode.color }}>
                {activeNode.label}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{activeNode.content}</p>
            <div className="mt-3 text-[11px] text-white/30 tracking-wide">
              ← Collect small orbs along the road for details
            </div>
            <button
              className="pointer-events-auto mt-3 w-full py-2 rounded-lg text-xs font-semibold border border-white/10 text-white/60 hover:bg-white/5 hover:text-white/90 hover:border-white/20 transition-all duration-200"
              onClick={() => navigate("/")}
            >
              View full section in portfolio →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
