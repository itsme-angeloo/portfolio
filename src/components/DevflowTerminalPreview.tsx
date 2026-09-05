export function DevflowTerminalPreview() {
  const lines = [
    ["✓", "Checking Git repository..."],
    ["✓", "Switching to main"],
    ["✓", "Opening in VS Code"],
    ["✓", "Starting project commands..."],
  ];

  return (
    <div className="h-full rounded-[9px] border border-zinc-700 bg-[#101214] text-zinc-100 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-[11px] leading-none text-zinc-400">
          angeloloreno — zsh
        </span>
      </div>

      <div className="space-y-3 px-4 py-4 font-mono text-[clamp(0.72rem,1.18vw,0.95rem)] leading-none">
        <p>
          <span className="text-zinc-500">$</span> devflow start my-app
          <span className="ml-1 inline-block h-[1em] w-[0.52em] translate-y-[2px] bg-zinc-100/70 opacity-60 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:opacity-70" />
        </p>

        <div className="space-y-2.5 pt-1 text-zinc-300">
          {lines.map(([status, text]) => (
            <p key={text}>
              <span className="text-emerald-400">{status}</span> {text}
            </p>
          ))}
        </div>

        <p className="pt-1 text-emerald-300">Development session ready.</p>
        <p className="hidden pt-2 text-zinc-500 min-[520px]:block">
          <span>$</span> devflow doctor
        </p>
      </div>
    </div>
  );
}
