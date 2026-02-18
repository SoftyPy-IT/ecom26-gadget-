import BarSection from "@/src/components/BarSection.tsx/page";
import AboutContent from "./_components/AboutContent";
import ClientLogos from "./_components/ClientLogos";
import OurTeam from "./_components/OurTeam";
import WorkProcess from "./_components/WorkProcess";


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <BarSection />
      <AboutContent />
      <ClientLogos />
      <WorkProcess />
      <OurTeam/>
    </main>
  )
}
