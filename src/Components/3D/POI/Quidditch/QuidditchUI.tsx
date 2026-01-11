import { Html } from "@react-three/drei";
import Card from "../../../Card";
import type { Positions } from "../../../../types/types";

const QuidditchUI: React.FC = () => {
  const positions: Positions = {
    card1: [-1.3, 0.4, 1.6],
    image1: [-2.5, 0.4, 1.8],
  };

  return (
    <>
      <Html position={positions.image1} center>
        <Card>
          <div className="pointer-events-none w-190">
            <img
              src="/images/quidditch-image.webp"
              alt="Quidditch spelers"
              className="h-auto w-190 rounded-2xl border border-white/20 shadow-[0_12px_30px_rgba(15,23,42,0.35)]"
            />
          </div>
        </Card>
      </Html>
      <Html position={positions.card1} center>
        <Card
          text="Quidditch is de bekendste toversport ter wereld en wordt gespeeld door twee teams van zeven spelers op vliegende bezems. Het doel is punten scoren door de Quaffle door een van de ringen van de tegenstander te gooien, terwijl andere ballen het spel chaotischer maken."
          className="w-180"
        />
        <div className="flex">
          <Card className="w-90">
            <div className="text-amber-50/80">
              <p className="text-lg font-semibold">Basisregels</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed">
                <li>Elk team bestaat uit 7 spelers</li>
                <li>Er zijn 3 soorten ballen</li>
                <li>Het spel eindigt wanneer de Gouden Snaai wordt gevangen</li>
              </ul>
              <p className="mt-5 text-lg font-semibold">Punten</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed">
                <li>Quaffle door een ring: 10 punten</li>
                <li>Gouden Snaai: 150 punten</li>
              </ul>
            </div>
          </Card>
          <Card className="mt-6 w-90">
            <div className="text-amber-50/80">
              <p className="text-lg font-semibold">Belangrijke spelers</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed">
                <li>Zoeker: vangt de Gouden Snaai</li>
                <li>Jager: scoort met de Quaffle</li>
                <li>Bewaker: verdedigt de ringen</li>
                <li>Slagman: ontwijkt Bludgers en beschermt teamgenoten</li>
              </ul>
            </div>
          </Card>
        </div>
      </Html>
    </>
  );
};

export default QuidditchUI;
