import { Html } from "@react-three/drei";
import type { FC } from "react";
import { useState } from "react";
import type { Positions } from "../../../../types/types";
import Card from "../../../Card";

const GreatHallUI: FC = () => {
  const positions: Positions = {
    card1: [-4.7, 0.9, 0],
    image1: [-2, 0.5, 2],
  };
  const [openId, setOpenId] = useState<string | null>(null);
  const houses = [
    {
      id: "gryffindor",
      label: "Gryffindor",
      color: "text-amber-50",
      icon: "/images/house-shields/gryffindor-shield.png",
      detail:
        "Moed, lef en ridderlijkheid staan centraal. Bekend om dappere keuzes.",
    },
    {
      id: "slytherin",
      label: "Slytherin",
      color: "text-emerald-100",
      icon: "/images/house-shields/slytherin-shield.png",
      detail:
        "Ambitie, sluwheid en doorzettingsvermogen. Bekend om sterke leiders.",
    },
    {
      id: "hufflepuff",
      label: "Hufflepuff",
      color: "text-amber-100",
      icon: "/images/house-shields/hufflepuff-shield.png",
      detail:
        "Trouw, hard werken en eerlijkheid. Bekend om warmte en teamwork.",
    },
    {
      id: "ravenclaw",
      label: "Ravenclaw",
      color: "text-sky-100",
      icon: "/images/house-shields/ravenclaw-shield.png",
      detail:
        "Wijsheid, creativiteit en nieuwsgierigheid. Bekend om scherpe geesten.",
    },
  ];

  return (
    <>
      <Html position={positions.card1}>
        <Card>
          <div className="w-96 flex flex-col gap-6">
            <h2 className="text-xl font-bold mb-2">The Great Hall</h2>
            <p>
              De Great Hall is het <strong>centrale ontmoetingspunt</strong> van
              Hogwarts. Hier eten leerlingen samen, vinden ceremonies plaats en
              worden belangrijke momenten gedeeld. Onder dit betoverde plafond
              komen de vier huizen samen.
            </p>
          </div>
        </Card>
      </Html>
      <Html position={positions.image1} center>
        <div className="w-120 space-y-6 rounded-2xl bg-black/35 p-7 shadow-lg backdrop-blur-sm">
          {houses.map((house) => {
            const isOpen = openId === house.id;
            return (
              <div
                key={house.id}
                className="rounded-2xl border border-white/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : house.id)}
                  className="flex w-full items-center gap-6 px-7 py-6 text-left transition hover:bg-white/5"
                >
                  <img
                    src={house.icon}
                    alt={`${house.label} shield`}
                    className="h-20 w-20 object-contain drop-shadow"
                  />
                  <div className="flex flex-1 items-center justify-between gap-4">
                    <h2 className={`text-2xl font-semibold ${house.color}`}>
                      {house.label}
                    </h2>
                    <span
                      className={`text-5xl text-amber-200/70 transition-transform ${
                        isOpen ? "rotate-90" : ""
                      }`}
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </div>
                </button>
                {isOpen ? (
                  <div className="border-t border-white/10 px-7 pb-6 text-lg text-amber-50/80">
                    {house.detail}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Html>
    </>
  );
};

export default GreatHallUI;
