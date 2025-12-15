export default function Divider() {
  return (
    <div className="relative flex items-center w-full py-6">
      {/* Left line */}
      <div className="flex-1 h-px bg-amber-300/40" />

      {/* Center icon */}
      <div className="mx-4 text-amber-300/70">
        <SparkleIcon className="h-6 w-6" />
      </div>

      {/* Right line */}
      <div className="flex-1 h-px bg-amber-300/40" />
    </div>
  );
}

function SparkleIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2l1.3 5.2L18 9l-4.7 1.8L12 16l-1.3-5.2L6 9l4.7-1.8L12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 3.5l.6 2.2 2.1.6-2.1.6-.6 2.2-.6-2.2-2.1-.6 2.1-.6.6-2.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}
