import SeoMeta from "@/components/common/SeoMeta";
import PageCerti from "@/components/e-learning/pageCerti";
import About2 from "@/components/e-learning/plateformElearning/about";
import Heros from "@/components/e-learning/plateformElearning/heros";
import Service21 from "@/components/e-learning/service";
import Cta from "@/components/footers/Cta";
import Blogs1 from "@/components/pages/blog/Blogs1";






export const metadata = {
    title: "Plateforme XDR | Fireshield Security",
    description:
      "Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection"
  };

  export default function Home() {
    return (
      <>
        <SeoMeta title={metadata.title} />
        <main className="main position-relative" id="mains">
          <About2  />
          <Heros />
          <PageCerti />

     <Service21 />
     

     <Blogs1 />

     <Cta />

 
            </main>
            </>
  );
}
        