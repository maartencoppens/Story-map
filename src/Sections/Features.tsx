import Card from "../Components/Card";

const Features = () => {
  return (
    <div className="mx-auto text-center w-1/2">
      <h2 className="text-3xl font-semibold magical-glow">Magical Features</h2>
      <div className="flex items-stretch">
        <Card text="Explore every corner of Hogwarts with our detailed 3D map. From the Great Hall to the highest tower, every location is at your fingertips." />
        <Card text="Discover magical landmarks, secret passages, and legendary chambers. Each location tells its own story from the wizarding world." />
        <Card text="Experience Hogwarts like never before with stunning 3D visualization, atmospheric effects, and enchanting details at every turn." />
      </div>
    </div>
  );
};

export default Features;
