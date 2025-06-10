import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import { conseils, gouvernance } from "@/data/conseilAudit";
import { audits } from "@/data/servicesG";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {detection, proteger, reponse, strategie} from "@/data/strategie";

export const metadata = {
  title: "Stratégie, Cybersécurité et Consulting| Fireshield Security",
  description:
    "Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection"
};

export default function Strategie() {

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
                Stratégie, Cybersécurité et Consulting
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

        <div className="text-center w-[200px] p-2 "> {/* avant dernierre div*/}
          <section>
            <div className="mt-50">
              <h2> STRATÉGIE DE SÉCURITÉ</h2>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <figure className="px-1 pt-1"></figure>

                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {strategie.map((service, index) => (
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
              <h2>DÉTECTION</h2>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <figure className="px-1 pt-1"></figure>

                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {detection.map((service, index) => (
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
              <h2>RÉPONSE</h2>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <figure className="px-1 pt-1"></figure>

                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {reponse.map((service, index) => (
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-50">
                <div className="container">
                  <div className="row">
                    <div className="">
                      <div className="bg-base-100 w-96 shadow-sm">
                        <figure className="px-1 pt-1"></figure>
                        <h2 className=" p-4 text-dark">PROTÉGER</h2>
                        <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                          {proteger.map((service, index) => (
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
                      </div>
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
