import ImpactHero from "@/components/hero/ImpactHero";
import ThoughtLeadership from "@/components/home/ThoughtLeadership";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ImpactHero />
      <ThoughtLeadership />
    </main>
  );
}
