import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import { infogerance, support_si } from '@/data/infogerance';
import { audits } from "@/data/servicesG";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "Infogérance et Support SI| Fireshield Security",
  description:
    "Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection"
};

export default function Infogerance ()  {
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
                Infogérance et Support SI
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
                  <li>Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center w-[200px] p-2 ">
          <section>
            
          </section>
        </div>
//
        <div className="text-center w-[200px] p-2 ">
          <section>
            <div className="mt-50">
              <div><h5 className="subtitle text-start">
                                          <span>
                                            <Image
                                              alt="icon"
                                              src="/assets/img/icon/titleIcon.png"
                                              width="28"
                                              height="12"
                                            />
                                          </span>{" "}
                                          Fireshield Security prend en charge la
              gestion complète ou partielle de votre
              système d'information, vous permettant
              ainsi de vous concentrer sur votre cœur
              de métier.{" "}
                                          <span>
                                            <Image
                                              alt="icon"
                                              src="/assets/img/icon/titleIcon.png"
                                              width="28"
                                              height="12"
                                            />
                                          </span>
                                        </h5></div>
              <h2 className="bg-danger text-white p-2 card">INFOGÉRANCE</h2>
              <p className="text-dark">
              Fireshield Security prend en charge la gestion complète ou partielle de votre SI.
            </p>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <figure className="px-1 pt-1"></figure>

                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {infogerance.map((service, index) => (
                          <div
                            className="service-card style4 wow fadeInUp"
                            data-wow-delay={service.delay}
                            key={index}
                          >
                            
                            <h3 className="service-title">
                              <Link scroll={false} href={`/service-1`}>
                                {service.title}
                              </Link>
                            </h3>
                            <p className="text">{service.description}</p>
                            <p className="text text-danger">
                              {service.details}
                            </p>
                            <p className="text text-danger">
                              {" "}
                              {service.detailsplus}
                            </p>

                            <div className="btn-wrapper">
                              <Link
                                scroll={false}
                                className="link-btn"
                                href={`/service-details/${service.id}`}
                              >
                                En savoir plus{" "}
                                <i className="fa-sharp fa-light fa-arrow-right-long" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-50">
              <h2 className="bg-danger text-white p-2 card">SUPPORT SI</h2>
              <p className="text-dark">
                  Nous proposons une gamme complète de services de support des
                  systèmes
                  <br />
                  d'information pour garantir la disponibilité et la performance
                  de vos infrastructures.
                </p>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <figure className="px-1 pt-1"></figure>

                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {support_si.map((service, index) => (
                          <div
                            className="service-card style4 wow fadeInUp"
                            data-wow-delay={service.delay}
                            key={index}
                          >
                            <h3 className="service-title">
                              <Link scroll={false} href={`/service-1`}>
                                {service.title}
                              </Link>
                            </h3>
                            <p className="text-container">
                              {service.description}
                            </p>
                            <div className="btn-wrapper p-2">
                              <Link
                                scroll={false}
                                className="link-btn"
                                href={`/service-details/${service.id}`}
                              >
                                En savoir plus{" "}
                                <i className="fa-sharp fa-light fa-arrow-right-long" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-50">
                <div className="container">
                  <div className="row">
                    <div className="">
                     {/* <div className="bg-base-100 w-96 shadow-sm">
                        <figure className="px-1 pt-1"></figure>
                        <h2 className=" p-4 text-dark">GOUVERNANCE</h2>
                        <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                          {gouvernance.map((service, index) => (
                            <div
                              className="service-card style4 wow fadeInUp"
                              data-wow-delay={service.delay}
                              key={index}
                            >
                              <div className="service-icon">
                                <Image
                                  src={service.icon}
                                  width={100}
                                  height={20}
                                  alt="icon"
                                />
                              </div>
                              <h3 className="service-title">
                                <Link scroll={false} href={`/service-1`}>
                                  {service.title}
                                </Link>
                              </h3>
                              <p className="text-container">
                                {service.description}
                              </p>
                              <div className="btn-wrapper p-2">
                                <Link
                                  scroll={false}
                                  className="link-btn"
                                  href={`/service-details/${service.id}`}
                                >
                                  En savoir plus{" "}
                                  <i className="fa-sharp fa-light fa-arrow-right-long" />
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="pb-300" />
        <Cta />
      </main>
    </>
  );
}
