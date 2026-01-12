import { Html } from "@react-three/drei";
import { useState, type FC } from "react";
import Card from "../../../Card";
import type { Positions } from "../../../../types/types";

const OwleryTowerUI: FC = () => {
  const [open, setOpen] = useState(false);

  const positions: Positions = {
    card1: [0.3, 2.4, 0],
    image1: [2.6, 2.2, 2],
  };

  return (
    <>
      <Html position={positions.card1}>
        <Card>
          <div className="w-96 flex flex-col gap-6">
            <h2 className="text-xl font-bold mb-2">
              De nalatenschap van Dumbledore
            </h2>
            <p>
              Albus Dumbledore geloofde dat <strong>keuzes</strong> belangrijker
              zijn dan talent. Zelfs na zijn dood bleven zijn beslissingen
              invloed hebben op de toekomst van Hogwarts en haar leerlingen.
            </p>
          </div>
        </Card>
      </Html>
      <Html position={positions.image1} center>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className=" relative w-96 text-left"
        >
          <div className="absolute inset-x-6 top-6 h-8 rounded-full border border-amber-200/40 bg-[#c4a46f] shadow-[0_10px_20px_rgba(20,10,0,0.18)]" />

          <div
            className={`absolute left-6 right-6 top-8 origin-top overflow-hidden rounded-2xl border border-amber-200/40 
      bg-linear-to-b from-[#fbf1d6] via-[#f6e7c3] to-[#f1dcab]
      shadow-[0_12px_30px_rgba(20,10,0,0.25)]
      opacity-100 transition-[max-height,transform,opacity] duration-700 ${
        open ? "max-h-80" : "max-h-24"
      }`}
            style={{
              transform: open ? "translateY(0)" : "translateY(4px)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -left-24 top-0 h-full w-56 rotate-12 bg-white/20 blur-xl" />
            </div>

            <div
              className={`p-6 transition-[padding] duration-300 ${
                open ? "pb-6" : "pb-8"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.22em] text-amber-900/70 pb-2">
                  Brief van Dumbledore
                </p>

                <span
                  className={`text-amber-900/50 transition-transform duration-500 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▾
                </span>
              </div>

              <div
                className={`mt-2 flex items-center gap-2 text-[13px] text-amber-950/65 transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-900/25" />
                <span className="italic">Klik om te openen…</span>
              </div>

              <div
                className={`mt-3 text-lg italic text-amber-950/90 transition-opacity duration-300 ${
                  open ? "opacity-100" : "opacity-0"
                }`}
              >
                “Het zijn onze keuzes, Harry, die laten zien wie we werkelijk
                zijn, veel meer dan onze vaardigheden.”
              </div>
            </div>
          </div>
        </button>
      </Html>
    </>
  );
};

export default OwleryTowerUI;
