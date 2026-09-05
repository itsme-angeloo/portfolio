import type { CSSProperties } from "react";
import Link from "next/link";
import { ThemeControl } from "@/components/ThemeControl";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Toolkit", href: "/#toolkit" },
  { label: "Credentials", href: "/#credentials" },
];

export function SiteHeader() {
  return (
    <header
      className="hero-load absolute inset-x-0 top-0 z-30"
      style={{ "--load-delay": "40ms" } as CSSProperties}
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-6 pt-8 sm:px-10 md:grid-cols-[1fr_auto] md:items-start md:px-12 md:pt-10 lg:px-16">
        <Link
          href="/#top"
          className="group w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          aria-label="Angelo Loreno home"
        >
          <span className="block text-[15px] font-medium leading-none tracking-normal text-primary">
            Angelo Loreno
          </span>
          <span className="mt-2 block text-[13px] leading-none text-secondary">
            Software Developer | Technical Support
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-4 text-[13px] leading-none text-secondary sm:gap-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="editorial-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/angelo-l-411b81246/"
                target="_blank"
                rel="noreferrer"
                className="editorial-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <ThemeControl />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
