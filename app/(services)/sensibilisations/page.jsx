"use client";

import { metadata } from "@/app/not-found";
import SeoMeta from "@/components/common/SeoMeta";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Cta from "@/components/footers/Cta";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/components/utils";
import { sensibilisation } from "@/data/servicesG";
import ServiceCard from "@/components/card/ServiceCard";
import { encodeId } from "@/app/hashids/hashids";

export default function Sensibilsations() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://back-end-b30o.onrender.com';

  const {
    data: allServices = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['all-services'],
    queryFn: () => apiClient.getAll('/services'),
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/assets/img/hero/confident.png",
    "/assets/img/hero/group.png",
    "/assets/img/hero/diverse-stud.png",
    "/assets/img/hero/diverse-stud.png",
    "/assets/img/hero/confident1.png",
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const sensibilisationServices = allServices.filter(service => service.category?.id === 10);

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <>
       <SeoMeta title="Conseil, Audit et Gouvernance du SI | Fireshield Security" />
      <SeoMeta description="Cybersécurité, Gestion des systèmes d'information (SI), Conseil, Protection et Détection" />
      <div className="breadcrumb-wrapper">
        <div
          className="breadcumb"
          style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
        >
          <div className="container">
            <div className="page-heading">
              <h1>Sensibilisation En Cybersécurité</h1>
              <ul className="breadcrumb-items">
                <li><Link scroll={false} href={`/`}>Accueil</Link></li>
                <li><i className="fas fa-chevrons-right" /></li>
                <li>Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-2">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="p-3">
              <h3 className="bg-dark text-white text-center">Formations et Sensibilisation</h3>
              <p>Notre programme de formation complet est conçu pour permettre à votre équipe
                 d'acquérir les connaissances et les compétences nécessaires pour identifier, 
                 prévenir, et répondre efficacement aux cybermenaces. Grâce à des sessions 
                 interactives et engageantes, nous visons à favoriser une culture de la sécurité 
                 au sein de votre organisation, transformant vos employés de vulnérabilités
                  potentielles en votre ligne de défense la plus forte.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3">
              <div className="carousel slide">
                <div className="carousel-inner">
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                    >
                      <Image
                        src={src}
                        className="d-block w-100"
                        alt={`Slide ${index + 1}`}
                        width={400}
                        height={150}
                      />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" onClick={prevSlide}>
                  <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" onClick={nextSlide}>
                  <span className="carousel-control-next-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center w-[200px] p-2">
          <section>
            <div className="mt-50">
              <h2>SENSIBILISATION</h2>
              <div className="container">
                <div className="row">
                  <div className="bg-base-100 w-96 shadow-sm">
                    <div className="service-card-wrapper style2 p-4 d-flex justify-centent-center">
                      {sensibilisationServices.slice(0, 300).map((service, index) => (
                        <ServiceCard
                          key={`sensibilisation-${service.id}`}
                          serviceId={service.id}
                          title={truncateText(service.name, 30)}
                          content={truncateText(service.description, 100)}
                          category={service.category?.name}
                          image={
                            service.image
                              ? `${baseURL}/uploads/services/${service.image}`
                              : sensibilisation[index]?.bgImage || '/assets/img/icon/internet-security.png'
                          }
                          link={`/sensibilisations/${encodeId(service.id)}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="pb-300" />
        <Cta />
      </div>
    </>
  );
}
