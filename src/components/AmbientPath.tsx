"use client";

export function AmbientPath() {
  return (
    <div className="ambient-path" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <line
          className="ambient-path-line"
        />
        <path className="ambient-path-corner" d="M 0 0 L 0 0" />
      </svg>
      <span className="ambient-path-dot" />
    </div>
  );
}
