import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="bg-slate-950/90">
        <div className="flex items-center justify-between p-6 bg-slate-900/80">
          <Button route="/" label="Home" />

          <img
            src="/images/HP_Logo.png"
            alt="Harry Potter Logo"
            className="w-30"
          />
          <p>Drag the map and click on points of interest</p>
        </div>
      </header>
    </>
  );
};

export default Header;
