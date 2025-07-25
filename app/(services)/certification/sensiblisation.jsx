"use client"

import ServiceCard from "@/components/card/ServiceCard";
import SeoMeta from "@/components/common/SeoMeta";
import { apiClient } from "@/components/utils";
import { fricingCards, pricingCards } from "@/data/pricing";
import { formation } from "@/data/servicesG";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";


export function Specialisation() {

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
    
    const formationServices = allServices.filter(service => service.category?.id === 11);
  
   
   
    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    };
  function handleClick() {
    alert("Message envoyé avec succés!");
  }
  return (
    <>
     <SeoMeta title="Conseil, Audit et Gouvernance du SI | Fireshield Security" />
      <SeoMeta description="Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection" />
      <div className=" p-4">
        {" "}
        <h5 className="text-danger  text-center">FORMATIONS SPÉCIALISÉES</h5>
      </div>
       <div className="container">
                <div className="row">
                  <div className="bg-base-100 w-96 shadow-sm">
                    <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                      {formationServices.slice(0, 300).map((service, index) => (
                        <ServiceCard
                          key={`formation-${service.id}`}
                          serviceId={service.id}
                          title={truncateText(service.name, 30)}
                          content={truncateText(service.description, 100)}
                          category={service.category?.name}
                          price={service.price}
                          image={
                            service.image
                              ? `${baseURL}/uploads/services/${service.image}`
                              : formation[index]?.bgImage || '/assets/img/icon/internet-security.png'
                          }
                          imageWidth={formation[index]?.width}
                          imageHeight={formation[index]?.height}
                          link={`/services/${service.id}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
      <div className="p-4">
        {/* <div
          className="pricing-card-wrap  wow fadeInUp p-4"
          data-wow-delay=".4s"
        >
          {pricingCards.map((card, index) => (
            <div className="pricing-card style3" key={index}>
              <div className="pricing-card-header"> */}
                {/* <div className="pricing-card-header_price">{card.price}</div> */}
                {/* <div className="pricing-card-header_text">{card.period}</div> */}
              {/* </div>
              <div
                className="pricing-card-header_badge "
                style={{ backgroundImage: `url(${card.imageUrl})` }}
                data-bg-src
              >
                <span>{card.badgeText}</span>
              </div> */}
              {/* <p className="text p-3">
                Le plan tarifaire de base est conçu pour les individus ou les petites équipes qui sont{" "}
                </p> */}
              {/* <div className="checklist p-3">
                {card.features.map((feature, featureIndex) => (
                  <ul key={featureIndex}>
                    <li>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/signIcon.png"
                        width="16"
                        height="16"
                      />
                    </li>
                    <li>{feature}</li>
                  </ul>
                ))}
              </div> */}
              <div></div>
            {/* </div>
          ))}
        </div> */}
      </div>

      <div className="p-4">
        {/* <div
          className="pricing-card-wrap  wow fadeInUp p-4"
          data-wow-delay=".4s"
        >
          {fricingCards.map((card, index) => (
            <div className="pricing-card style3" key={index}>
              <div className="pricing-card-header"> */}
                {/* <div className="pricing-card-header_price">{card.price}</div> */}
                {/* <div className="pricing-card-header_text">{card.period}</div> */}
              {/* </div> */}
              {/* <div
                className="pricing-card-header_badge "
                style={{ backgroundImage: `url(${card.imageUrl})` }}
                data-bg-src
              >
                <span>{card.badgeText}</span>
              </div> */}

              {/* <div className="checklist p-3">
                {card.features.map((feature, featureIndex) => (
                  <ul key={featureIndex}>
                    <li>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/signIcon.png"
                        width="16"
                        height="16"
                      />
                    </li>
                    <li>{feature}</li>
                  </ul>
                ))} 
              </div> */}
              <div></div>
            {/* </div>
          ))} */}
        {/* </div> */}
      </div>
      
    </>
  );
}


