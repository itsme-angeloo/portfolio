export function OppaPreview() {
  const metrics = [
    ["ACTIVE PROJECTS", "6"],
    ["ACTIVITIES", "57"],
    ["SHARE LINKS", "1"],
  ];
  const projects = [
    "n8n Automation Social Media Posts",
    "Argon DataBridge",
    "Support and Maintenance",
  ];

  return (
    <div
      className="relative h-full overflow-hidden bg-[#0d0d0e] p-4 text-zinc-100 sm:p-5"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#0a0a0b_0%,#151516_55%,#0b0b0c_100%)]" />

      <div className="relative grid h-full grid-cols-[5.2rem_1fr] gap-3 sm:grid-cols-[7rem_1fr] sm:gap-4">
        <aside className="rounded-[9px] border border-white/10 bg-[#151516] p-3">
          <p className="text-[clamp(1rem,1.7vw,1.55rem)] font-semibold leading-none text-white">
            OPPA
          </p>
          <p className="mt-2 hidden text-[9px] leading-[1.35] text-zinc-500 min-[520px]:block">
            Angelo&apos;s Progress OS
          </p>

          <div className="mt-5 space-y-3 text-[8px] uppercase leading-none tracking-[0.12em] text-zinc-500 sm:text-[9px]">
            {["Dashboard", "Projects", "Activity Log", "Suggestions", "Share Links"].map((item, index) => (
              <p
                key={item}
                className={index === 0 ? "text-zinc-100" : ""}
              >
                {item}
              </p>
            ))}
          </div>
        </aside>

        <main className="min-w-0 rounded-[10px] border border-white/10 bg-[#181819] p-3 shadow-[0_22px_60px_rgba(0,0,0,0.32)] transition-[background-color,transform] duration-300 ease-out group-hover:-translate-y-1 group-hover:bg-[#1c1c1d] group-focus-visible:-translate-y-1 motion-reduce:transform-none sm:p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[8px] font-medium uppercase leading-none tracking-[0.16em] text-zinc-500 sm:text-[9px]">
                Owner Workspace
              </p>
              <p className="mt-2 text-[clamp(0.95rem,1.65vw,1.35rem)] font-medium leading-none text-white">
                Dashboard
              </p>
            </div>
            <div className="hidden rounded-full border border-white/10 px-2 py-1 text-[8px] uppercase tracking-[0.14em] text-zinc-500 min-[520px]:block">
              Live Context
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {metrics.map(([label, value]) => (
              <div key={label} className="rounded-[7px] border border-white/10 bg-[#101011] p-2">
                <p className="text-[8px] leading-none text-zinc-500">{label}</p>
                <p className="mt-2 text-[clamp(0.95rem,1.6vw,1.3rem)] font-medium leading-none text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 min-[520px]:grid-cols-[1fr_8rem]">
            <div className="space-y-2">
              {projects.map((project, index) => (
                <div key={project} className="rounded-[7px] border border-white/10 bg-[#111112] p-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="truncate text-[10px] font-medium leading-none text-zinc-100">
                      {project}
                    </p>
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-400/70" />
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/8">
                    <span
                      className="block h-full rounded-full bg-zinc-100/75 transition-[width,background-color] duration-500 group-hover:bg-white motion-reduce:transition-none"
                      style={{ width: `${72 - index * 18}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden rounded-[7px] border border-white/10 bg-[#101011] p-3 min-[520px]:block">
              <p className="text-[8px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                What&apos;s Next
              </p>
              <ol className="mt-4 space-y-3 text-[9px] leading-tight text-zinc-300">
                <li>Resume Zoho integration</li>
                <li>Review share link</li>
                <li>Log next activity</li>
              </ol>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
