import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { AmbientPath } from "@/components/AmbientPath";
import { MotionController } from "@/components/MotionController";
import { ProjectCaseNavigation } from "@/components/ProjectCaseNavigation";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "devflow-cli | Angelo Loreno",
  description:
    "A technical case study for devflow-cli, a Node.js CLI for saving and starting development sessions.",
};

const metadataItems = [
  ["Role", "Personal Project"],
  ["Type", "Developer Tool / CLI"],
  ["Runtime", "Node.js"],
  ["Maturity", "Working Release · Personal Developer Tool"],
];

const sessionFields = [
  ["Path", "project workspace"],
  ["Editor", "VS Code, Cursor, or another configured editor"],
  ["Commands", "startup commands stored per session"],
  ["Git", "optional branch context"],
  ["Environment", "session-level environment values"],
  ["Template", "optional project preset"],
];

const workflowSteps = [
  "Developer",
  "devflow start <session>",
  "Load saved session",
  "Prepare Git branch",
  "Open editor",
  "Run startup commands",
  "Record usage",
];

const commandGroups = [
  {
    title: "Session workflow",
    items: ["init", "start", "quick", "list", "info", "edit", "delete"],
  },
  {
    title: "Portability",
    items: ["clone", "export", "import", "backup", "restore"],
  },
  {
    title: "Maintenance",
    items: ["favorite", "stats", "doctor", "settings", "stop"],
  },
];

const implementedItems = [
  "interactive session creation with project path, editor, commands, Git branch, environment values, and templates",
  "one-command session start with editor launch, branch checkout, startup commands, and usage analytics",
  "session listing, inspection, editing, deleting, favorites, quick start, backup, restore, export, and import",
  "repository cloning flow that can create a reusable session after cloning",
];

const currentLimits = [
  "the project repository does not include an automated test suite or CI configuration",
  "process stopping is intentionally basic and manual rather than a complete background process manager",
  "release evidence is local repository/package metadata rather than a verified package-registry publication",
  "some behavior depends on local editor, Git, and shell availability on the developer machine",
];

