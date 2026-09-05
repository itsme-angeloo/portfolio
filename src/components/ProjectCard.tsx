import type { CSSProperties } from "react";
import {
  ProjectMedia,
  type ProjectMediaConfig,
} from "@/components/ProjectMedia";

export type ProjectCardProject = {
  slug: string;
  name: string;
  repository?: string;
  category: string;
  href: string;
  description?: string;
  articleUrl?: string;
  size: "large" | "compact";
  media: ProjectMediaConfig;
  caseStudyReady?: boolean;
};

type ProjectCardProps = {
  project: ProjectCardProject;
  index: number;
  isExpanded: boolean;
  stackLayer: number;
};

export function ProjectCard({
  project,
  index,
  isExpanded,
  stackLayer,
}: ProjectCardProps) {
  return (
    <article
      className="project-sheet"
      data-reveal="project"
      data-expanded={isExpanded}
      data-stack-layer={stackLayer}
      style={
        {
          "--reveal-delay": `${index * 100}ms`,
          "--sheet-index": index,
          "--stack-layer": stackLayer,
          "--sheet-rotation": `${index % 2 === 0 ? -0.45 : 0.45}deg`,
        } as CSSProperties
      }
    >
      <a
        href={project.caseStudyReady ? project.href : "#"}
        data-future-href={project.href}
        className="project-link project-sheet-link group grid h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-focus"
      >
        <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3">
          <p className="text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-tertiary">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-secondary">
            {project.category}
          </p>

          <h3 className="col-span-2 text-[clamp(1.45rem,2.4vw,2.35rem)] font-medium leading-none tracking-normal text-primary">
            {project.name}
          </h3>

          {project.description ? (
            <p className="col-span-2 max-w-[39rem] text-[clamp(0.95rem,1.15vw,1.08rem)] leading-[1.45] text-secondary">
              {project.description}
            </p>
          ) : null}
        </div>

        <ProjectMedia
          projectName={project.name}
          projectIndex={index + 1}
          variant={project.size}
          media={project.media}
        />

        <div className="grid grid-cols-[1fr_auto] gap-x-4 border-t border-border pt-4">
          <p className="text-[13px] font-medium leading-none text-primary">
            View project
          </p>
          <span
            aria-hidden="true"
            className="project-link-arrow pt-1 text-[clamp(1rem,1.3vw,1.2rem)] leading-none text-primary transition-transform duration-300 ease-out"
          >
            ↗
          </span>
        </div>
      </a>
    </article>
  );
}
