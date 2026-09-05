export function SkNexusPreview() {
  const metrics = [
    ["PROGRAMS", "18"],
    ["YOUTH REACHED", "1,240"],
    ["BUDGET", "72%"],
  ];

  return (
    <div
      className="relative h-full overflow-hidden bg-[#053b3a] p-4 text-white sm:p-6"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(153,246,228,0.24),transparent_32%),radial-gradient(circle_at_14%_80%,rgba(45,212,191,0.18),transparent_28%),linear-gradient(135deg,#04302f_0%,#08605c_58%,#074541_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(204,251,241,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(204,251,241,0.18)_1px,transparent_1px)] [background-size:42px_42px]" />
      <span className="absolute left-14 top-14 h-1.5 w-1.5 rounded-full bg-mint-100 bg-teal-100/75" />
      <span className="absolute bottom-14 left-32 h-1 w-1 rounded-full bg-teal-100/60" />

      <div className="relative grid h-full grid-cols-[0.75fr_1.25fr] gap-4 sm:gap-6">
        <div className="flex min-w-0 flex-col justify-between py-2">
          <div>
            <p className="text-[10px] font-medium uppercase leading-none tracking-[0.2em] text-teal-100/70">
              SK Nexus
            </p>
            <p className="mt-3 max-w-[10rem] text-[clamp(1.15rem,2vw,1.9rem)] font-medium leading-[1.04] text-white">
              Open Community Information
            </p>
          </div>

          <div className="hidden space-y-3 text-[9px] uppercase leading-none tracking-[0.14em] text-teal-100/58 min-[500px]:block">
            <p>Transparency</p>
            <p>Events</p>
            <p>Community Services</p>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="absolute -left-5 top-11 hidden rounded-[8px] border border-teal-100/22 bg-teal-950/45 px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-teal-50/72 min-[520px]:block">
            Budget Report
            <br />
            Q3
          </div>
          <div className="absolute -right-1 bottom-8 hidden rounded-[8px] border border-teal-100/22 bg-teal-950/50 px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-teal-50/72 min-[520px]:block">
            Upcoming
            <br />
            Aug 15
          </div>

          <div className="h-full rounded-[12px] border border-teal-100/26 bg-teal-950/55 p-4 shadow-[0_24px_70px_rgba(1,78,74,0.42),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[1px] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-focus-visible:-translate-y-1 motion-reduce:transform-none sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-medium uppercase leading-none tracking-[0.16em] text-teal-50/68">
                Transparency
              </p>
              <span className="h-2 w-2 rounded-full bg-teal-100 shadow-[0_0_16px_rgba(153,246,228,0.72)]" />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {metrics.map(([label, value], index) => (
                <div key={label} className="rounded-[7px] border border-teal-100/16 bg-white/[0.075] p-2.5">
                  <p className="text-[8px] leading-none text-teal-50/55">{label}</p>
                  <p
                    className={`mt-2 text-[clamp(0.9rem,1.5vw,1.2rem)] font-medium leading-none ${
                      index === 2 ? "text-amber-200" : "text-white"
                    } transition-colors duration-300 group-hover:text-teal-50`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {[78, 46, 64, 32].map((width, index) => (
                <div key={width} className="grid grid-cols-[2.5rem_1fr] items-center gap-3">
                  <span className="text-[8px] uppercase tracking-[0.12em] text-teal-50/48">
                    0{index + 1}
                  </span>
                  <div className="h-2 overflow-hidden rounded-full bg-teal-950/65">
                    <span
                      className="block h-full rounded-full bg-teal-100/70 transition-[width,background-color] duration-500 group-hover:bg-teal-50 motion-reduce:transition-none"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
