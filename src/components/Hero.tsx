import { SocialRail } from "@/components/SocialRail";
import type { CSSProperties } from "react";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="hero-cursor-glow relative min-h-svh overflow-hidden"
    >
      <SocialRail />
      <div className="mx-auto grid min-h-svh max-w-[1320px] grid-cols-4 px-6 pb-8 pt-40 sm:px-10 sm:pt-44 md:grid-cols-12 md:px-12 md:pb-10 md:pt-48 lg:px-16">
        <div className="col-span-4 self-center md:col-span-8 md:col-start-5 md:self-end md:pb-[18svh] lg:col-span-7 lg:col-start-5">
          <h1
            id="hero-heading"
            className="hero-load max-w-[12ch] text-balance text-[clamp(3.6rem,9vw,8.8rem)] font-medium leading-[0.93] tracking-normal text-primary"
            style={{ "--load-delay": "140ms" } as CSSProperties}
          >
            I build useful software for people and the web.
          </h1>

          <p
            className="hero-load mt-8 max-w-[34rem] text-pretty text-[clamp(1.05rem,1.5vw,1.45rem)] font-normal leading-[1.45] text-secondary md:mt-10"
            style={{ "--load-delay": "240ms" } as CSSProperties}
          >
            Developer tools, web applications, automation and integrations —
            designed with simplicity in mind.
          </p>
        </div>

        <p
          className="hero-load col-span-2 mt-20 self-end text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-tertiary md:col-span-3 md:mt-0 md:pb-12"
          style={{ "--load-delay": "340ms" } as CSSProperties}
        >
          PH / 2026
        </p>

        <div
          className="hero-load col-span-2 mt-20 self-end justify-self-end md:col-span-3 md:col-start-10 md:mt-0 md:pb-12"
          style={{ "--load-delay": "400ms" } as CSSProperties}
        >
          <a
            href="#work"
            className="inline-flex text-[13px] leading-none text-secondary transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            ↓ Selected work
          </a>
        </div>
      </div>
    </section>
  );
}
