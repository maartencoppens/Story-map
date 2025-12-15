export default function ScrollHint() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
      <div className="flex flex-col items-center gap-3 text-amber-300/75">
        <div className="text-xs tracking-[0.25em] text-amber-100/55">
          SCROLL
        </div>

        {/* line + sparkle */}
        <div className="flex items-center gap-4 opacity-80">
          <span className="h-px w-24 bg-amber-300/30" />
          <Sparkle className="h-4 w-4" />
          <span className="h-px w-24 bg-amber-300/30" />
        </div>

        {/* Arrows */}
        <div className="flex flex-col items-center leading-none">
          <ArrowDown className="h-5 w-5 animate-scroll" />
          <ArrowDown className="h-5 w-5 -mt-2 opacity-40 animate-scroll-delayed" />
        </div>
      </div>
    </div>
  );
}

function ArrowDown({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 10l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sparkle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3l1.2 4.6L18 9l-4.8 1.4L12 15l-1.2-4.6L6 9l4.8-1.4L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
