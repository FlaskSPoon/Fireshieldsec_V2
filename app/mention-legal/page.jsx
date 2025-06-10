import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import LegalMentions from "@/components/pages/mentionLegalFireshiel";
import Link from "next/link";
export const metadata = {
  title: "Mentions légales | Fireshield Security",
  description:
    "Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection"
};
export default function Page() {
  return (
    <>
      <SeoMeta title={metadata.title} />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Mentions Légales
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
                  <li>Mentions légales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <LegalMentions />
        <Cta />
      </main>
    </>
  );
}
