import { Html } from "@react-three/drei";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import Card from "../../../Card";
import type { Positions } from "../../../../types/types";
import { useThreeAudio } from "../../useThreeAudio";

const GriffindorRoomUI: FC = () => {
  const { ready, load, resume } = useThreeAudio();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const sfxRef = useRef<ReturnType<typeof load> | null>(null);
  const hasPlayedRef = useRef(false);

  const positions: Positions = {
    card1: [0, 1.4, -4],
    image1: [0, 1.5, 1],
  };

  const options = [
    { id: "fortuna-major", label: "Fortuna Major", correct: false },
    { id: "caput-draconis", label: "Caput Draconis", correct: true },
    { id: "felix-felicis", label: "Felix Felicis", correct: false },
  ];
  const isCorrect =
    selectedId != null &&
    options.find((o) => o.id === selectedId)?.correct === true;

  useEffect(() => {
    if (!ready) return;
    const sound = load("/SFX/door.mp3", { volume: 0.6 });
    sfxRef.current = sound;

    return () => {
      sound?.stop();
      sfxRef.current = null;
      hasPlayedRef.current = false;
    };
  }, [load, ready]);

  useEffect(() => {
    if (!isCorrect || hasPlayedRef.current) return;
    const sound = sfxRef.current;
    if (!sound || !sound.buffer) return;
    resume().catch(() => {});
    if (sound.isPlaying) sound.stop();
    sound.play();
    hasPlayedRef.current = true;
  }, [isCorrect, resume]);

  return (
    <>
      <Html position={positions.card1} center>
        <Card>
          <div className="w-116 flex flex-col gap-6">
            <h2>De Toegang tot de Gryffindor Common Room</h2>
            <p>
              In deze toren vindt de <strong>Gryffindor common room</strong>{" "}
              plaats. De ingang van de Gryffindor Common Room wordt{" "}
              <strong>bewaakt</strong> door een levend schilderij. Alleen wie
              het juiste wachtwoord kent, krijgt toegang. Durf jij het te
              proberen?
            </p>
          </div>
        </Card>
      </Html>
      <Html position={positions.image1} center>
        <Card>
          <div className="w-96 text-center flex flex-col items-center gap-6">
            <div className="relative w-full flex justify-center">
              <div className="absolute inset-x-8 top-1/2 z-0 -translate-y-1/2 rounded-xl bg-black/70 p-4 text-2xl text-amber-50/90 text-center transition-opacity duration-300">
                Caput Draconis betekent <strong>‘drakenkop’</strong> en opent de
                doorgang. Een draak staat symbool voor <strong>moed</strong> en{" "}
                <strong>kracht</strong>, eigenschappen die bij Gryffindor horen.
              </div>
              <img
                src="/images/gryffindor-entrance-painting.png"
                alt="Gryffindor entrance painting"
                className="relative z-10 mx-auto w-80 rounded-2xl border border-white/15 shadow-lg transition-transform duration-500 will-change-transform"
                style={{
                  transformOrigin: "left center",
                  transform: isCorrect
                    ? "perspective(900px) rotateY(-90deg) translateX(-6px)"
                    : "perspective(900px) rotateY(0deg)",
                }}
              />
            </div>
            {!isCorrect ? (
              <p className="mt-3 text-md text-amber-50/80">
                Kies het juiste wachtwoord om toegang te krijgen.
              </p>
            ) : null}
            <div className="mt-4 flex justify-center gap-3">
              {options.map((option) => {
                const isSelected = selectedId === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedId(option.id)}
                    className={`rounded-full border px-4 py-2 text-base font-semibold transition ${
                      isSelected
                        ? option.correct
                          ? "border-amber-300/80 bg-amber-300/30 text-amber-50"
                          : "border-red-300/80 bg-red-300/20 text-red-100"
                        : "border-white/25 bg-black/35 text-amber-50/90 hover:bg-black/50"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Card>
      </Html>
    </>
  );
};

export default GriffindorRoomUI;
