export default function Card({ text = "Content" }) {
  return (
    <section className="relative mx-auto max-w-3xl px-6 py-10 flex-1 h-full">
      <div className="relative rounded-2xl bg-slate-950/40 backdrop-blur">
        {/* outer line */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/25" />
        {/* inner line */}
        <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/10" />

        {/* glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-b from-amber-400/10 via-transparent to-transparent" />

        {/* content */}
        <div className="mt-8 w-full rounded-xl border border-amber-200/15 bg-amber-950/25 px-8 py-7">
          <p className="text-lg leading-relaxed text-amber-50/80">{text}</p>
        </div>
      </div>
    </section>
  );
}
