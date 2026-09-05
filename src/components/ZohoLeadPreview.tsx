export function ZohoLeadPreview() {
  const fields = ["Full Name", "Email", "Company", "Phone", "Project Type", "Budget"];
  const nodes = ["FORM", "LARAVEL", "OAUTH", "ZOHO CRM"];

  return (
    <div
      className="relative h-full overflow-hidden bg-[#080b1a] p-4 text-white sm:p-6"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_45%,rgba(168,85,247,0.28),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(59,130,246,0.16),transparent_28%),linear-gradient(135deg,#070a18_0%,#10122c_56%,#070714_100%)]" />
      <div className="absolute left-8 top-10 h-32 w-32 rounded-full border border-violet-200/15" />
      <div className="absolute left-14 top-16 h-20 w-20 rounded-full border border-fuchsia-200/20" />
      <div className="absolute left-[28%] top-[45%] h-px w-[34%] bg-gradient-to-r from-violet-200/55 to-transparent" />

      <div className="relative grid h-full grid-cols-[0.9fr_1.1fr] gap-4 sm:gap-6">
        <div className="relative hidden min-w-0 flex-col justify-between py-3 min-[500px]:flex">
          <div>
            <p className="text-[10px] font-medium uppercase leading-none tracking-[0.2em] text-violet-100/65">
              Lead Flow
            </p>
            <p className="mt-3 max-w-[8rem] text-[clamp(1rem,1.7vw,1.55rem)] font-medium leading-[1.05] text-white">
              Website to CRM
            </p>
          </div>

          <div className="relative h-24">
            <span className="absolute left-4 top-7 h-3 w-3 rounded-full bg-violet-200 shadow-[0_0_18px_rgba(216,180,254,0.65)]" />
            <span className="absolute left-16 top-2 h-2 w-2 rounded-full bg-blue-200/75" />
            <span className="absolute left-24 top-16 h-2.5 w-2.5 rounded-full bg-fuchsia-200/70" />
            <span className="absolute left-8 top-9 h-px w-24 rotate-[-18deg] bg-violet-100/25" />
            <span className="absolute left-9 top-11 h-px w-28 rotate-[28deg] bg-violet-100/20" />
          </div>

          <div className="space-y-2 text-[9px] uppercase leading-none tracking-[0.14em] text-violet-100/50">
            {nodes.map((node) => (
              <p key={node}>{node}</p>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 rounded-[12px] border border-violet-200/28 bg-[#11142a]/90 p-4 shadow-[0_22px_70px_rgba(139,92,246,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-focus-visible:-translate-y-1 motion-reduce:transform-none sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-violet-100">
              Request a Demo
            </p>
            <span className="rounded-full border border-violet-200/20 px-2 py-1 text-[8px] uppercase tracking-[0.16em] text-violet-100/55">
              OAuth
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {fields.map((field, index) => (
              <div
                key={field}
                className={`rounded-[6px] border border-white/10 bg-white/[0.055] p-2.5 ${
                  index > 3 ? "hidden min-[520px]:block" : ""
                }`}
              >
                <p className="text-[8px] leading-none text-violet-100/48">
                  {field}
                </p>
                <div className="mt-3 h-px bg-violet-100/28" />
              </div>
            ))}
          </div>

          <div className="mt-4 flex h-8 items-center justify-center rounded-[6px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[9px] font-semibold uppercase leading-none tracking-[0.14em] text-white shadow-[0_12px_28px_rgba(168,85,247,0.25)]">
            Submit Request
          </div>

          <div className="relative mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <div className="absolute left-5 right-5 top-[1.15rem] h-px bg-violet-100/22" />
            <span className="absolute left-5 top-[0.88rem] h-2 w-2 rounded-full bg-violet-100 shadow-[0_0_14px_rgba(221,214,254,0.7)] transition-transform duration-700 ease-out group-hover:translate-x-[calc(100vw*0.11)] group-focus-visible:translate-x-[calc(100vw*0.11)] motion-reduce:transform-none" />
            {nodes.map((node) => (
              <div key={node} className="relative text-center">
                <span className="mx-auto block h-2.5 w-2.5 rounded-full border border-violet-100/35 bg-[#11142a]" />
                <p className="mt-2 text-[7px] font-medium uppercase leading-none tracking-[0.12em] text-violet-100/58">
                  {node}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
