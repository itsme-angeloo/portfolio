import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { AmbientPath } from "@/components/AmbientPath";
import { MotionController } from "@/components/MotionController";
import { ProjectCaseNavigation } from "@/components/ProjectCaseNavigation";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "SK Nexus | Angelo Loreno",
  description:
    "A technical case study for SK Nexus, a full-stack public information and transparency platform for a barangay youth council.",
};

const metadataItems = [
  ["Role", "Personal Project"],
  ["Type", "Community Platform"],
  ["Maturity", "Functional MVP · Ongoing Refinement"],
  ["Stack", "Next.js 14 · Supabase · PostgreSQL"],
];

const publicItems = [
  "homepage content",
  "events",
  "announcements",
  "budget/transparency information",
  "project tracking",
  "expenses",
  "reports",
  "calendar",
  "officer profiles",
  "anonymous feedback",
];

const adminItems = [
  "shared-passphrase authentication",
  "create/update/publish content",
  "file management",
  "feedback review",
  "transparency records",
];

const publicReadExamples = [
  "published events only",
  "published announcements",
  "publish_at-aware scheduled announcements",
  "unpublished drafts remain private",
];

const stackItems = [
  "Next.js 14",
  "TypeScript",
  "React",
  "Supabase",
  "PostgreSQL",
  "Supabase Storage",
  "Tailwind CSS",
  "Tiptap",
  "DOMPurify",
  "bcrypt",
  "Web Crypto HMAC-SHA256",
  "Row Level Security",
];

const implementedItems = [
  "public content browsing",
  "admin CRUD",
  "anonymous feedback",
  "RLS-backed publishing",
  "file uploads",
  "scheduled announcements",
  "rich text",
  "custom admin session",
  "login lockout",
];

const currentLimits = [
  "no automated tests",
  "no CI/CD",
  "public feedback limiter is in-memory",
  "repository has only one git commit",
  "current working tree includes substantial uncommitted visual/auth refinement",
  "Supabase Auth was specified originally but is not used in the actual code",
];

