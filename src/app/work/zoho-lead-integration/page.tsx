import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AmbientPath } from "@/components/AmbientPath";
import { MotionController } from "@/components/MotionController";
import { ProjectCaseNavigation } from "@/components/ProjectCaseNavigation";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Zoho Lead Integration | Angelo Loreno",
  description:
    "A technical case study for a Laravel-based lead capture flow connected to Zoho CRM.",
};

const metadataItems = [
  ["Role", "Personal Project"],
  ["Type", "CRM Integration"],
  ["Framework", "Laravel 12"],
  ["Maturity", "Working Integration · Personal Project"],
];

const flowSteps = [
  "Visitor",
  "Demo request form",
  "Laravel validation",
  "ZohoCRMService",
  "OAuth access token",
  "Zoho CRM API",
  "Lead created",
];

const formFields = [
  "full name",
  "email",
  "company",
  "contact number",
  "project type",
  "budget range",
  "timeline",
  "job title",
  "terms agreement",
];

const mappingItems = [
  ["full_name", "Last_Name / First_Name"],
  ["email", "Email"],
  ["contact_number", "Phone"],
  ["company", "Company"],
  ["job_title", "Designation"],
  ["project_type, budget_range, timeline", "Description"],
  ["Website Form", "Lead_Source"],
];

const implementedItems = [
  "Laravel route and controller for demo request submission",
  "server-side request validation before CRM submission",
  "OAuth refresh-token flow for obtaining a Zoho access token",
  "cached access token reuse through Laravel Cache",
  "field mapping into the Zoho Leads API payload",
  "JSON success/error responses for the frontend form",
];

const currentLimits = [
  "the repository includes only default example tests rather than integration-specific coverage",
  "no CI configuration was found in the project repository",
  "no queue, webhook, retry worker, duplicate-prevention layer, or local lead persistence was verified",
  "the project is presented as a lightweight integration, not a production-ready CRM or lead-management system",
];

