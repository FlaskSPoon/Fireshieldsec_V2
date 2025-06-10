import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import Contact from "@/components/pages/contact/Contact";
import Map from "@/components/pages/contact/Map";
import Link from "next/link";
export const metadata = {
  title: "Contact | Fireshield Security",
  description:
    "Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection"
};
export default function Page() {
  return (
    <>
      <SeoMeta title={metadata.title} />
      <main className="main position-relative" id="mains">
        {/* <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Nous contacter
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Accueil{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <Contact />
        <Map />
        <Cta />
      </main>
    </>
  );
}