export default function SkNexusPage() {
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
                  04 / Community Platform
                </p>

                <div className="col-span-4 md:col-span-7 md:col-start-5">
                  <h1
                    className="max-w-[8ch] text-pretty text-[clamp(3.6rem,9vw,8.8rem)] font-medium leading-[0.94] tracking-normal text-primary"
                    data-reveal
                  >
                    SK Nexus
                  </h1>
                  <p
                    className="mt-8 max-w-[18ch] text-pretty text-[clamp(1.6rem,3vw,3rem)] font-medium leading-[1.05] text-primary"
                    data-reveal
                  >
                    A public information and transparency platform for a
                    barangay youth council.
                  </p>
                  <p
                    className="mt-7 max-w-[43rem] text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.6] text-secondary"
                    data-reveal
                  >
                    Built with Next.js and Supabase around two clearly separated
                    audiences: public visitors who need open access to community
                    information, and officers who manage that content through a
                    private admin interface.
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
                  src="/projects/sk-nexus/sk-nexus-homepage.png"
                  alt="SK Nexus community platform homepage and transparency dashboard"
                  width={3420}
                  height={1974}
                  quality={90}
                  priority
                  sizes="(min-width: 1320px) 1320px, 100vw"
                  className="h-auto w-full rounded-[8px] border border-border object-contain"
                />
              </div>
            </div>
          </section>

          <EvidenceSection
            kicker="Product Model"
            title="Two audiences, one platform."
          >
            <div className="grid gap-6 md:grid-cols-[0.48fr_0.52fr]">
              <AudiencePanel
                label="Public"
                summary="No login required. Residents can browse community information and send feedback without creating an account."
                items={publicItems}
              />
              <AudiencePanel
                label="Admin"
                summary="A hidden /sk-admin area lets officers manage content through a deliberately scoped shared-admin flow."
                items={adminItems}
              />
            </div>
          </EvidenceSection>

          <EvidenceSection
            kicker="Public Experience"
            title="More than an announcement board."
          >
            <div className="grid gap-10 md:grid-cols-[0.42fr_0.58fr] md:gap-14">
              <p className="text-[clamp(1.08rem,1.35vw,1.28rem)] leading-[1.6] text-primary">
                The public side gives residents account-free access to civic
                information: events, announcements, transparency records,
                calendar updates, officer profiles, and an anonymous feedback
                channel.
              </p>
              <div className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border sm:grid-cols-2">
                {publicItems.map((item) => (
                  <p
                    key={item}
                    className="bg-background p-4 text-[14px] leading-snug text-secondary"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </EvidenceSection>

          <EvidenceSection
            kicker="Privacy-First Feedback"
            title="Anonymous feedback avoids collecting identity data."
          >
            <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
              <FlowPanel
                steps={[
                  "Visitor",
                  "Anonymous feedback form",
                  "/api/feedback",
                  "Rate-limit check",
                  "Supabase insert",
                ]}
              />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <DataBox
                  title="Stored"
                  items={["category", "optional area", "message"]}
                />
                <DataBox
                  title="Not stored"
                  items={["name", "email", "persisted IP", "device identity"]}
                />
              </div>
            </div>
            <p className="mt-8 max-w-[46rem] text-[15px] leading-[1.65] text-secondary">
              The public API uses an in-memory IP-based rate limiter for abuse
              control, but the IP is not stored in the feedback table.
            </p>
          </EvidenceSection>

          <EvidenceSection
            kicker="Publication Boundary"
            title="Public data is filtered at the database layer."
          >
            <div className="grid gap-8 md:grid-cols-[0.48fr_0.52fr] md:gap-12">
              <div className="space-y-5 text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.65] text-secondary">
                <p>
                  Public reads use a Supabase anon-key client. Row Level
                  Security determines which rows are visible publicly, so drafts
                  are not merely hidden by the interface.
                </p>
                <p>
                  The database policy is part of the enforcement boundary for
                  publication state.
                </p>
              </div>
              <ul className="grid gap-3">
                {publicReadExamples.map((item) => (
                  <li
                    key={item}
                    className="border-t border-border py-4 text-[15px] leading-snug text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </EvidenceSection>

          <EvidenceSection
            kicker="Admin Write Path"
            title="Mutations pass through server-side checks."
          >
            <FlowPanel
              steps={[
                "Admin form",
                "Server Action",
                "requireAdminAuth()",
                "Service-role Supabase client",
                "PostgreSQL / Storage",
                "revalidatePath()",
                "Updated public content",
              ]}
            />
          </EvidenceSection>

          <EvidenceSection
            kicker="Admin Authentication"
            title="A custom HMAC session fits the shared-admin model."
          >
            <div className="grid gap-8 md:grid-cols-[0.52fr_0.48fr] md:gap-12">
              <div className="space-y-5 text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.65] text-secondary">
                <p>
                  Officers open <code className="text-primary">/sk-admin</code>{" "}
                  and enter a shared passphrase. The server checks lockout
                  state, verifies a bcrypt-hashed passphrase, and creates an
                  HMAC-signed session token.
                </p>
                <p>
                  The final admin auth implementation diverged from the original
                  specification, using a custom HMAC-signed session model
                  instead of Supabase Auth.
                </p>
              </div>
              <div className="rounded-[12px] border border-border bg-surface-soft p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-tertiary">
                  Session properties
                </p>
                <ul className="mt-6 grid gap-3 text-[14px] leading-snug text-primary">
                  {["httpOnly", "secure", "sameSite=strict", "8-hour expiry"].map(
                    (item) => (
                      <li key={item} className="rounded-[8px] border border-border bg-background px-4 py-3">
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </EvidenceSection>

          <EvidenceSection
            kicker="HMAC Session Note"
            title="The token is compact and tamper-evident."
          >
            <div className="grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:gap-12">
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.65] text-secondary">
                <code className="text-primary">lib/admin-session.ts</code>{" "}
                signs a compact payload with HMAC-SHA256 using server-only
                secret material. The payload includes version, issued-at,
                expiry, and nonce fields.
              </p>
              <div className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border sm:grid-cols-4">
                {["version", "issued-at", "expiry", "nonce"].map((item) => (
                  <div key={item} className="bg-background p-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-tertiary">
                      payload
                    </p>
                    <p className="mt-7 text-[15px] font-medium leading-none text-primary">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </EvidenceSection>

          <EvidenceSection
            kicker="Login Hardening"
            title="The shared credential has a persistent lockout boundary."
          >
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Attempts", "5 failures"],
                ["Window", "15 minutes"],
                ["Lockout", "15 minutes"],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-border pt-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-tertiary">
                    {label}
                  </p>
                  <p className="mt-5 text-[clamp(1.4rem,2.4vw,2.35rem)] font-medium leading-none text-primary">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[46rem] text-[15px] leading-[1.65] text-secondary">
              Failed login state is persisted in the database, the client
              identifier is HMAC-hashed, and stale rows are cleaned up. That
              matters because one shared admin credential needs brute-force
              protection.
            </p>
          </EvidenceSection>

          <EvidenceSection
            kicker="Content + Files"
            title="Rich content and uploads use narrow validation boundaries."
          >
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.65] text-secondary">
                Announcements use Tiptap for stored rich text. Before rendering
                through <code className="text-primary">dangerouslySetInnerHTML</code>,
                the content is sanitized with DOMPurify as a stored-XSS
                mitigation boundary.
              </p>
              <p className="border-t border-border pt-5 text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.65] text-secondary md:border-l md:border-t-0 md:pl-8 md:pt-0">
                Admin uploads cover event photos, announcement PDFs, receipts,
                and report PDFs through Supabase Storage. The code uses MIME-type
                allowlists for image/PDF validation.
              </p>
            </div>
          </EvidenceSection>

          <EvidenceSection
            kicker="Architecture"
            title="Two access paths, separated by trust."
          >
            <div className="grid gap-6 lg:grid-cols-2">
              <AccessPath
                label="Public visitor"
                steps={[
                  "Next.js public routes",
                  "Supabase anon client",
                  "PostgreSQL + RLS",
                ]}
                apis={["/api/feedback"]}
              />
              <AccessPath
                label="Admin officer"
                steps={[
                  "/sk-admin",
                  "HMAC session",
                  "Server Actions",
                  "Supabase service-role client",
                  "PostgreSQL + Storage",
                ]}
                apis={["/api/admin/auth"]}
              />
            </div>
          </EvidenceSection>

          <EvidenceSection
            kicker="Mutation Layer"
            title="Server Actions keep admin forms close to their writes."
          >
            <p className="max-w-[46rem] text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.65] text-secondary">
              CRUD-heavy admin mutations are implemented through React Server
              Actions rather than a conventional REST API. For this project,
              that keeps form handling near mutation logic, reduces API
              boilerplate, allows explicit server-side auth rechecks, and works
              naturally with <code className="text-primary">revalidatePath()</code>.
            </p>
          </EvidenceSection>

          <EvidenceSection
            kicker="Transparency Domain"
            title="The platform is not only content publishing."
          >
            <div className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {["budget categories", "project tracking", "itemized expenses", "annual reports"].map(
                (item) => (
                  <p key={item} className="bg-background p-5 text-[15px] leading-snug text-primary">
                    {item}
                  </p>
                ),
              )}
            </div>
            <p className="mt-8 max-w-[46rem] text-[15px] leading-[1.65] text-secondary">
              SK Nexus gives residents a public view into council activity and
              financial/transparency records, without inventing a full accounting
              workflow.
            </p>
          </EvidenceSection>

          <EvidenceSection kicker="Where It Stands" title="A functional civic MVP undergoing refinement.">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <FactList title="Implemented" items={implementedItems} />
              <FactList title="Current limitations" items={currentLimits} />
            </div>
          </EvidenceSection>

          <EvidenceSection kicker="Stack" title="The technical surface area.">
            <ul className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {stackItems.map((item) => (
                <li
                  key={item}
                  className="grid grid-cols-[auto_1fr] items-center gap-3 bg-background p-4 text-[14px] leading-none text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  {item}
                </li>
              ))}
            </ul>
          </EvidenceSection>

          <EvidenceSection
            kicker="Reflection"
            title="The work became about trust boundaries."
          >
            <p className="max-w-[48rem] text-[clamp(1.08rem,1.35vw,1.28rem)] leading-[1.65] text-secondary">
              SK Nexus became less about building a generic content system and
              more about defining boundaries: what the public can read, what
              admins can mutate, what anonymous users should never need to
              provide, and what should be enforced by the database rather than
              the interface.
            </p>
          </EvidenceSection>

          <ProjectCaseNavigation
            previous={{ label: "OPPA", href: "/work/oppa-progtracker" }}
          />
        </article>
      </main>
    </>
  );
}

function EvidenceSection({
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
        <div className="col-span-4 md:col-span-8 md:col-start-5">
          <h2 className="max-w-[18ch] text-pretty text-[clamp(1.8rem,3.3vw,3.4rem)] font-medium leading-[1.04] text-primary">
            {title}
          </h2>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

function AudiencePanel({
  label,
  summary,
  items,
}: {
  label: string;
  summary: string;
  items: string[];
}) {
  return (
    <div className="rounded-[12px] border border-border bg-surface-soft p-5">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-tertiary">
        {label}
      </p>
      <p className="mt-5 text-[15px] leading-[1.6] text-primary">{summary}</p>
      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-t border-border pt-3 text-[13px] leading-snug text-secondary"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowPanel({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-3 rounded-[12px] border border-border bg-surface-soft p-5 md:grid-cols-[repeat(auto-fit,minmax(7.5rem,1fr))]">
      {steps.map((step, index) => (
        <li key={step} className="grid grid-cols-[auto_1fr] items-center gap-3 md:block">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-[11px] text-tertiary">
            {index + 1}
          </span>
          <p className="rounded-[8px] border border-border bg-background px-4 py-3 text-[13px] leading-snug text-primary md:mt-4">
            {step}
          </p>
        </li>
      ))}
    </ol>
  );
}

function DataBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[12px] border border-border bg-background p-5">
      <h3 className="text-[13px] font-medium leading-none text-primary">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-[14px] leading-snug text-secondary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function AccessPath({
  label,
  steps,
  apis,
}: {
  label: string;
  steps: string[];
  apis: string[];
}) {
  return (
    <div className="rounded-[12px] border border-border bg-surface-soft p-5">
      <h3 className="text-[13px] font-medium leading-none text-primary">
        {label}
      </h3>
      <ol className="mt-6 grid gap-3">
        {steps.map((step, index) => (
          <li key={step} className="grid grid-cols-[auto_1fr] items-center gap-3">
            <span className="text-[11px] text-tertiary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-[8px] border border-border bg-background px-4 py-3 text-[14px] leading-snug text-primary">
              {step}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-6 border-t border-border pt-4">
        {apis.map((api) => (
          <code key={api} className="mr-4 text-[13px] leading-none text-secondary">
            {api}
          </code>
        ))}
      </div>
    </div>
  );
}

function FactList({ title, items }: { title: string; items: string[] }) {
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
