import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { AmbientPath } from "@/components/AmbientPath";
import { MotionController } from "@/components/MotionController";
import { ProjectCaseNavigation } from "@/components/ProjectCaseNavigation";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "OPPA / Progress Tracker | Angelo Loreno",
  description:
    "A technical case study for OPPA, a personal project tracker built around activity logging, pause/resume context, and deterministic next-work suggestions.",
};

const metadataItems = [
  ["Role", "Personal Project"],
  ["Type", "Project Management Tool"],
  ["Maturity", "Functional MVP · Active Development"],
  ["Stack", "Next.js 16 · Supabase · PostgreSQL"],
];

const coreLoop = [
  "Create project",
  "Log activity",
  "Work progresses",
  "Pause with context",
  "Resume later",
  "Evaluate recent state",
  "Surface What's Next",
];

const capabilityGroups = [
  {
    title: "Project state",
    body: "Project CRUD, activity logging, and pause/resume are treated as one working loop rather than separate record-keeping screens.",
  },
  {
    title: "Domain rules",
    body: "Pause reason is required at the database layer through a PostgreSQL CHECK constraint, so the rule survives UI changes or regressions.",
  },
  {
    title: "Next-work guidance",
    body: "A deterministic scoring engine evaluates project state and produces inspectable suggestions without a network call or LLM dependency.",
  },
  {
    title: "Guest sharing",
    body: "Read-only share links expose a narrow shared dashboard view without granting anonymous users direct table access.",
  },
];

const architectureItems = [
  ["Frontend", "Next.js 16 application"],
  ["Auth", "Supabase Auth"],
  ["Data", "PostgreSQL + Row Level Security"],
  ["Sharing", "SECURITY DEFINER get_shared_dashboard RPC"],
  ["Logic", "Local deterministic scoring engine"],
];

const stackItems = [
  "Next.js 16",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Supabase Auth",
  "Row Level Security",
];

const implementedItems = [
  "projects",
  "activity logging",
  "pause/resume",
  "deterministic suggestions",
  "guest sharing",
  "auth/RLS protection",
];

const developingItems = [
  "epics/tasks exist in the database schema but have no UI",
  "optional AI narration is currently only a stub",
  "suggestion_cache and /api/suggestions/refresh exist but are not wired into the active product flow",
  "automated test suite has not yet been introduced",
  "CI has not yet been introduced",
];

