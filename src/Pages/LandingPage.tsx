import Divider from "../Components/Divider";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col gap-8 w-1/4 mx-auto text-center">
        <img
          src="/images/HP_Logo.png"
          alt="Harry Potter Logo"
          className="w-30"
        />
        <h1 className="text-4xl font-bold magical-glow">Explore Hogwarts</h1>
        <p className="text-lg text-amber-50/90">
          Step into an immersive 3D journey through the most magical castle in
          the Wizarding World. Discover hidden chambers, legendary halls, and
          enchanted grounds like never before.
        </p>
        <a
          href="/hogwarts"
          className="px-6 py-3 bg-blue-700 text-white rounded-2xl hover:bg-amber-700 transition"
        >
          Enter Hogwarts
        </a>
        <Divider />
      </div>
    </>
  );
};

export default LandingPage;
