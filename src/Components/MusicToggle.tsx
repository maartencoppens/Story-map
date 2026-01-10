import { useEffect, useRef, useState } from "react";
import PoiButton from "./PoiButton";

type MusicToggleProps = {
  src?: string;
};

const MusicToggle = ({ src = "/Music/Main.mp3" }: MusicToggleProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const shouldPlayRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = src;
    audio.load();
    if (shouldPlayRef.current) {
      audio.muted = false;
      audio.volume = 0.5;
      audio.play().catch(() => {
        shouldPlayRef.current = false;
        setIsPlaying(false);
      });
    }
    return () => audioRef.current?.pause();
  }, [src]);

  const handleToggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      shouldPlayRef.current = false;
      setIsPlaying(false);
      return;
    }

    try {
      audio.muted = false;
      audio.volume = 0.5;
      await audio.play();
      shouldPlayRef.current = true;
      setIsPlaying(true);
    } catch {
      shouldPlayRef.current = false;
      setIsPlaying(false);
    }
  };

  return (
    <PoiButton
      title={isPlaying ? "Muziek uit" : "Muziek aan"}
      onClick={handleToggle}
      ariaPressed={isPlaying}
      ariaLabel={isPlaying ? "Muziek uit" : "Muziek aan"}
    >
      <audio ref={audioRef} src={src} loop preload="auto" />
      {isPlaying ? (
        <img src="/icons/volume.png" alt="Volume icon" className="h-6 w-6" />
      ) : (
        <img src="/icons/mute.png" alt="Mute icon" className="h-6 w-6" />
      )}
    </PoiButton>
  );
};

export default MusicToggle;
