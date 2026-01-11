import Hero from "../Sections/Hero";
import Explanation from "../Sections/Explanation";
import Features from "../Sections/Features";
import Footer from "../Sections/Footer";
import type { FC } from "react";

const LandingPage: FC = () => {
  return (
    <div>
      <Hero />
      <div className="py-20 flex flex-col items-center gap-30">
        <Explanation />
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
