export function DevflowPreview() {
  const fields = [
    ["Name", "my-first-session"],
    ["Template", "custom"],
    ["Commands", "1"],
    ["Starts", "0"],
    ["Last Used", "Never"],
  ];
  const commands = [
    "INIT",
    "START",
    "LIST",
    "QUICK",
    "ANALYTICS",
    "EXPORT",
    "IMPORT",
    "DOCTOR",
  ];

  return (
    <div
      className="relative h-full overflow-hidden bg-[#07111f] p-4 text-cyan-50 sm:p-6"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.24),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(124,58,237,0.2),transparent_32%),linear-gradient(135deg,#07111f_0%,#0b1730_52%,#050913_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(125,211,252,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.18)_1px,transparent_1px)] [background-size:38px_38px]" />
      <div className="absolute -right-10 top-8 h-28 w-28 rounded-full border border-cyan-300/15" />
      <div className="absolute bottom-9 left-7 h-20 w-20 rotate-45 border border-violet-300/10" />

      <div className="relative flex h-full gap-4">
        <div className="hidden w-16 flex-col justify-between border-r border-cyan-200/15 pr-3 text-[9px] font-medium uppercase leading-none tracking-[0.16em] text-cyan-100/45 min-[520px]:flex">
          {commands.map((command) => (
            <span
              key={command}
              className="transition-colors duration-300 group-hover:text-cyan-100 group-focus-visible:text-cyan-100"
            >
              {command}
            </span>
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase leading-none tracking-[0.2em] text-cyan-200/75">
                DevFlow
              </p>
              <p className="mt-2 text-[clamp(1.15rem,2vw,1.95rem)] font-medium leading-none text-white">
                Sessions
              </p>
            </div>
            <p className="hidden text-right text-[9px] uppercase leading-[1.7] tracking-[0.16em] text-cyan-100/45 sm:block">
              Faster Setup
              <br />
              More Building
            </p>
          </div>

          <div className="my-3 rounded-[10px] border border-cyan-300/45 bg-[#081426]/88 p-3 font-mono shadow-[0_24px_60px_rgba(0,229,255,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] transition-[border-color,transform,box-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:border-cyan-200/80 group-hover:shadow-[0_28px_72px_rgba(0,229,255,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] group-focus-visible:-translate-y-1 group-focus-visible:border-cyan-200/80 motion-reduce:transform-none sm:my-5 sm:p-5">
            <div className="flex items-center justify-between border-b border-cyan-200/15 pb-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                DevFlow Sessions
              </p>
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
            </div>

            <div className="mt-4 space-y-2.5">
              {fields.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[5rem_1fr] gap-3 text-[10px] leading-none sm:grid-cols-[6.5rem_1fr] sm:text-[11px]"
                >
                  <span className="text-cyan-100/45">{label}</span>
                  <span className="truncate text-cyan-50">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-1.5 border-t border-cyan-200/15 pt-3 text-[9px] leading-none text-cyan-200/62 min-[460px]:grid-cols-3">
              <span>devflow start &lt;name&gt;</span>
              <span>devflow stats</span>
              <span>devflow doctor</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] uppercase leading-none tracking-[0.18em] text-cyan-100/45">
            <span>Local Session</span>
            <span className="hidden min-[460px]:inline">Git Aware</span>
            <span>Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
}
