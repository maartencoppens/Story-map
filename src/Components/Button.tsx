import { Link } from "react-router";

type ButtonProps = {
  label: React.ReactNode;
  route: string;
};

const Button = ({ label, route }: ButtonProps) => {
  return (
    <Link
      to={route}
      className="px-6 py-3 bg-blue-700 text-white font-sans rounded-2xl hover:bg-amber-700 transition"
    >
      {label}
    </Link>
  );
};

export default Button;