export default function OppaProgressTrackerPage() {
  return (
    <>
      <MotionController />
      <AmbientPath />
      <SiteHeader />
      <main id="top" className="relative z-10">
        <article>
          <section className="px-6 pb-20 pt-40 sm:px-10 sm:pb-24 sm:pt-44 md:px-12 lg:px-16">
            <div className="mx-auto max-w-[1320px]">
              <div className="grid grid-cols-4 gap-x-6 gap-y-12 md:grid-cols-12">
                <p
                  className="col-span-4 text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-secondary md:col-span-3"
                  data-reveal
                >
                  03 / Project Management Tool
                </p>

                <div className="col-span-4 md:col-span-7 md:col-start-5">
                  <h1
                    className="max-w-[11ch] text-pretty text-[clamp(3rem,8vw,7.8rem)] font-medium leading-[0.94] tracking-normal text-primary"
                    data-reveal
                  >
                    OPPA / Progress Tracker
                  </h1>
                  <p
                    className="mt-8 max-w-[16ch] text-pretty text-[clamp(1.6rem,3vw,3rem)] font-medium leading-[1.05] text-primary"
                    data-reveal
                  >
                    A project tracker designed to preserve context — not just
                    tasks.
                  </p>
                  <p
                    className="mt-7 max-w-[40rem] text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.6] text-secondary"
                    data-reveal
                  >
                    Built around activity history, pause/resume context, and a
                    deterministic recommendation engine that helps surface what
                    to work on next.
                  </p>
                </div>

                <dl
                  className="col-span-4 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-6 md:col-span-12 md:mt-10 md:grid-cols-4"
                  data-reveal
                >
                  {metadataItems.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-tertiary">
                        {label}
                      </dt>
                      <dd className="mt-3 text-[14px] leading-snug text-primary">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section className="px-6 pb-24 sm:px-10 sm:pb-28 md:px-12 lg:px-16">
            <div className="mx-auto max-w-[1320px]" data-reveal>
              <div className="rounded-[12px] border border-border bg-surface-soft p-2">
                <Image
                  src="/projects/oppa-progtracker/oppa-progrtracker.png"
                  alt="OPPA project progress dashboard interface"
                  width={3420}
                  height={1926}
                  quality={90}
                  priority
                  sizes="(min-width: 1320px) 1320px, 100vw"
                  className="h-auto w-full rounded-[8px] border border-border object-contain"
                />
              </div>
            </div>
          </section>

          <CaseSection
            kicker="The Problem"
            title="Resuming work is often harder than starting it."
          >
            <div className="grid gap-8 md:grid-cols-[0.58fr_0.42fr] md:gap-14">
              <div className="space-y-5 text-[clamp(1.08rem,1.35vw,1.28rem)] leading-[1.6] text-primary">
                <p>
                  Projects become difficult to resume when the useful context
                  lives outside the tracker: what changed, why work paused, and
                  what would be reasonable to do next.
                </p>
                <p className="text-secondary">
                  A normal task list can show what exists. OPPA is built around
                  preserving the surrounding project state, so active work does
                  not restart from memory every time.
                </p>
              </div>

              <div className="border-t border-border pt-5">
                <p className="text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-tertiary">
                  Context OPPA keeps visible
                </p>
                <ul className="mt-6 space-y-4 text-[14px] leading-snug text-secondary">
                  <li>What was last worked on</li>
                  <li>Why a project was paused</li>
                  <li>What changed in recent activity</li>
                  <li>What the next action might be</li>
                </ul>
              </div>
            </div>
          </CaseSection>

          <CaseSection kicker="Core Loop" title="A workflow for continuity.">
            <ol className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border md:grid-cols-7">
              {coreLoop.map((step, index) => (
                <li
                  key={step}
                  className="bg-background p-5 md:min-h-36"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
                >
                  <p className="text-[11px] font-medium leading-none text-tertiary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-8 text-[15px] font-medium leading-snug text-primary">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection
            kicker="Verified Capabilities"
            title="Small pieces, connected as a product loop."
          >
            <div className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border md:grid-cols-2">
              {capabilityGroups.map((item) => (
                <div key={item.title} className="bg-background p-6" data-reveal>
                  <h3 className="text-[15px] font-medium leading-none text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[14px] leading-[1.6] text-secondary">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            kicker="Engineering Focus"
            title="The recommendation layer is deterministic on purpose."
          >
            <div className="grid gap-10 md:grid-cols-[0.45fr_0.55fr] md:gap-16">
              <div className="space-y-5 text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.65] text-secondary">
                <p>
                  The project&apos;s <code className="text-primary">lib/scoring.ts</code>{" "}
                  module is a pure scoring function. It evaluates project state
                  and returns next-work suggestions without calling a network
                  service or depending on an LLM.
                </p>
                <p>
                  That makes the output predictable, inspectable, fast, and
                  easier to reason about than opaque recommendation output.
                </p>
                <p className="text-tertiary">
                  The optional narration layer exists as a future extension; it
                  is currently a stub.
                </p>
              </div>

              <div className="rounded-[12px] border border-border bg-surface-soft p-5">
                <div className="grid gap-3 text-[13px] leading-none">
                  {[
                    "Project state",
                    "Recent activity",
                    "Pause context",
                    "Deterministic scoring",
                    "What's Next",
                  ].map((node, index) => (
                    <div
                      key={node}
                      className="grid grid-cols-[auto_1fr] items-center gap-4"
                    >
                      <span className="text-[11px] text-tertiary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-[8px] border border-border bg-background px-4 py-4 text-primary">
                        {node}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CaseSection>

          <CaseSection
            kicker="Safe Guest Sharing"
            title="Public sharing uses a narrow database function."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <PathPanel
                title="Guest"
                steps={[
                  "Share link",
                  "get_shared_dashboard()",
                  "Filtered project view",
                ]}
              />
              <PathPanel
                title="Authenticated Owner"
                steps={[
                  "Supabase Auth",
                  "RLS-protected tables",
                  "Full private workspace",
                ]}
              />
            </div>
            <p className="mt-8 max-w-[46rem] text-[15px] leading-[1.65] text-secondary">
              Instead of opening tables to anonymous reads, OPPA exposes a
              PostgreSQL <code className="text-primary">SECURITY DEFINER</code>{" "}
              RPC designed specifically for the shared dashboard use case. The
              function returns only appropriate shared data and strips private
              fields.
            </p>
          </CaseSection>

          <CaseSection kicker="Data Boundary" title="Protection lives at the data layer.">
            <div className="grid gap-8 md:grid-cols-[0.5fr_0.5fr] md:gap-12">
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.65] text-secondary">
                OPPA uses Supabase, PostgreSQL, Supabase Auth, and Row Level
                Security. Data access is ultimately enforced through PostgreSQL
                Row Level Security, rather than relying solely on client-side
                route handling.
              </p>
              <p className="border-t border-border pt-5 text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.65] text-secondary md:border-l md:border-t-0 md:pl-8 md:pt-0">
                Pause reason is also enforced through a database CHECK
                constraint. Application validation can be bypassed or regress;
                the database keeps that domain rule intact.
              </p>
            </div>
          </CaseSection>

          <CaseSection kicker="Architecture" title="A compact full-stack system.">
            <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
              <div className="rounded-[12px] border border-border bg-surface-soft p-5">
                <div className="rounded-[9px] border border-border bg-background p-5 text-center text-[15px] font-medium text-primary">
                  Next.js application
                </div>
                <div className="mx-auto h-8 w-px bg-border" />
                <div className="grid gap-px overflow-hidden rounded-[9px] border border-border bg-border sm:grid-cols-2">
                  {architectureItems.slice(1, 4).map(([label, value]) => (
                    <div key={label} className="bg-background p-4">
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-tertiary">
                        {label}
                      </p>
                      <p className="mt-3 text-[14px] leading-snug text-primary">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-[9px] border border-border bg-background p-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-tertiary">
                    Local application logic
                  </p>
                  <p className="mt-3 text-[14px] leading-snug text-primary">
                    deterministic scoring engine
                  </p>
                </div>
              </div>

              <ul className="grid content-start gap-3">
                {stackItems.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] items-center gap-3 border-t border-border py-4 text-[15px] leading-none text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CaseSection>

          <CaseSection kicker="Current Scope" title="Functional core, honest boundaries.">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <ScopeList title="Currently implemented" items={implementedItems} />
              <ScopeList title="Being developed or refined" items={developingItems} />
            </div>
          </CaseSection>

          <CaseSection kicker="Reflection" title="Context became part of the product state.">
            <p className="max-w-[48rem] text-[clamp(1.08rem,1.35vw,1.28rem)] leading-[1.65] text-secondary">
              OPPA became an exercise in treating context as product data. The
              most useful parts of the implementation are not necessarily the
              largest features: deterministic recommendations, database-enforced
              domain rules, and a deliberately narrow guest-sharing boundary
              make the application easier to reason about.
            </p>
          </CaseSection>

          <ProjectCaseNavigation
            previous={{
              label: "Zoho Lead Integration",
              href: "/work/zoho-lead-integration",
            }}
            next={{ label: "SK Nexus", href: "/work/sk-nexus" }}
          />
        </article>
      </main>
    </>
  );
}

function CaseSection({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 md:px-12 lg:px-16">
      <div
        className="reveal-rule mx-auto grid max-w-[1320px] grid-cols-4 gap-x-6 gap-y-10 border-t border-border pt-10 md:grid-cols-12 md:pt-12"
        data-reveal
      >
        <p
          className="col-span-4 text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-secondary md:col-span-3"
          data-path-target
        >
          {kicker}
        </p>
        <div className="col-span-4 md:col-span-7 md:col-start-5">
          <h2 className="max-w-[16ch] text-pretty text-[clamp(1.8rem,3.3vw,3.4rem)] font-medium leading-[1.04] text-primary">
            {title}
          </h2>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

function PathPanel({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-[12px] border border-border bg-surface-soft p-5">
      <h3 className="text-[13px] font-medium leading-none text-primary">
        {title}
      </h3>
      <ol className="mt-6 grid gap-3">
        {steps.map((step, index) => (
          <li key={step} className="grid grid-cols-[auto_1fr] items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-[11px] text-tertiary">
              {index + 1}
            </span>
            <span className="rounded-[8px] border border-border bg-background px-4 py-3 text-[14px] leading-snug text-primary">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ScopeList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[13px] font-medium leading-none text-primary">
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="border-t border-border pt-4 text-[14px] leading-[1.55] text-secondary"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
