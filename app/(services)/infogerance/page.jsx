
"use client"

import SeoMeta from "@/components/common/SeoMeta";
import Cta from "@/components/footers/Cta";
import { info, support } from "@/data/servicesG";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "@/components/card/ServiceCard";
import { apiClient } from "@/components/utils";



export default function Infogerance() {

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
    
    const infoServices = allServices.filter(service => service.category?.id === 4);
    const supportServices = allServices.filter(service => service.category?.id === 5);
   
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
                 Infogérance et Support SI
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
              <h2>INFOGÉRANCE</h2>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <figure className="px-1 pt-1"></figure>
                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {infoServices.slice(0,300).map((service, index) => (
                          <ServiceCard
                            key={`info-${service.id}`}
                            serviceId={service.id}
                            title={truncateText(service.name, 30)}
                            content={truncateText(service.description, 100)}
                            category={service.category?.name}
                           image={info[index]?.bgImage  ||  "/data/servicesG/internet-security.png"}
                            link={`/services/${service.id}`}
                          
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
              <h2>SUPPORT SI</h2>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="bg-base-100 w-96 shadow-sm">
                      <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                        {supportServices.slice(0,3).map((service, index) => (
                          <ServiceCard
                            key={`support-${service.id}`}
                            serviceId={service.id}
                            title={truncateText(service.name, 30)}
                            content={truncateText(service.description, 100)}
                            category={service.category?.name}
                            image={
                              service.image
                                ? `${baseURL}/uploads/services/${service.image}`
                                : support[index]?.bgImage || '/assets/img/icon/internet-security.png'
                            }
                            

                            link={`/services/${service.id}`}
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
