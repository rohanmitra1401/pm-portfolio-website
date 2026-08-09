import ImpactHero from "@/components/hero/ImpactHero";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import ThoughtLeadership from "@/components/home/ThoughtLeadership";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ImpactHero />
      <Experience />
      <Education />
      <ThoughtLeadership />
      <Skills />
    </main>
  );
}
