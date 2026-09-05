"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ProjectCard, type ProjectCardProject } from "@/components/ProjectCard";

const projects: ProjectCardProject[] = [
  {
    slug: "devflow-cli",
    name: "devflow-cli",
    category: "Developer Tool · CLI",
    href: "/work/devflow-cli",
    caseStudyReady: true,
    description:
      "A Node.js CLI that saves a project's editor, Git branch and startup commands as a reusable session, then starts the development setup with one command.",
    articleUrl:
      "https://dev.to/itsmeangeloo/devflow-a-cli-tool-to-end-your-repetitive-project-setup--4543",
    size: "large",
    media: {
      type: "terminal",
    },
  },
  {
    slug: "zoho-lead-integration",
    name: "Zoho Lead Integration",
    repository: "lead-capture-app",
    category: "CRM Integration",
    href: "/work/zoho-lead-integration",
    caseStudyReady: true,
    description:
      "A Laravel-based lead capture flow that validates demo requests and creates Leads directly in Zoho CRM through a custom OAuth-authenticated integration.",
    size: "compact",
    media: {
      type: "image",
      src: "/projects/zoho-lead-integration/lead-capture-app.png",
      alt: "Lead capture demo request interface integrated with Zoho CRM",
      fit: "contain",
      width: 2786,
      height: 1498,
    },
  },
  {
    slug: "oppa-progtracker",
    name: "oppa-progtracker",
    category: "Project Management Tool",
    href: "/work/oppa-progtracker",
    caseStudyReady: true,
    description:
      "A single-owner project tracker with activity history, pause/resume context, deterministic next-work suggestions, and read-only sharing.",
    size: "compact",
    media: {
      type: "image",
      src: "/projects/oppa-progtracker/oppa-progrtracker.png",
      alt: "OPPA project progress dashboard interface",
      fit: "contain",
      width: 3420,
      height: 1926,
    },
  },
  {
    slug: "sk-nexus",
    name: "sk-nexus",
    category: "Community Platform",
    href: "/work/sk-nexus",
    caseStudyReady: true,
    description:
      "A community platform for public information, events, announcements, transparency records, officer profiles, and anonymous feedback.",
    size: "large",
    media: {
      type: "image",
      src: "/projects/sk-nexus/sk-nexus-homepage.png",
      alt: "SK Nexus community platform homepage and dashboard preview",
      fit: "contain",
      width: 3420,
      height: 1974,
    },
  },
];

const cycleDelay = 3000;
const manualTransitionDelay = 1050;

export function SelectedWork() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [frontIndex, setFrontIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef<number | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
    true,
  );
  const isDocumentVisible = useDocumentVisible();

  useEffect(() => {
    if (
      isExpanded ||
      isPaused ||
      !isDesktop ||
      prefersReducedMotion ||
      !isDocumentVisible
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setFrontIndex((current) => (current + 1) % projects.length);
    }, cycleDelay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    frontIndex,
    isDesktop,
    isDocumentVisible,
    isExpanded,
    isPaused,
    prefersReducedMotion,
  ]);

  const toggleExpanded = () => {
    setIsExpanded((current) => {
      const next = !current;

      if (pauseTimerRef.current !== null) {
        window.clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = null;
      }

      if (next) {
        setIsPaused(true);
      } else {
        setFrontIndex(0);
        pauseTimerRef.current = window.setTimeout(() => {
          setIsPaused(false);
          pauseTimerRef.current = null;
        }, manualTransitionDelay);
      }

      return next;
    });
  };

  const resumeIfReady = () => {
    if (!isExpanded) {
      if (pauseTimerRef.current !== null) {
        window.clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = null;
      }
      setIsPaused(false);
    }
  };

  const pauseRotation = () => {
    if (pauseTimerRef.current !== null) {
      window.clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    setIsPaused(true);
  };

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current !== null) {
        window.clearTimeout(pauseTimerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="px-6 pb-28 pt-24 sm:px-10 sm:pb-32 sm:pt-28 md:px-12 md:pb-36 md:pt-32 lg:px-16"
    >
      <div
        className="reveal-rule mx-auto max-w-[1320px] border-t border-border pt-10 md:pt-12"
        data-reveal
      >
        <div className="grid grid-cols-4 gap-x-6 gap-y-8 md:grid-cols-12">
          <p
            className="col-span-4 text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-secondary md:col-span-3"
            data-reveal
            data-path-target
          >
            01 / Selected Work
          </p>

          <h2
            id="selected-work-heading"
            className="col-span-4 max-w-[19ch] text-pretty text-[clamp(1.45rem,2.45vw,2.45rem)] font-medium leading-[1.12] tracking-normal text-primary md:col-span-6 md:col-start-5"
            data-reveal
          >
            A selection of tools, products and systems I&apos;ve built.
          </h2>

          <div className="col-span-4 md:col-span-2 md:col-start-11 md:justify-self-end">
            <button
              type="button"
              aria-expanded={isExpanded}
              onClick={toggleExpanded}
              className="hidden text-[13px] leading-none text-secondary transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus md:inline-flex"
            >
              {isExpanded ? "Collapse ↙" : "View all projects ↗"}
            </button>
          </div>
        </div>

        <div
          className={`selected-work-showcase mt-20 ${
            isExpanded ? "is-expanded" : "is-stacked"
          } ${isPaused ? "is-paused" : ""}`}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              resumeIfReady();
            }
          }}
          onFocus={pauseRotation}
          onMouseEnter={pauseRotation}
          onMouseLeave={resumeIfReady}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              isExpanded={isExpanded}
              stackLayer={
                (index - frontIndex + projects.length) % projects.length
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function useMediaQuery(query: string, serverSnapshot = false) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", onStoreChange);

      return () => {
        mediaQuery.removeEventListener("change", onStoreChange);
      };
    },
    () => window.matchMedia(query).matches,
    () => serverSnapshot,
  );
}

function useDocumentVisible() {
  return useSyncExternalStore(
    (onStoreChange) => {
      document.addEventListener("visibilitychange", onStoreChange);

      return () => {
        document.removeEventListener("visibilitychange", onStoreChange);
      };
    },
    () => !document.hidden,
    () => true,
  );
}
