export function Footer() {
  return (
    <footer className="relative z-10 px-6 pb-8 pt-4 sm:px-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1320px]">
        <div
          className="reveal-rule grid grid-cols-1 gap-8 border-t border-border pb-20 pt-10 sm:pb-24 md:grid-cols-12 md:pb-24 md:pt-12"
          data-reveal
        >
          <div className="md:col-span-6 md:col-start-5" data-reveal>
            <h2
              className="max-w-[19ch] text-[clamp(1.75rem,3vw,3.25rem)] font-medium leading-[1.06] tracking-normal text-primary"
              data-path-target
            >
              Have a product, workflow, or technical problem worth solving?
            </h2>

            <p className="mt-6 max-w-[34rem] text-[clamp(1.02rem,1.35vw,1.22rem)] leading-[1.5] text-secondary">
              I&apos;m open to full-time software roles, freelance projects,
              and collaborations where I can build, automate, integrate, or
              improve existing systems.
            </p>

            <a
              href="mailto:angelogarcialoreno@gmail.com"
              className="group mt-10 inline-flex items-center border-b border-primary pb-1 text-[clamp(1.05rem,1.55vw,1.35rem)] font-medium leading-none text-primary transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              Start a conversation{" "}
              <span className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                →
              </span>
            </a>

            <nav aria-label="Contact links" className="mt-10">
              <ul className="flex flex-wrap gap-x-8 gap-y-4 text-[14px] leading-none text-secondary">
                <li>
                  <a
                    href="https://www.linkedin.com/in/angelo-l-411b81246/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/itsme-angeloo"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                  >
                    GitHub ↗
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 border-t border-border pt-8 text-[13px] leading-none text-secondary md:grid-cols-[1fr_auto] md:items-end">
        <div data-reveal>
          <p className="font-medium text-primary">Angelo Loreno</p>
          <p className="mt-2">Software Developer | Technical Support</p>
        </div>

        <div
          className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end"
          data-reveal
        >
          <a
            href="#top"
            className="transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            Back to top
          </a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
