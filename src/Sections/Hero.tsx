import { gsap } from "gsap";
import { useEffect, useRef, type FC } from "react";
import ScrollHint from "../Components/Scrollhint";
import Button from "../Components/Button";

const Hero: FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 12,
        filter: "blur(6px)",
        duration: 1.2,
        ease: "power2.out",
        clearProps: "filter",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center gap-8 text-center"
    >
      <img
        src="/images/HP_Logo.png"
        alt="Harry Potter Logo"
        className="w-30"
      />
      <h1 className="text-4xl font-bold magical-glow hero-title">
        Explore Hogwarts
      </h1>
      <p className="text-lg text-amber-50/90 max-w-2xl">
        Step into an immersive 3D journey through the most magical castle in
        the Wizarding World. Discover hidden chambers, legendary halls, and
        enchanted grounds like never before.
      </p>
      <Button route="/map" label="Enter the Castle" />
      <ScrollHint />
    </div>
  );
};

export default Hero;