export default function ZohoLeadIntegrationPage() {
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
                  02 / CRM Integration
                </p>

                <div className="col-span-4 md:col-span-7 md:col-start-5">
                  <h1
                    className="max-w-[9ch] text-pretty text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.94] tracking-normal text-primary"
                    data-reveal
                  >
                    Zoho Lead Integration
                  </h1>
                  <p
                    className="mt-8 max-w-[17ch] text-pretty text-[clamp(1.6rem,3vw,3rem)] font-medium leading-[1.05] text-primary"
                    data-reveal
                  >
                    From a web form to a CRM Lead.
                  </p>
                  <p
                    className="mt-7 max-w-[42rem] text-[clamp(1rem,1.3vw,1.18rem)] leading-[1.6] text-secondary"
                    data-reveal
                  >
                    A Laravel-based lead capture flow that validates demo
                    requests and creates Leads directly in Zoho CRM through a
                    custom OAuth-authenticated integration.
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
                  src="/projects/zoho-lead-integration/lead-capture-app.png"
                  alt="Lead capture demo request interface integrated with Zoho CRM"
                  width={2786}
                  height={1498}
                  quality={90}
                  priority
                  sizes="(min-width: 1320px) 1320px, 100vw"
                  className="h-auto w-full rounded-[8px] border border-border object-contain"
                />
              </div>
            </div>
          </section>

          <CaseSection
            kicker="Integration Model"
            title="The product story is the data flow."
          >
            <div className="grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:gap-14">
              <p className="text-[clamp(1.08rem,1.35vw,1.28rem)] leading-[1.6] text-primary">
                The application is intentionally small: collect a demo request,
                validate the submitted fields, authenticate with Zoho, map the
                request into a Lead payload, and return a clear result to the
                frontend.
              </p>
              <FlowPanel steps={flowSteps} />
            </div>
          </CaseSection>

          <CaseSection kicker="Form Contract" title="Validation before integration.">
            <div className="grid gap-8 md:grid-cols-[0.5fr_0.5fr] md:gap-12">
              <div className="space-y-5 text-[15px] leading-[1.65] text-secondary">
                <p>
                  Incoming demo requests are handled by a Laravel controller and
                  validated before any CRM call is attempted. Required contact
                  fields, project type, budget range, and terms acceptance form
                  the server-side contract.
                </p>
                <p>
                  That keeps the external API boundary behind application
                  validation instead of sending loosely shaped form data directly
                  to Zoho.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-[12px] border border-border bg-border sm:grid-cols-2">
                {formFields.map((field) => (
                  <p
                    key={field}
                    className="bg-background p-4 text-[13px] leading-snug text-secondary"
                  >
                    {field}
                  </p>
                ))}
              </div>
            </div>
          </CaseSection>

          <CaseSection
            kicker="OAuth"
            title="Zoho authentication is isolated in the integration layer."
          >
            <div className="grid gap-6 md:grid-cols-3">
              <DecisionCard
                title="Configuration"
                body="Zoho client values, redirect URI, refresh token, and data-center settings are read from Laravel configuration and environment variables."
              />
              <DecisionCard
                title="Token exchange"
                body="The callback route exchanges an OAuth authorization code for tokens, while the service uses the refresh-token grant to obtain access tokens."
              />
              <DecisionCard
                title="Access token cache"
                body="Laravel Cache stores the Zoho access token for a short window, reducing repeated token requests before creating CRM Leads."
              />
            </div>
          </CaseSection>

          <CaseSection kicker="CRM Mapping" title="Form fields become a Lead payload.">
            <div className="overflow-hidden rounded-[12px] border border-border bg-border">
              <dl className="grid gap-px md:grid-cols-2">
                {mappingItems.map(([source, target]) => (
                  <div key={source} className="grid grid-cols-[0.48fr_0.52fr] gap-4 bg-background p-4">
                    <dt className="font-mono text-[12px] leading-snug text-secondary">
                      {source}
                    </dt>
                    <dd className="text-[13px] leading-snug text-primary">
                      {target}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </CaseSection>

          <CaseSection
            kicker="Response Handling"
            title="The integration reports success or failure back to the form."
          >
            <div className="grid gap-6 md:grid-cols-2">
              <DecisionCard
                title="Success path"
                body="When Zoho returns a successful Lead creation response, the controller returns JSON with a success message and the created Zoho record ID."
              />
              <DecisionCard
                title="Failure path"
                body="Failed CRM responses and thrown exceptions return error JSON, while the service logs token and CRM response failures for debugging."
              />
            </div>
          </CaseSection>

          <CaseSection kicker="Current Scope" title="A working integration with clear boundaries.">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <ScopeList title="Verified in the repository" items={implementedItems} />
              <ScopeList title="Boundaries and limitations" items={currentLimits} />
            </div>
          </CaseSection>

          <CaseSection kicker="External Proof" title="Source code remains the proof point.">
            <Link
              href="https://github.com/itsme-angeloo/lead-capture-app"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] leading-none text-primary underline-offset-4 transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              View source ↗
            </Link>
          </CaseSection>

          <CaseSection kicker="Reflection" title="Small integrations still need strong boundaries.">
            <p className="max-w-[48rem] text-[clamp(1.08rem,1.35vw,1.28rem)] leading-[1.65] text-secondary">
              The value of this project is not in making a large CRM product.
              It is in keeping the boundary clear: the public form gathers the
              right data, Laravel validates and maps it, and the Zoho API
              receives a deliberate Lead payload.
            </p>
          </CaseSection>

          <ProjectCaseNavigation
            previous={{ label: "DevFlow", href: "/work/devflow-cli" }}
            next={{ label: "OPPA", href: "/work/oppa-progtracker" }}
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
          <h2 className="max-w-[17ch] text-pretty text-[clamp(1.8rem,3.3vw,3.4rem)] font-medium leading-[1.04] text-primary">
            {title}
          </h2>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
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
