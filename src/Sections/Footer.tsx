import type { FC } from "react";
import Divider from "../Components/Divider";

const Footer: FC = () => {
  return (
    <footer className="bg-slate-950 w-full py-4 flex flex-col items-center gap-2 text-center">
      <div className="mx-auto w-1/3">
        <p className="text-lg text-amber-50/60">
          A magical exploration of the Wizarding World
        </p>
        <Divider />
        <p className="text-xs text-amber-50/60 pt-3">
          Fan-made interactive experience • Not affiliated with official Harry
          Potter properties
        </p>
      </div>
    </footer>
  );
};

export default Footer;
