import { Html } from "@react-three/drei";
import type { FC } from "react";

const DefaultUiComponent: FC = () => {
  return (
    <Html center>
      <div className="rounded-lg bg-black/50 px-4 py-2 text-sm text-amber-50/80">
        Geen extra info beschikbaar.
      </div>
    </Html>
  );
};

export default DefaultUiComponent;
