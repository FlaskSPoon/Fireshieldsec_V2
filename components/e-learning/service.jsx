"use client";
import { education, certification_si } from '@/data/education';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

export default function Service21() {
  return (
    <div className="d-flex justify-content-center">
      <div className="wcu-content">
        {/* Section Formation */}
        <div className="text-center p-3">
          <h5 className="text-dark">Trouvez une formation qui vous convient</h5>
          <div className="service-card-wrapper style2 p-4 d-flex justify-content-center">
            {education.map((service, index) => (
              <motion.div
                className="service-card style2 m-3"
                style={{ width: "400px" }}
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="service-thumb test-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={200}
                    height={100}
                    className="rounded"
                  />
                </div>
                <div className="service-content p-3">
                  <h6 className="service-content_title">
                    <Link scroll={false} href={`/audit/${service.id}`}>
                      {service.title}
                    </Link>
                  </h6>
                  <p className="text-container">{service.description}</p>
                  <div className="p-2 text-center">
                    <Link
                      scroll={false}
                      className="link"
                      href={`/service-details/${service.id}`}
                    >
                      Plus de détails
                      <i className="fa-sharp fa-light fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lien "Découvrir plus" pour les formations */}
        <div className="p-2 text-center">
          <Link
            scroll={false}
            className="gt-btn gt-btn-icon"
            href={`/certification`}
          >
            voir tout
          </Link>
          <br />
        </div>

        {/* Section Certifications */}
        <div className="text-center p-3">
          <h5 className="text-dark">
            Nous proposons une gamme complète de certifications en cybersécurité
          </h5>
          <div className="service-card-wrapper style2 p-4 d-flex justify-content-center">
            {certification_si.map((service, index) => (
              <div
                className="service-card style2"
                style={{ width: "600px" }}
                key={index}
              >
                <div className="service-thumb">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={200}
                    height={100}
                    className="rounded"
                  />
                </div>
                <div className="service-content">
                  <h6 className="service-content_title">
                    <Link scroll={false} href={`/audit/${service.id}`}>
                      {service.title}
                    </Link>
                  </h6>
                  <p className="text-container">{service.description}</p>
                  <div className="p-2">
                    <Link
                      scroll={false}
                      className="link"
                      href={`/service-details/${service.id}`}
                    >
                      Plus de détails
                      <i className="fa-sharp fa-light fa-arrow-right-long" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lien "Découvrir plus" pour les certifications */}
        <div className="p-2 text-center">
          <Link
            scroll={false}
            className="gt-btn gt-btn-icon"
            href={`/certification`}
          >
            Découvrir certifications
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
}
