"use client";

import { useState, type ComponentType, type CSSProperties } from "react";

type SocialItem = {
  label: "Facebook" | "Instagram" | "TikTok";
  href: string;
  Icon: ComponentType;
};

const socialItems: SocialItem[] = [
  {
    label: "Facebook",
    href: "#",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "#",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "#",
    Icon: TikTokIcon,
  },
];

export function SocialRail() {
  const [activeLabel, setActiveLabel] = useState<SocialItem["label"] | null>(
    null,
  );

  return (
    <aside
      className="social-load absolute left-6 top-[58svh] z-10 hidden -translate-y-1/2 md:block lg:left-[max(2rem,calc((100vw-1320px)/2+1rem))]"
      style={{ "--load-delay": "500ms" } as CSSProperties}
    >
      <nav
        aria-label="Social links"
        className="social-rail flex flex-col gap-5"
      >
        {socialItems.map(({ label, href, Icon }) => {
          const isActive = activeLabel === label;

          return (
            <a
              key={label}
              href={href}
              // TODO: Replace placeholder href with Angelo's real social profile URL.
              onClick={(event) => event.preventDefault()}
              onBlur={() => setActiveLabel(null)}
              onFocus={() => setActiveLabel(label)}
              onMouseEnter={() => setActiveLabel(label)}
              onMouseLeave={() => setActiveLabel(null)}
              aria-label={`${label} profile`}
              className={`group flex h-10 items-center overflow-hidden whitespace-nowrap text-secondary transition-[width,color,opacity] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus ${
                isActive ? "w-36 text-primary" : "w-10"
              }`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center">
                <Icon />
              </span>
              <span
                className={`text-[12px] leading-none transition-[opacity,transform] duration-300 ease-out ${
                  isActive
                    ? "translate-x-2 opacity-100"
                    : "translate-x-1 opacity-0"
                }`}
              >
                {label} ↗
              </span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M13.4 20v-7h2.35l.36-2.72H13.4V8.54c0-.79.22-1.32 1.35-1.32h1.44V4.78A19.5 19.5 0 0 0 14.1 4c-2.07 0-3.49 1.26-3.49 3.58v2.7H8.27V13h2.34v7h2.79Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.6 7.6h.01" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M13.2 4v10.25a3.55 3.55 0 1 1-3.55-3.55" />
      <path d="M13.2 4c.45 2.85 2.03 4.54 4.8 4.92" />
    </svg>
  );
}
