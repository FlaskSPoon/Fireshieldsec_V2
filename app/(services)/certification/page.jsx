"use client";

import Cta from "@/components/footers/Cta";
import { Specialisation } from "./sensiblisation";
import Image from "next/image";
import Link from "next/link";

export default function Certification() {
  const certifications = [
    "ISO 27001 LA/LI",
    "ISO 27005 Risk Manager",
    "ISO 27032 - Lead Cybersecurity Manager",
    "ISO 9001 LI/LA",
    "CISSP",
    "CISA",
    "CISM",
    "COMPTIA Security",
  ];

  return (
    <main className="main position-relative" id="mains">
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div
          className="breadcumb"
          data-bg-src=""
          style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
        >
          <div className="container">
            <div className="page-heading">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Nos Certifications
              </h1>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
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

      {/* Contenu principal */}
      <div className="container text-white mt-4">
        <h2 className="border p-4">
          <Image
            alt="icon"
            src="/assets/img/hero/top-view.png"
            width={140}
            height={20}
            className="p-2 rounded-circle bg-danger float-end"
          />
          Nos Certifications
          <p className="d-flex justify-content-center mt-3" style={{ fontSize: 15 }}>
            Nous proposons un accompagnement personnalisé pour les certifications <br />
            en cybersécurité, avec des formateurs chevronnés et certifiés.
          </p>
        </h2>

        {/* Liste des certifications */}
       <div className="d-flex flex-wrap justify-content-between align-items-stretch mt-4 gap-4">
  {/* Card des certifications */}
  <div className="p-4 rounded bg-dark flex-grow-1" style={{ minWidth: "300px", flexBasis: "50%" }}>
    <h5 className="text-dark bg-danger p-3 mb-4 text-center rounded">
      CERTIFICATIONS PROPOSÉES
    </h5>

    <ul className="text-light d-flex flex-column gap-3 list-unstyled">
      {certifications.map((certification, index) => (
        <li
          key={index}
          className="bg-secondary text-white p-2 px-3 rounded d-flex align-items-center"
        >
          <span className="bg-danger rounded-circle p-1 me-2">+</span>
          {certification}
        </li>
      ))}
    </ul>
  </div>

  {/* Card de l'image */}
  <div className="p-4 rounded bg-white flex-grow-1 d-flex align-items-center justify-content-center" style={{ minWidth: "300px", flexBasis: "45%" }}>
    <Image
      alt="illustration"
      src="/assets/img/hero/medium.png"
      width={900}
      height={600}
      className="img-fluid rounded shadow"
    />
  </div>
</div>

      </div>

      {/* Section des services */}
      <Specialisation />

      {/* Call to action */}
      <div className="pb-300" />
      <Cta />
    </main>
  );
}
