import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header className="flex justify-center fixed w-full top-4 z-50">
        <div className="flex items-center w-1/5 justify-center p-4 bg-slate-900/70 rounded-4xl">
          <Link to="/">
            <img
              src="/images/HP_Logo.png"
              alt="Harry Potter Logo"
              className="w-15"
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
