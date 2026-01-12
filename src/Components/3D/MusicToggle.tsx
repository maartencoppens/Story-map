import { Html } from "@react-three/drei";
import { useEffect, useRef, useState, type FC } from "react";
import Button from "../Button";
import type { MusicToggleProps } from "../../types/types";
import { useThreeAudio } from "./useThreeAudio";

const MusicToggle: FC<MusicToggleProps> = ({ src = "/Music/Main.mp3" }) => {
  const { ready, load, resume } = useThreeAudio();
  const soundRef = useRef<ReturnType<typeof load> | null>(null);
  const shouldPlayRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const sound = load(src, {
      loop: true,
      volume: 0.5,
      onLoad: () => {
        if (shouldPlayRef.current) {
          sound?.play();
          setIsPlaying(true);
        }
      },
      onError: () => {
        shouldPlayRef.current = false;
        setIsPlaying(false);
      },
    });
    soundRef.current = sound;
    return () => {
      sound?.stop();
      soundRef.current = null;
    };
  }, [load, ready, src]);

  const handleToggle = async () => {
    const sound = soundRef.current;
    if (!sound) return;

    if (isPlaying) {
      sound.stop();
      shouldPlayRef.current = false;
      setIsPlaying(false);
      return;
    }

    try {
      await resume();
      if (sound.buffer) {
        sound.play();
        setIsPlaying(true);
      } else {
        shouldPlayRef.current = true;
      }
    } catch {
      shouldPlayRef.current = false;
      setIsPlaying(false);
    }
  };

  return (
    <Html fullscreen style={{ pointerEvents: "none" }}>
      <div className="pointer-events-none absolute right-6 bottom-6 z-70">
        <div style={{ pointerEvents: "auto" }}>
          <Button
            title={isPlaying ? "Muziek uit" : "Muziek aan"}
            variant="poi"
            onClick={handleToggle}
          >
            {isPlaying ? (
              <img
                src="/icons/volume.png"
                alt="Volume icon"
                className="h-6 w-6"
              />
            ) : (
              <img src="/icons/mute.png" alt="Mute icon" className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </Html>
  );
};

export default MusicToggle;
