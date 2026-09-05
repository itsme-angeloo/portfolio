export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-6 pb-24 pt-22 sm:px-10 sm:pb-28 sm:pt-24 md:px-12 md:pb-32 md:pt-28 lg:px-16"
    >
      <div
        className="reveal-rule mx-auto max-w-[1320px] border-t border-border pt-10 md:pt-12"
        data-reveal
      >
        <div className="grid grid-cols-4 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-20">
          <h2
            id="about-heading"
            className="col-span-4 text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-secondary md:col-span-3"
            data-reveal
            data-path-target
          >
            02 / About
          </h2>

          <div
            className="col-span-4 max-w-[42rem] text-pretty text-[clamp(1.12rem,1.55vw,1.55rem)] font-normal leading-[1.48] tracking-normal text-primary md:col-span-7 md:col-start-5"
            data-reveal
          >
            <p>
              I&apos;m Angelo, a software developer with hands-on experience
              across software development and technical support. I enjoy
              building products, working with AI models, and creating
              lightweight automations that make systems easier to use.
            </p>

            <p className="mt-8">
              I prefer thoughtful execution over rushing — understanding the
              problem first, moving efficiently, and delivering work that is
              reliable and complete.
            </p>
          </div>

          <div
            className="col-span-4 max-w-[19rem] border-t border-border pt-5 md:col-span-4 md:col-start-2 md:mt-4"
            data-reveal
          >
            <p className="mb-4 text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-tertiary">
              Personal API
            </p>
            <p className="text-[clamp(1rem,1.25vw,1.2rem)] font-medium leading-[1.35] text-primary">
            The API between ideas, managers, and AI models.
            </p>
          </div>

          <p
            className="col-span-4 max-w-[31rem] text-pretty text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.48] text-secondary md:col-span-5 md:col-start-8"
            data-reveal
          >
            I care about finishing what I start and delivering work I can stand
            behind.
          </p>
        </div>
      </div>
    </section>
  );
}
