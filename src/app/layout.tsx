import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angelo Loreno | Software Developer | Technical Support",
  description:
    "Personal developer portfolio for Angelo Loreno, Software Developer | Technical Support.",
};

const themeBootstrapScript = `
(() => {
  try {
    const stored = window.localStorage.getItem("angelo-theme");
    const preference = stored === "dark" || stored === "system" || stored === "light"
      ? stored
      : "light";
    const theme = preference === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : preference;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.themePreference = preference;
  } catch {
    document.documentElement.dataset.theme = "light";
    document.documentElement.dataset.themePreference = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
