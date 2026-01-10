import { Html } from "@react-three/drei";
import {
  CuboidCollider,
  CylinderCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import type { FC } from "react";
import { useState } from "react";
import Card from "../../../Card";
import type { PaperDrop, Position, Positions } from "../../../../types/types";
import { TriwizardCup } from "./TriwizardCupModel";

const TriwizardCupUI: FC = () => {
  const positions: Positions = {
    card1: [-0.3, -0.65, -0.8],
    image1: [-0.1, -0.8, -0.5],
  };
  const [papers, setPapers] = useState<PaperDrop[]>([]);
  const [hasDropped, setHasDropped] = useState(false);
  const [cupGlow, setCupGlow] = useState(false);
  const cupPosition: Position = positions.image1 ?? [0, 0, 0];

  const dropPaper = () => {
    if (hasDropped) return;
    setPapers((items) => [
      ...items,
      {
        id: String(Date.now()),
        position: [cupPosition[0], cupPosition[1] + 0.8, cupPosition[2]],
        rotation: [
          Math.random() * 0.4 - 0.2,
          Math.random() * 0.6 - 0.3,
          Math.random() * 0.4 - 0.2,
        ],
      },
    ]);
    setHasDropped(true);
  };

  return (
    <>
      <Physics>
        <RigidBody
          type="fixed"
          colliders={false}
          position={cupPosition}
          onCollisionEnter={() => setTimeout(() => setCupGlow(true), 500)}
        >
          <CylinderCollider args={[0.01, 0.1]} position={[0, 0.14, 0]} />
          <CuboidCollider args={[0.1, 0.01, 0.1]} position={[0, 0.14, 0]} />
          <TriwizardCup glow={cupGlow} />
        </RigidBody>
        {papers.map((paper) => (
          <RigidBody
            key={paper.id}
            position={paper.position}
            rotation={paper.rotation}
            colliders="cuboid"
            restitution={0.1}
            friction={0.8}
            gravityScale={0.15}
            linearDamping={0.6}
            angularDamping={0.95}
          >
            <mesh>
              <boxGeometry args={[0.05, 0.002, 0.03]} />
              <meshStandardMaterial
                color="#f4e3c1"
                roughness={0.95}
                metalness={0}
                emissive="#1a1208"
                emissiveIntensity={0.15}
              />
            </mesh>
          </RigidBody>
        ))}
      </Physics>
      <Html position={positions.card1} center>
        <Card>
          <div className="w-116 flex flex-col gap-6">
            <h2>Triwizard Cup</h2>
            <p>
              Wanneer een naam in de Triwizard Cup wordt geplaatst, reageert de
              oude magie die erin besloten ligt. De Cup beoordeelt of een
              kandidaat de <strong>moed en vastberadenheid</strong> bezit om
              deel te nemen aan het Toverschool Toernooi.
            </p>
            <p>
              Deze ceremonie vond plaats in aanwezigheid van{" "}
              <strong>alle toverscholen</strong>, net zoals andere grote
              momenten in Hogwarts zich afspelen op centrale en ceremoniële
              locaties zoals de Great Hall en het Quidditchveld.
            </p>
            <button
              type="button"
              onClick={dropPaper}
              className={`mt-4 rounded-full border px-4 py-2 text-base font-semibold transition ${
                hasDropped
                  ? "cursor-not-allowed border-amber-300/20 bg-amber-300/10 text-amber-50/50"
                  : "border-amber-300/60 bg-amber-300/20 text-amber-50 hover:bg-amber-300/30"
              }`}
            >
              {hasDropped ? "Naam ingediend" : "Gooi jouw naam in de beker"}
            </button>
          </div>
        </Card>
      </Html>
    </>
  );
};

export default TriwizardCupUI;
