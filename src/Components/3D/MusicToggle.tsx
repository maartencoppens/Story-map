import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Audio, AudioListener, AudioLoader } from "three";
import { useEffect, useRef, useState, type FC } from "react";
import Button from "../Button";
import type { MusicToggleProps } from "../../types/types";

const MusicToggle: FC<MusicToggleProps> = ({ src = "/Music/Main.mp3" }) => {
  const { camera } = useThree();
  const listenerRef = useRef<AudioListener | null>(null);
  const soundRef = useRef<Audio | null>(null);
  const shouldPlayRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const listener = new AudioListener();
    const sound = new Audio(listener);
    listenerRef.current = listener;
    soundRef.current = sound;
    camera.add(listener);
    return () => {
      sound.stop();
      camera.remove(listener);
      listenerRef.current = null;
      soundRef.current = null;
    };
  }, [camera]);

  useEffect(() => {
    const sound = soundRef.current;
    if (!sound) return;
    const loader = new AudioLoader();
    let cancelled = false;
    sound.stop();
    loader.load(
      src,
      (buffer) => {
        if (cancelled) return;
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        if (shouldPlayRef.current) {
          sound.play();
          setIsPlaying(true);
        }
      },
      undefined,
      () => {
        if (cancelled) return;
        shouldPlayRef.current = false;
        setIsPlaying(false);
      }
    );
    return () => {
      cancelled = true;
    };
  }, [src]);

  const handleToggle = async () => {
    const sound = soundRef.current;
    const listener = listenerRef.current;
    if (!sound || !listener) return;

    if (isPlaying) {
      sound.stop();
      shouldPlayRef.current = false;
      setIsPlaying(false);
      return;
    }

    try {
      if (listener.context.state !== "running") {
        await listener.context.resume();
      }
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
    <Html fullscreen>
      <div className="pointer-events-none absolute right-6 bottom-6 z-70">
        <div className="pointer-events-auto">
          <Button
            title={isPlaying ? "Muziek uit" : "Muziek aan"}
            ariaLabel={isPlaying ? "Muziek uit" : "Muziek aan"}
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
