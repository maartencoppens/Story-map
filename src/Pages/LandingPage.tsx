import Hero from "../Sections/Hero";
import Explanation from "../Sections/Explanation";
import Features from "../Sections/Features";
import Footer from "../Sections/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <div className="my-20 flex flex-col items-start gap-30">
        <Explanation />
        <Features />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
