import { useEffect, useRef, useState, useCallback } from "react";
import { useThree } from "@react-three/fiber";
import { Audio, AudioListener, AudioLoader } from "three";

type LoadOptions = {
  loop?: boolean;
  volume?: number;
  onLoad?: (sound: Audio) => void;
  onError?: () => void;
};

export function useThreeAudio() {
  const { camera } = useThree();
  const listenerRef = useRef<AudioListener | null>(null);
  const addedRef = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let listener =
      camera.children.find((child) => child instanceof AudioListener) ?? null;
    if (!listener) {
      listener = new AudioListener();
      camera.add(listener);
      addedRef.current = true;
    }
    listenerRef.current = listener;
    setReady(true);

    return () => {
      if (addedRef.current && listenerRef.current) {
        camera.remove(listenerRef.current);
        addedRef.current = false;
      }
      listenerRef.current = null;
      setReady(false);
    };
  }, [camera]);

  const load = useCallback((src: string, options?: LoadOptions) => {
    const listener = listenerRef.current;
    if (!listener) return null;
    const sound = new Audio(listener);
    const loader = new AudioLoader();
    loader.load(
      src,
      (buffer) => {
        sound.setBuffer(buffer);
        if (options?.loop) sound.setLoop(true);
        if (options?.volume != null) sound.setVolume(options.volume);
        options?.onLoad?.(sound);
      },
      undefined,
      () => options?.onError?.()
    );
    return sound;
  }, []);

  const resume = useCallback(async () => {
    const listener = listenerRef.current;
    if (!listener) return;
    if (listener.context.state !== "running") {
      await listener.context.resume();
    }
  }, []);

  return { ready, load, resume };
}
