import { Html, useProgress } from "@react-three/drei";
import { useMemo } from "react";
import "./CanvasLoader.css";

const loaderStages = [
  "Lighting the Great Hall",
  "Summoning ancient stone",
  "Calling the castle to rise",
  "Tracing runes in the air",
  "Opening the gates of wonder",
];

export default function CanvasLoader() {
  const { progress, item } = useProgress();
  const safeProgress = Math.min(100, Math.max(0, progress));
  const stageIndex = Math.min(
    loaderStages.length - 1,
    Math.floor((safeProgress / 100) * loaderStages.length)
  );
  const stageMessage = useMemo(() => loaderStages[stageIndex], [stageIndex]);

  return (
    <Html fullscreen>
      <div className="fixed z-60 inset-0 flex items-center justify-center bg-(--loader-overlay-bg) pointer-events-auto">
        <div className="parchment-texture golden-glow w-80 rounded-3xl px-9 py-10 border border-amber-300/20  text-center shadow-[0_0_40px_rgba(251,191,36,0.15),0_0_80px_rgba(251,191,36,0.08)] animate-[loader-float_6s_ease-in-out_infinite]">
          <div className="relative mx-auto mb-6 h-140px w-full">
            <div className="absolute inset-0 rounded-full border-2 border-amber-300/40 shadow-[0_0_16px_rgba(251,191,36,0.35)] animate-[loader-spin_9s_linear_infinite]" />
            <div className="absolute inset-18px rounded-full border border-amber-300/25 shadow-[0_0_16px_rgba(251,191,36,0.25)] animate-[loader-spin_6s_linear_infinite_reverse]" />
            <div className="absolute inset-32px rounded-full bg-(--loader-core-bg) shadow-[0_0_22px_rgba(251,191,36,0.55),0_0_40px_rgba(251,191,36,0.2)] animate-[loader-pulse_3.4s_ease-in-out_infinite]" />
            <div className="absolute left-18px top-10px h-3 w-3 rounded-full bg-amber-50/90 shadow-[0_0_12px_rgba(251,191,36,0.8)] animate-[loader-spark_2.8s_ease-in-out_infinite]" />
            <div className="absolute bottom-18px right-24px h-3 w-3 rounded-full bg-amber-50/90 shadow-[0_0_12px_rgba(251,191,36,0.8)] animate-[loader-spark_2.8s_ease-in-out_infinite] [animation-delay:0.8s]" />
            <div className="absolute right-12px top-30px h-3 w-3 rounded-full bg-amber-50/90 shadow-[0_0_12px_rgba(251,191,36,0.8)] animate-[loader-spark_2.8s_ease-in-out_infinite] [animation-delay:1.4s]" />
          </div>
          <div className="font-['Cinzel_Decorative'] min-w-20 min-h-20">
            <p className="magical-glow text-[1.35rem] uppercase tracking-[0.08em] text-amber-100/95">
              {stageMessage}
            </p>
          </div>
          <div className="mt-7 h-2 overflow-hidden rounded-full bg-amber-300/15 w-full">
            <div
              className="h-full bg-(--loader-bar-bg) shadow-[0_0_18px_rgba(251,191,36,0.65)] transition-[width] duration-200 ease-out"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
          <p className="mt-3 text-sm uppercase tracking-[0.08em] text-amber-300/80">
            {Math.round(safeProgress)}% complete
          </p>
        </div>
      </div>
    </Html>
  );
}
