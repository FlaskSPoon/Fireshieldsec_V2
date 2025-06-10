import About from "@/components/pages/home/About";
import Blog from "@/components/pages/home/Blog";
import Cta from "@/components/footers/Cta";
import Hero from "@/components/pages/home/Hero";
import Offering from "@/components/pages/home/Offering";
import Process from "@/components/pages/home/Process";
import Events from "@/components/pages/home/Events";
import Services from "@/components/pages/home/Services";
import Services2 from "@/components/pages/home/Services2";
import VideoBox from "@/components/pages/home/VideoBox";
import SeoMeta from "@/components/common/SeoMeta";

export const metadata = {
  title: "Accueil | Fireshield Security",
  description:
    "Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection"
};
export default function Home() {
  return (
    <>
      <SeoMeta title={metadata.title} />
      <main className="main position-relative" id="mains">
        <Hero />
        <Services />
        <About />
        <Services2 />
        <Offering />
        <VideoBox />
        <Process />
        <Events />
        <Blog />
        <Cta />
      </main>
    </>
  );
}
