import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PageCerti() {
  return (
    <section className="about-area fix position-relative">
      <div className="shape3_1 d-none d-xl-block">
        <Image
          alt="shape"
          src="/assets/img/shape/aboutShape2_1.png"
          width="251"
          height="300"
        />
      </div>
      
      <div className="container">
        <div className="about-wrapper style3 pt-50 space-bottom">
          <div className="flex items-center gap-8" data-wow-delay=".3s">
            
            <div className="w-1/2">
              <Image
                data-tilt=""
                data-tilt-max={25}
                alt="thumb"
                src="/assets/img/about/t.jpg"
                width="500"
                height="2000"
              />
            </div>
            <div className="about-thumb-box movingX about-thumb2">
              <Image
                alt="thumb"
                src="/assets/img/about/aboutThumb3_2.png"
                width="256"
                height="147"
              />
            </div>
           
          </div>
          <div className="w-1/2" data-wow-delay=".6s">
            <div className="title-area">
              <h5 className="subtitle text-start">
                {" "}
                <span>
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>{" "}
                FORMATIONS SPÉCIALISÉES{" "}
                <span>
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>{" "}
              </h5>
              <p className="text">
              Nous développons des formations propriétaires pour répondre aux besoins spécifiques de 
              vos équipes techniques en cybersécurité et sécurité de l’information.</p>
            </div>
            <h3 className="text-title">Contactez-nous pour en discuter !</h3>
            <div className="fancy-box-wrapper">
              <div className="fancy-box style1">
                <div className="fancy-box_icon">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/aboutIcon1_2.png"
                    width="44"
                    height="44"
                  />
                </div>
                <div className="fancy-box_content">
                  <h4>Certificat partageable sur linkedln</h4>
                </div>
              </div>
              <div className="fancy-box style1">
                <div className="fancy-box_icon">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/aboutIcon1_3.png"
                    width="44"
                    height="44"
                  />
                </div>
                <div className="fancy-box_content">
                  <h4>Enseigné en anglais</h4>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
