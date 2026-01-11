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
          className="group relative w-96 text-left"
        >
          <div className="absolute inset-x-6 top-6 h-8 rounded-full border border-amber-200/40 bg-[#c4a46f]" />
          <div
            className={`absolute left-6 right-6 top-8 origin-top overflow-hidden rounded-2xl border border-amber-200/40 bg-[#f6e7c3] shadow-[0_12px_30px_rgba(20,10,0,0.25)] transition-[max-height,transform,opacity] duration-700 ${
              open ? "max-h-80 opacity-100" : "max-h-12 opacity-90"
            }`}
            style={{
              transform: open ? "translateY(0)" : "translateY(6px)",
            }}
          >
            <div className="p-6">
              <p className="text-xs  uppercase tracking-[0.2em] text-amber-900/70">
                Brief van Dumbledore
              </p>
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
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-amber-200/80"></div>
        </button>
      </Html>
    </>
  );
};

export default OwleryTowerUI;
