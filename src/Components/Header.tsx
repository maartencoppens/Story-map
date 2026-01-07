import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="bg-slate-950/90 fixed w-full top-0 z-50">
        <div className="flex items-center justify-between p-4 bg-slate-900/80">
          <Button route="/" label="Home" />

          <img
            src="/images/HP_Logo.png"
            alt="Harry Potter Logo"
            className="w-15"
          />
          <p>Drag the map and click on points of interest</p>
        </div>
      </header>
    </>
  );
};

export default Header;
