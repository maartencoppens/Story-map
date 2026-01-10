import { Link } from "react-router";

type ButtonProps = {
  label: React.ReactNode;
  route?: string;
  onClick?: () => void;
};

const Button = ({ label, route, onClick }: ButtonProps) => {
  const className =
    "group inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-linear-to-br from-slate-950/80 to-slate-900/60 px-5 py-2.5 text-sm font-semibold tracking-wide text-amber-50 shadow-[0_10px_25px_rgba(15,23,42,0.35)] backdrop-blur transition hover:border-amber-200/70 hover:shadow-[0_14px_34px_rgba(245,158,11,0.25)] magic-pointer";

  if (route) {
    return (
      <Link to={route} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
