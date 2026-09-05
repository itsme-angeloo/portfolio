import Link from "next/link";

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectCaseNavigationProps = {
  previous?: ProjectLink;
  next?: ProjectLink;
};

export function ProjectCaseNavigation({
  previous,
  next,
}: ProjectCaseNavigationProps) {
  return (
    <nav
      aria-label="Project navigation"
      className="px-6 pb-24 pt-4 sm:px-10 sm:pb-28 md:px-12 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1320px] gap-6 border-t border-border pt-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Link
          href="/#work"
          className="text-[14px] leading-none text-secondary transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
        >
          ← Back to Selected Work
        </Link>

        <div className="hidden h-px w-16 bg-border md:block" aria-hidden="true" />

        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
          {previous ? (
            <Link
              href={previous.href}
              className="text-[14px] leading-none text-secondary transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              ← {previous.label}
            </Link>
          ) : null}
          {next ? (
            <Link
              href={next.href}
              className="text-[14px] leading-none text-secondary transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              {next.label} →
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
