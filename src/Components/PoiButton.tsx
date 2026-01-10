import type { ReactNode } from "react";

type PoiButtonProps = {
  title: string;
  onClick: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  ariaPressed?: boolean;
};

const PoiButton = ({
  title,
  onClick,
  children,
  ariaLabel,
  ariaPressed,
}: PoiButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-slate-200/70 text-white magic-pointer"
    >
      {children}
    </button>
  );
};

export default PoiButton;
