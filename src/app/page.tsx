import { About } from "@/components/About";
import { AmbientPath } from "@/components/AmbientPath";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MotionController } from "@/components/MotionController";
import { SelectedCredentials } from "@/components/SelectedCredentials";
import { SelectedWork } from "@/components/SelectedWork";
import { SiteHeader } from "@/components/SiteHeader";
import { Toolkit } from "@/components/Toolkit";

export default function Home() {
  return (
    <>
      <MotionController />
      <AmbientPath />
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <SelectedWork />
        <About />
        <Toolkit />
        <SelectedCredentials />
      </main>
      <Footer />
    </>
  );
}
