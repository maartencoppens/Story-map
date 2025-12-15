import Card from "../Components/Card";

const Explanation = () => {
  return (
    <div className="mx-auto text-center px-4">
      <img
        src="/images/castle.svg"
        alt="Castle Illustration"
        className="mx-auto w-15 mb-4"
      />
      <h2 className="text-3xl font-semibold magical-glow">
        A Magical Journey Awaits
      </h2>
      <Card text="This interactive 3D map brings the legendary Hogwarts School of Witchcraft and Wizardry to life in stunning detail. Navigate through iconic locations, uncover secret passages, and experience the magic that has captivated millions. Every tower, every corridor, every enchanted room is waiting to be discovered." />
    </div>
  );
};

export default Explanation;
