import type { FC } from "react";
import type { CardProps } from "../types/types";

const Card: FC<CardProps> = ({
  text = "Content",
  className,
  children,
}: CardProps) => {
  const content = children ?? (
    <p className="text-lg text-amber-50/80">{text}</p>
  );

  return (
    <section
      className={`relative mx-auto max-w-4xl px-6 py-10 flex-1 h-full ${
        className ?? ""
      }`}
    >
      <div className="relative rounded-2xl bg-slate-950/40 backdrop-blur">
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/25" />
        <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-b from-amber-400/10 via-transparent to-transparent" />
        <div className="mt-8 w-full rounded-xl border border-amber-200/15 bg-amber-950/25 px-8 py-7">
          {content}
        </div>
      </div>
    </section>
  );
};

export default Card;
