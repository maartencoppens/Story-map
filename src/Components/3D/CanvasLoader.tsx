import { Html, useProgress } from "@react-three/drei";
import type { FC } from "react";

const CanvasLoader: FC = () => {
  const { progress } = useProgress();
  const safeProgress = Math.min(100, Math.max(0, progress));
  const glowScale = 0.85 + safeProgress / 120;
  const glowOpacity = 0.25 + safeProgress / 200;
  const glowBlur = 18 + safeProgress / 3;

  return (
    <Html fullscreen>
      <div className="flex h-full items-center justify-center bg-[#0b0f2a]">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative h-20 w-20">
            <div
              className="absolute inset-0 rounded-full bg-[#7b61ff]"
              style={{
                opacity: glowOpacity,
                filter: `blur(${glowBlur}px)`,
                transform: `scale(${glowScale})`,
              }}
            />
            <div className="h-full w-full rounded-full bg-radial-[circle_at_30%_30%] from-[#c2b5ff] to-[#5f4bd9]" />
          </div>
          <p className="text-sm tracking-wide text-white/60">
            Loading world...
          </p>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
