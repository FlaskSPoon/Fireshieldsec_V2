
"use client"

import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import Link from "next/link";
import ServiceCard from "@/components/card/ServiceCard";
import { detecter, proteger, reponse, strategie } from "@/data/servicesG";
import { apiClient } from "@/components/utils";
import { useQuery } from "@tanstack/react-query";


export default function Strategie() {

  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://back-end-b30o.onrender.com';

  // Récupérer TOUS les services
  const {
    data: allServices = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['all-services'],
    queryFn: () => apiClient.getAll('/services'),
    enabled: true,
  });


  // console.log("Tous les services:", allServices);
  if (isLoading) {
    return <div>Chargement...</div>;
  }
  const getImageByServiceId = (array, id) => {
    const found = array.find(img => img.id === id);
    return found?.bgImage;
  };

  const strategieService = allServices.filter(service => service.category?.id === 6);
  const protegerServices = allServices.filter(service => service.category?.id === 7);
  const detecterServices = allServices.filter(service => service.category?.id === 8);
  const reponseServices = allServices.filter(service => service.category?.id === 9);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <>
      <SeoMeta title="Conseil, Audit et Gouvernance du SI | Fireshield Security" />
      <SeoMeta description="Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection" />

      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Stratégie, Cybersécurité et Consulting
                </h1>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                  <li>
                    <Link scroll={false} href={`/`}>
                      Accueil
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

        <div className="text-center w-[200px] p-2">
          <section>
            {/* Section Audit - Catégorie ID 2 */}
            <div className="mt-50">
              <h2>STRATÉGIE DE SÉCURITÉ</h2>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <figure className="px-1 pt-1"></figure>
                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {strategieService.slice(0, 300).map((service, index) => (
                          <ServiceCard
                            key={`strategie-${service.id}`}
                            serviceId={service.id}
                            title={truncateText(service.name, 30)}
                            content={truncateText(service.description, 100)}
                            category={service.category?.name}
                            image={strategie[index]?.bgImage || "/data/servicesG/internet-security.png"}
                            link={`/strategies/${service.id}`}

                          />
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Conseil - Catégorie ID 3 */}
            <div className="mt-50">
              <h2>DÉTECTION</h2>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {detecterServices.slice(0, 300).map((service, index) => (
                          <ServiceCard
                            key={`detecter-${service.id}`}
                            serviceId={service.id}
                            title={truncateText(service.name, 30)}
                            content={truncateText(service.description, 100)}
                            category={service.category?.name}
                            image={
                              service.image
                                ? `${baseURL}/uploads/services/${service.image}`
                                : detecter[index]?.bgImage || '/assets/img/icon/internet-security.png'
                            }

                            link={`/strategies/${service.id}`}
                          />
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Gouvernance - Catégorie ID 4 */}
            <div className="mt-50">
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <h2 className="p-4 text-dark">RÉPONSE</h2>
                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {reponseServices.map((service, index) => (
                          <ServiceCard
                            key={`reponse-${service.id}`}
                            serviceId={service.id}
                            title={truncateText(service.name, 30)}
                            content={truncateText(service.description, 100)}
                            category={service.category?.name}
                            image={
                              service.image
                                ? `${baseURL}/uploads/services/${service.image}`
                                : reponse[index]?.bgImage || '/assets/img/icon/padlock_3055803.png'
                            }

                            link={`/strategies/${service.id}`}
                          />

                        ))}


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Section Gouvernance - Catégorie ID 4 */}
            <div className="mt-50">
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <h2 className="p-4 text-dark">PROTÉGER</h2>
                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {protegerServices.map((service, index) => (
                          <ServiceCard
                            key={`proteger-${service.id}`}
                            serviceId={service.id}
                            title={truncateText(service.name, 30)}
                            content={truncateText(service.description, 100)}
                            category={service.category?.name}
                            image={
                              service.image
                                ? `${baseURL}/uploads/services/${service.image}`
                                : proteger[index]?.bgImage || '/assets/img/icon/padlock_3055803.png'
                            }
                            link={`/strategies/${service.id}`}
                          />

                        ))}


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
