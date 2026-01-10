import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <Html fullscreen>
      <div className="flex h-full items-center justify-center px-6">
        <div className="flex items-center">
          <img
            src="/images/harry-casting-spell.png"
            alt="Harry casting a spell"
            className="w-55 select-none drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
          />
          <div className="relative -ml-2 -mt-6 h-3 w-65 max-w-[80vw] rounded-full bg-amber-50/15">
            <div className="absolute -inset-2 rounded-full bg-red-400/25 blur-lg" />
            <div
              className="relative h-full rounded-full bg-linear-to-r from-red-500 via-red-300 to-white shadow-[0_0_16px_rgba(248,113,113,0.9)] transition-[width] duration-200"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
        </div>
      </div>
    </Html>
  );
}
