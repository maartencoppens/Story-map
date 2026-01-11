import type { FC, ReactNode } from "react";
import { Link } from "react-router";
import type { ButtonProps } from "../types/types";

const primaryClassName =
  "flex items-center gap-2 rounded-full border border-amber-200/40 bg-linear-to-br from-slate-950/80 to-slate-900/60 px-5 py-2.5 text-sm font-semibold tracking-wide text-amber-50 shadow-[0_10px_25px_rgba(15,23,42,0.35)] backdrop-blur transition hover:border-amber-200/70 hover:shadow-[0_14px_34px_rgba(245,158,11,0.25)] magic-pointer";
const poiClassName =
  "flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-slate-200/70 text-white magic-pointer";

const Button: FC<ButtonProps> = ({
  label,
  children,
  route,
  onClick,
  variant = "primary",
  className,
  title,
}: ButtonProps) => {
  const baseClassName = variant === "poi" ? poiClassName : primaryClassName;
  const combinedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;
  const content: ReactNode = children ?? label;

  if (route) {
    return (
      <Link to={route} className={combinedClassName} title={title}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={onClick}
      title={title}
    >
      {content}
    </button>
  );
};

export default Button;
