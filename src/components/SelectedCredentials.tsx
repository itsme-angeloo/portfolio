import Image from "next/image";
import type { CSSProperties } from "react";

type CertificateImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Credential = {
  title: string;
  date: string;
  tilt: string;
  certificateImage?: CertificateImage;
};

const credentialGroups: {
  provider: string;
  credentials: Credential[];
}[] = [
  {
    provider: "Anthropic",
    credentials: [
      {
        title: "Introduction to agent skills",
        date: "April 2026",
        tilt: "-2deg",
        certificateImage: {
          src: "/credentials/anthropic/intro-to-agent-skills.png",
          alt: "Introduction to agent skills certificate",
          width: 1925,
          height: 1487,
        },
      },
      {
        title: "Claude with the Anthropic API",
        date: "May 2026",
        tilt: "1deg",
        certificateImage: {
          src: "/credentials/anthropic/claude-anthropic-api.jpeg",
          alt: "Claude with the Anthropic API certificate",
          width: 1746,
          height: 1286,
        },
      },
      {
        title: "Introduction to Model Context Protocol",
        date: "May 2026",
        tilt: "-1deg",
        certificateImage: {
          src: "/credentials/anthropic/intro-to-mcp.jpeg",
          alt: "Introduction to Model Context Protocol certificate",
          width: 1730,
          height: 1344,
        },
      },
      {
        title: "Claude Code in Action",
        date: "May 2026",
        tilt: "2deg",
        certificateImage: {
          src: "/credentials/anthropic/claude-code-in-action.jpeg",
          alt: "Claude Code in Action certificate",
          width: 1730,
          height: 1344,
        },
      },
    ],
  },
  {
    provider: "Google",
    credentials: [
      {
        title: "Cloud Technical Series — AI in Action",
        date: "April 2026",
        tilt: "-1.5deg",
        certificateImage: {
          src: "/credentials/google/cloud-tech-series.png",
          alt: "Cloud Technical Series AI in Action certificate",
          width: 1122,
          height: 1574,
        },
      },
    ],
  },
];

const developerProfiles = [
  {
    label: "Google for Developers ↗",
    href: "https://g.dev/dvlprangelogarcialoreno",
  },
  {
    label: "Credly by Pearson ↗",
    href: "https://www.credly.com/users/angelo-loreno",
  },
  {
    label: "DEV Community ↗",
    href: "https://dev.to/itsmeangeloo",
  },
];

export function SelectedCredentials() {
  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="px-6 pb-28 pt-4 sm:px-10 sm:pb-32 md:px-12 md:pb-36 lg:px-16"
    >
      <div
        className="reveal-rule mx-auto max-w-[1320px] border-t border-border pt-10 md:pt-12"
        data-reveal
      >
        <div className="grid grid-cols-4 gap-x-6 gap-y-12 md:grid-cols-12">
          <h2
            id="credentials-heading"
            className="col-span-4 text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-secondary md:col-span-3"
            data-reveal
            data-path-target
          >
            04 / Selected Credentials
          </h2>

          <div className="col-span-4 md:col-span-7 md:col-start-5">
            <div className="space-y-12">
              {credentialGroups.map((group) => (
                <section
                  key={group.provider}
                  aria-labelledby={`credentials-${group.provider}`}
                  data-reveal
                >
                  <h3
                    id={`credentials-${group.provider}`}
                    className="border-t border-border pt-5 text-[11px] font-medium uppercase leading-none tracking-[0.16em] text-tertiary"
                  >
                    {group.provider}
                  </h3>

                  <ul className="credential-stack mt-7">
                    {group.credentials.map((credential) => (
                      <li
                        key={`${group.provider}-${credential.title}`}
                        className={`credential-stack-item grid grid-cols-1 gap-4 border-t border-border py-5 ${
                          credential.certificateImage
                            ? "lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-start lg:gap-10"
                            : "sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
                        }`}
                      >
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8 lg:block">
                          <p className="text-[clamp(1rem,1.3vw,1.25rem)] font-medium leading-snug text-primary">
                            {credential.title}
                          </p>
                          <p className="text-[12px] leading-none text-tertiary lg:mt-3">
                            {credential.date}
                          </p>
                        </div>

                        {credential.certificateImage ? (
                          <a
                            href={credential.certificateImage.src}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${credential.title} certificate`}
                            className="certificate-link group/certificate flex min-h-40 items-center justify-center rounded-[10px] border border-border bg-surface-soft p-2 hover:border-border-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                            style={
                              {
                                "--certificate-rotation": credential.tilt,
                              } as CSSProperties
                            }
                          >
                            <Image
                              src={credential.certificateImage.src}
                              alt={credential.certificateImage.alt}
                              width={credential.certificateImage.width}
                              height={credential.certificateImage.height}
                              sizes="(min-width: 1024px) 34vw, 100vw"
                              className="certificate-image h-auto max-h-[26rem] w-auto max-w-full rounded-[7px] object-contain lg:max-h-[22rem]"
                            />
                          </a>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div
              className="mt-14 border-t border-border pt-6"
              data-reveal
            >
              <p className="text-[12px] font-medium leading-none text-secondary">
                Developer profiles
              </p>

              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-4 text-[14px] leading-none text-primary">
                {developerProfiles.map((profile) => (
                  <li key={profile.href}>
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-opacity duration-200 hover:opacity-60 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                    >
                      {profile.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
