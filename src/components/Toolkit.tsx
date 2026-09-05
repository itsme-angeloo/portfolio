import type { ReactNode } from "react";

type ToolkitGroup = {
  title: string;
  items: {
    name: string;
    meta?: string;
    icon: ToolkitIconName;
  }[];
};

type ToolkitIconName =
  | "laravel"
  | "filament"
  | "react"
  | "digitalocean"
  | "wordpress"
  | "codex"
  | "claude";

const toolkitGroups: ToolkitGroup[] = [
  {
    title: "Development & Infrastructure",
    items: [
      { name: "Laravel", icon: "laravel" },
      { name: "Filament", icon: "filament" },
      { name: "React", icon: "react" },
      { name: "DigitalOcean", icon: "digitalocean" },
      { name: "WordPress", icon: "wordpress" },
    ],
  },
  {
    title: "AI Development",
    items: [
      { name: "Codex", meta: "Model metadata: GPT-5.5", icon: "codex" },
      { name: "Claude Code", meta: "Model metadata: Sonnet 5", icon: "claude" },
    ],
  },
];

export function Toolkit() {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="px-6 pb-24 pt-4 sm:px-10 sm:pb-28 md:px-12 md:pb-32 lg:px-16"
    >
      <div
        className="reveal-rule mx-auto max-w-[1320px] border-t border-border pt-10 md:pt-12"
        data-reveal
      >
        <div className="grid grid-cols-4 gap-x-6 gap-y-12 md:grid-cols-12">
          <h2
            id="toolkit-heading"
            className="col-span-4 text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-secondary md:col-span-3"
            data-reveal
            data-path-target
          >
            03 / Toolkit
          </h2>

          <div className="col-span-4 md:col-span-7 md:col-start-5">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-14">
              {toolkitGroups.map((group, index) => (
                <section
                  key={group.title}
                  aria-labelledby={`toolkit-${index}`}
                  className="border-t border-border pt-5"
                  data-reveal
                >
                  <h3
                    id={`toolkit-${index}`}
                    className="text-[13px] font-medium leading-none text-primary"
                  >
                    {group.title}
                  </h3>

                  <ul className="mt-8 space-y-5">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="group flex items-start gap-3 text-primary transition-transform duration-200 ease-out hover:-translate-y-px"
                      >
                        <ToolkitIcon name={item.icon} />
                        <div className="min-w-0">
                          <p className="text-[clamp(1.1rem,1.45vw,1.4rem)] font-medium leading-none transition-colors duration-200 group-hover:text-primary">
                            {item.name}
                          </p>
                          {item.meta ? (
                            <p className="mt-2 text-[12px] leading-none text-tertiary">
                              {item.meta}
                            </p>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolkitIcon({ name }: { name: ToolkitIconName }) {
  return (
    <span
      aria-hidden="true"
      className="mt-[-0.15rem] inline-flex h-6 w-6 shrink-0 items-center justify-center text-secondary transition-colors duration-200 group-hover:text-primary"
    >
      {toolkitIcons[name]}
    </span>
  );
}

const iconProps = {
  className: "h-5 w-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.55,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const toolkitIcons: Record<ToolkitIconName, ReactNode> = {
  laravel: (
    <svg {...iconProps}>
      <path d="M4.5 5.75 9 3.3l4.5 2.45v5.1L9 13.3l-4.5-2.45z" />
      <path d="M13.5 5.75 18 3.3l1.5.82v5.1L15 11.67l-1.5-.82" />
      <path d="m9 13.3 4.5 2.45 4.5-2.45v-4.1" />
      <path d="M4.5 10.85v5.1L9 18.4l4.5-2.65" />
    </svg>
  ),
  filament: (
    <svg {...iconProps}>
      <path d="M5 5.5h11.5" />
      <path d="M5 12h9.5" />
      <path d="M5 18.5h6.75" />
      <path d="M16.5 5.5 11.75 12l4.75 6.5" />
    </svg>
  ),
  react: (
    <svg {...iconProps}>
      <ellipse cx="12" cy="12" rx="8.4" ry="3.1" />
      <ellipse cx="12" cy="12" rx="8.4" ry="3.1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8.4" ry="3.1" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.35" fill="currentColor" stroke="none" />
    </svg>
  ),
  digitalocean: (
    <svg {...iconProps}>
      <path d="M12.5 4.25a7.25 7.25 0 1 1-7.25 7.25" />
      <path d="M5.25 15.5h3.25v3.25H5.25z" />
      <path d="M8.5 18.75h2.45v2.45H8.5z" />
      <path d="M3.2 13.45h2.05v2.05H3.2z" />
    </svg>
  ),
  wordpress: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M7.25 8.6h2.2" />
      <path d="M14.1 8.6h2.4" />
      <path d="M7.6 8.6 10.7 17l1.35-3.85" />
      <path d="M11.05 8.6 14.2 17l2.55-7.15" />
      <path d="M15.65 8.6c1.2 1.65 1.05 3.2.2 5.25" />
    </svg>
  ),
  codex: (
    <svg {...iconProps}>
      <path d="m9.25 8.25-3.5 3.75 3.5 3.75" />
      <path d="m14.75 8.25 3.5 3.75-3.5 3.75" />
      <path d="m13.15 6.5-2.3 11" />
      <path d="M4.25 4.25h15.5v15.5H4.25z" />
    </svg>
  ),
  claude: (
    <svg {...iconProps}>
      <path d="m12 3.75 2.45 5.8 5.8 2.45-5.8 2.45L12 20.25l-2.45-5.8L3.75 12l5.8-2.45z" />
      <path d="m12 8.25.95 2.8 2.8.95-2.8.95-.95 2.8-.95-2.8-2.8-.95 2.8-.95z" />
    </svg>
  ),
};