export default function DevflowCliPage() {
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
                  01 / Developer Tool · CLI
                </p>

                <div className="col-span-4 md:col-span-7 md:col-start-5">
                  <h1
                    className="max-w-[8ch] text-pretty text-[clamp(3.6rem,9vw,8.8rem)] font-medium leading-[0.94] tracking-normal text-primary"
                    data-reveal
                  >
                    devflow-cli
                  </h1>
                  <p
                    className="mt-8 max-w-[17ch] text-pretty text-[clamp(1.6rem,3vw,3rem)] font-medium leading-[1.05] text-primary"
                    data-reveal
                  >
                    One command to start a development session.
                  </p>
                  <p
                    className="mt-7 max-w-[42rem] text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.6] text-secondary"
                    data-reveal
                  >
                    A Node.js CLI that saves a project&apos;s editor, Git
                    branch, environment values, and startup commands as a
                    reusable session, then starts that development setup from
                    the terminal.
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
              <DevflowTerminal />
            </div>
          </section>

          <CaseSection
            kicker="Setup Friction"
            title="The small startup steps add up."
          >
            <div className="grid gap-8 md:grid-cols-[0.58fr_0.42fr] md:gap-14">
              <div className="space-y-5 text-[clamp(1.08rem,1.35vw,1.28rem)] leading-[1.6] text-primary">
                <p>
                  Starting a project is rarely one action. It often means
                  finding the directory, opening the right editor, checking the
                  Git branch, remembering the startup commands, and repeating
                  that sequence every time context switches.
                </p>
                <p className="text-secondary">
                  DevFlow turns that repeated local setup into named
                  configuration, so a development session can be started again
                  without rebuilding the working environment from memory.
                </p>
              </div>

              <div className="rounded-[12px] border border-border bg-surface-soft p-5">
                <p className="text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-tertiary">
                  Stored session shape
                </p>
                <dl className="mt-6 grid gap-4">
                  {sessionFields.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[6rem_1fr] gap-4 border-t border-border pt-4"
                    >
                      <dt className="text-[13px] leading-snug text-primary">
                        {label}
                      </dt>
                      <dd className="text-[13px] leading-snug text-secondary">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </CaseSection>

          <CaseSection kicker="Start Workflow" title="A session starts as a sequence.">
            <ol className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border md:grid-cols-7">
              {workflowSteps.map((step, index) => (
                <li key={step} className="bg-background p-5 md:min-h-36">
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
            kicker="Command Surface"
            title="The CLI is organized around local workflow ownership."
          >
            <div className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border md:grid-cols-3">
              {commandGroups.map((group) => (
                <div key={group.title} className="bg-background p-5">
                  <h3 className="text-[13px] font-medium leading-none text-primary">
                    {group.title}
                  </h3>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <code
                        key={item}
                        className="rounded-full border border-border bg-surface-soft px-3 py-1.5 text-[12px] leading-none text-secondary"
                      >
                        {item}
                      </code>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            kicker="Implementation"
            title="Git, editor launch, and commands are separate concerns."
          >
            <div className="grid gap-6 md:grid-cols-3">
              <DecisionCard
                title="Configuration"
                body="Sessions are stored with the Conf package under the devflow project namespace, keeping the tool local to the developer machine."
              />
              <DecisionCard
                title="Repository handling"
                body="simple-git is used to detect repositories and move to a configured branch before the rest of the session starts."
              />
              <DecisionCard
                title="Process startup"
                body="open launches the configured editor, while execa runs saved commands. Long-running dev/start/serve commands are detached instead of blocking the CLI."
              />
            </div>
          </CaseSection>

          <CaseSection kicker="Current Scope" title="Useful now, still intentionally personal.">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <ScopeList title="Verified in the repository" items={implementedItems} />
              <ScopeList title="Boundaries and limitations" items={currentLimits} />
            </div>
          </CaseSection>

          <CaseSection kicker="External Proof" title="The tool has a public write-up and source repository.">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <Link
                href="https://github.com/itsme-angeloo/devflow-cli"
                target="_blank"
                rel="noreferrer"
                className="text-[15px] leading-none text-primary underline-offset-4 transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                View source ↗
              </Link>
              <Link
                href="https://dev.to/itsmeangeloo/devflow-a-cli-tool-to-end-your-repetitive-project-setup--4543"
                target="_blank"
                rel="noreferrer"
                className="text-[15px] leading-none text-secondary underline-offset-4 transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
              >
                Read on DEV Community ↗
              </Link>
            </div>
          </CaseSection>

          <CaseSection kicker="Reflection" title="A CLI can preserve working context.">
            <p className="max-w-[48rem] text-[clamp(1.08rem,1.35vw,1.28rem)] leading-[1.65] text-secondary">
              DevFlow is a small tool, but the implementation is centered on a
              useful product idea: local setup has state. Capturing that state
              as a named session makes context switching less dependent on
              memory and more like a repeatable workflow.
            </p>
          </CaseSection>

          <ProjectCaseNavigation
            next={{
              label: "Zoho Lead Integration",
              href: "/work/zoho-lead-integration",
            }}
          />
        </article>
      </main>
    </>
  );
}

function DevflowTerminal() {
  const rows = [
    ["session", "my-app"],
    ["repository", "detected"],
    ["branch", "main"],
    ["editor", "code"],
    ["command 1", "npm install"],
    ["command 2", "npm run dev"],
  ];

  return (
    <div className="rounded-[12px] border border-border bg-[#090d13] p-3 text-[#e7f4ff] shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
      <div className="grid gap-3 rounded-[8px] border border-cyan-200/20 bg-[#0d131c] p-5 sm:p-7 lg:grid-cols-[0.72fr_0.28fr]">
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-100/70">
              DEVFLOW / SESSION
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">
              local
            </p>
          </div>
          <pre className="mt-7 overflow-x-auto text-[clamp(0.78rem,1.15vw,1rem)] leading-[1.9] text-cyan-50">
            <code>{`$ devflow start my-app

Session "my-app" loaded
Preparing repository context
Opening editor
Starting saved commands

Development session started successfully`}</code>
          </pre>
          <dl className="mt-7 grid gap-px overflow-hidden rounded-[8px] border border-white/10 bg-white/10 sm:grid-cols-2">
            {rows.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-3 bg-[#0d131c] px-4 py-3">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-white/35">
                  {label}
                </dt>
                <dd className="font-mono text-[12px] text-cyan-100/85">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid content-between gap-5 border-t border-white/10 pt-5 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/35">
              Commands
            </p>
            <div className="mt-5 grid gap-2">
              {["init", "start", "quick", "list", "stats", "doctor"].map((command) => (
                <code
                  key={command}
                  className="rounded-[6px] border border-white/10 bg-white/[0.04] px-3 py-2 text-[12px] text-cyan-100/75"
                >
                  devflow {command}
                </code>
              ))}
            </div>
          </div>
          <p className="border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.18em] text-white/35">
            Faster setup / more building
          </p>
        </div>
      </div>
    </div>
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
          <h2 className="max-w-[17ch] text-pretty text-[clamp(1.8rem,3.3vw,3.4rem)] font-medium leading-[1.04] text-primary">
            {title}
          </h2>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

function DecisionCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[12px] border border-border bg-surface-soft p-5">
      <h3 className="text-[13px] font-medium leading-none text-primary">
        {title}
      </h3>
      <p className="mt-5 text-[14px] leading-[1.6] text-secondary">{body}</p>
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
