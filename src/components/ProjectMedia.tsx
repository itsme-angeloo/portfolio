"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { DevflowTerminalPreview } from "@/components/DevflowTerminalPreview";

type MediaFit = "cover" | "contain";

type ImageMedia = {
  type: "image";
  src: string;
  alt: string;
  fit?: MediaFit;
  position?: string;
  width: number;
  height: number;
};

type VideoMedia = {
  type: "video";
  src: string;
  poster?: string;
  alt?: string;
  fit?: MediaFit;
  position?: string;
};

type PlaceholderMedia = {
  type: "placeholder";
};

type TerminalMedia = {
  type: "terminal";
};

export type ProjectMediaConfig =
  | ImageMedia
  | VideoMedia
  | PlaceholderMedia
  | TerminalMedia;

type ProjectMediaProps = {
  projectName: string;
  projectIndex: number;
  variant: "large" | "compact";
  media: ProjectMediaConfig;
};

const aspectClassByVariant = {
  large: "aspect-[16/10]",
  compact: "aspect-[16/10]",
};

export function ProjectMedia({
  projectName,
  projectIndex,
  variant,
  media,
}: ProjectMediaProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const fit =
    media.type === "placeholder" || media.type === "terminal"
      ? "cover"
      : media.fit ?? "cover";
  const objectPosition =
    media.type === "placeholder" || media.type === "terminal"
      ? undefined
      : media.position ?? "center";
  const shouldReveal = media.type !== "placeholder";
  const mediaRatio =
    media.type === "image" ? `${media.width} / ${media.height}` : "1000 / 560";

  return (
    <div
      className={`${aspectClassByVariant[variant]} project-media-frame relative flex items-center justify-center overflow-hidden`}
      data-media-frame
      data-reveal-media
    >
      {shouldReveal ? (
        <div
          className="project-screenshot-wrap relative max-h-full w-full overflow-hidden rounded-[8px] border border-border bg-background"
          style={{ aspectRatio: mediaRatio }}
        >
          {media.type === "image" ? (
            <Image
              src={media.src}
              alt={media.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 46vw, (min-width: 768px) 80vw, 100vw"
              className={`project-media-visual ${
                fit === "contain" ? "object-contain" : "object-cover"
              }`}
              style={{ objectPosition }}
            />
          ) : null}

          {media.type === "terminal" ? (
            <div
              className="project-media-visual absolute inset-0"
              aria-hidden="true"
            >
              <DevflowTerminalPreview />
            </div>
          ) : null}

          {media.type === "video" ? (
            prefersReducedMotion && media.poster ? (
              <Image
                src={media.poster}
                alt={media.alt ?? `${projectName} project preview`}
                fill
                sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
                className={
                  fit === "contain" ? "object-contain p-5" : "object-cover"
                }
                style={{ objectPosition }}
              />
            ) : (
              <video
                aria-label={
                  media.alt ?? `${projectName} project screen recording`
                }
                autoPlay={!prefersReducedMotion}
                muted
                loop={!prefersReducedMotion}
                playsInline
                preload="metadata"
                poster={media.poster}
                className={`h-full w-full ${
                  fit === "contain" ? "object-contain p-5" : "object-cover"
                }`}
                style={{ objectPosition }}
              >
                <source src={media.src} />
              </video>
            )
          ) : null}
          <span className="project-media-veil" />
        </div>
      ) : null}

      {media.type === "placeholder" ? (
        <div className="absolute inset-3 rounded-[7px] border border-border/70">
          <p className="absolute left-4 top-4 text-[11px] font-medium leading-none tracking-[0.14em] text-tertiary">
            {String(projectIndex).padStart(2, "0")}
          </p>

          <div
            className={`absolute ${
              variant === "large"
                ? "bottom-5 left-4 sm:bottom-6 sm:left-6"
                : "bottom-5 left-4 sm:bottom-6 sm:left-5"
            }`}
          >
            <p className="text-[12px] font-medium leading-none text-primary/75">
              {projectName}
            </p>
            <p className="mt-2 text-[11px] uppercase leading-none tracking-[0.12em] text-tertiary">
              Media / pending
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    mediaQuery.removeEventListener("change", onStoreChange);
  };
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return true;
}
