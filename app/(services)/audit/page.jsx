

"use client"
import Cta from "@/components/footers/Cta";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/components/utils";
import SeoMeta from "@/components/common/SeoMeta";
import ServiceCard from "@/components/card/ServiceCard";
import Link from "next/link";
import { audit, conseil, gouvernance } from "@/data/servicesG";
import { encodeId } from "@/app/hashids/hashids";

export default function Audit() {
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
  
  const auditServices = allServices.filter(service => service.category?.id === 1);
  const conseilServices = allServices.filter(service => service.category?.id === 2);
  const gouvernanceServices = allServices.filter(service => service.category?.id === 3);
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
                  Conseil, Audit et Gouvernance du Système d'Information
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
              <h2>AUDIT DE SÉCURITÉ</h2>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <figure className="px-1 pt-1"></figure>
                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {auditServices.slice(0,300).map((service, index) => (
                          <ServiceCard
                            key={`audit-${service.id}`}
                            serviceId={service.id}
                            title={truncateText(service.name, 30)}
                            content={truncateText(service.description, 100)}
                            category={service.category?.name}
                           image={audit[index]?.bgImage  ||  "/data/servicesG/internet-security.png"}
                            link={`/audit/${encodeId(service.id)}`}
                          
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
              <h2>CONSEILS</h2>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {conseilServices.slice(0,3).map((service, index) => (
                          <ServiceCard
                            key={`conseil-${service.id}`}
                            serviceId={service.id}
                            title={truncateText(service.name, 30)}
                            content={truncateText(service.description, 100)}
                            category={service.category?.name}
                            image={
                              service.image
                                ? `${baseURL}/uploads/services/${service.image}`
                                : conseil[index]?.bgImage || '/assets/img/icon/internet-security.png'
                            }
                            

                            link={`/audit/${encodeId(service.id)}`}
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
                      <h2 className="p-4 text-dark">GOUVERNANCE</h2>
                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {gouvernanceServices.map((service, index) => (
                          <ServiceCard
                            key={`gouv-${service.id}`}
                            serviceId={service.id}
                            title={truncateText(service.name, 30)}
                            content={truncateText(service.description, 100)}
                            category={service.category?.name}
                            image={
                              service.image
                                ? `${baseURL}/uploads/services/${service.image}`
                                : gouvernance[index]?.bgImage || '/assets/img/icon/padlock_3055803.png'
                            }
                           
                             link={`/audit/${encodeId(service.id)}`}
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
