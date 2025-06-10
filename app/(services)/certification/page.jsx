"use client"

import Counter from "@/components/common/Counter";
import Cta from "@/components/footers/Cta";
import { special } from "@/data/certifi";
import { counterBoxes } from "@/data/facts";
import { fricingCards, pricingCards, pricingPlans } from "@/data/pricing";
import Image from "next/image";
import Link from "next/link";

export default  function Certification(){

    return(
        <>
        <main>
        <div className="container  text-white">
        <h1 className="border"> <Image
      alt="icon"
      src="/assets/img/hero/top-view.png"
      width={140}
      height={20} className="p-2 rounded-circle bg-danger float-end"
      
    /> Nos Certifications
    <p className=" d-flex justify-content-center p-4" style={{fontSize:15}}> Nous proposons un accompagnement personnalisé pour les certifications <br/>en cybersécurité,
    avec des formateurs chevronnés et certifiés.</p>
    </h1>
        

          <div className="d-flex justify-content-between align-items-center">
            <div className="bg-dark">
              <h5 className="text-dark bg-danger p-4 m-6 d-flex justify-content-center">
                CERTIFICATIONS PROPOSÉES
              </h5>
              <ul className="text-light p-4">
                <li className="mb-3">
                  <span className="bg-danger rounded-circle p-1 me-2">+</span>
                  ISO 27001 LA/LI
                </li>
                <li className="mb-3">
                  <span className="bg-danger rounded-circle p-1 me-2">+</span>
                  ISO 27005 Risk Manager
                </li>
                <li className="mb-3">
                  <span className="bg-danger rounded-circle p-1 me-2">+</span>
                  ISO 27032 - Lead Cybersecurity Manager
                </li>
                <li className="mb-3">
                  <span className="bg-danger rounded-circle p-1 me-2">+</span>
                  ISO 9001 LI/LA
                </li>
                <li className="mb-3">
                  <span className="bg-danger rounded-circle p-1 me-2">+</span>
                  CISSP
                </li>
                <li className="mb-3">
                  <span className="bg-danger rounded-circle p-1 me-2">+</span>
                  CISA
                </li>
                <li className="mb-3">
                  <span className="bg-danger rounded-circle p-1 me-2">+</span>
                  CISM
                </li>
                <li className="mb-3">
                  <span className="bg-danger rounded-circle p-1 me-2">+</span>
                  COMPTIA Security
                </li>
              </ul>
            </div>

            <div className="w-50">
              <Image
                alt="icon"
                src="/assets/img/hero/medium.png"
                width={1000}
                height={60}
                className="w-100 object-cover"
              />
            </div>
          </div>
        </div>
      
        <Specialisation />
        <div className="counter-wrap mt-5">
          {special.map((box, index) => (
            <div
              className="counter-box style2 wow fadeInUp"
              data-wow-delay={box.delay}
              key={index}
            >
              <div className="counter-box_icon">
                <Image src={box.icon} width={60} height={60} alt="icon" />
              </div>
              <div className="counter-box_counter">
                <div>
                  <Counter parentClass={"counter-number"} max={box.number} />

                  <span className="plus">+</span>
                </div>
                <span>{box.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pb-300" />
        <Cta />
      </main>
    </>
  );
}
export  function Specialisation(){
    function handleClick() {
        alert('Message envoyé avec succés!');
      }
    return(

       <>
       <div className=" p-4"> <h5 className="text-danger  text-center">FORMATIONS SPÉCIALISÉES</h5></div>
 <div className="pricing-card-wrap  wow fadeInUp p-4" data-wow-delay=".4s">
            {pricingPlans.map((card, index) => (
              <div className="pricing-card style3" key={index}>
                <div className="pricing-card-header">
                
                </div>
                <div
                  className="pricing-card-header_badge "
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                  data-bg-src
                >
                  <span>{card.badgeText}</span>
                </div>
                
                <div className="checklist p-3">
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
                </div>
                {/* <div className="btn-wrapper">
                  <Link
                    scroll={false}
                    className={`gt-btn ${card.buttonClass}`}
                    href={`/pricing`}
                  >
                    Get The Plan Now
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
          <div className="p-4"> 
          <div className="pricing-card-wrap  wow fadeInUp p-4" data-wow-delay=".4s">
            {pricingCards.map((card, index) => (
              <div className="pricing-card style3" key={index}>
                <div className="pricing-card-header">
                  {/* <div className="pricing-card-header_price">{card.price}</div> */}
                  {/* <div className="pricing-card-header_text">{card.period}</div> */}
                </div>
                <div
                  className="pricing-card-header_badge "
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                  data-bg-src
                >
                  <span>{card.badgeText}</span>
                </div>
                {/* <p className="text p-3">
                Le plan tarifaire de base est conçu pour les individus ou les petites équipes qui sont{" "}
                </p> */}
                <div className="checklist p-3">
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
                </div>
                  <div>
                    
                  </div>
                
                
              </div>
            ))}
          </div>

          </div>

          <div className="p-4"> 
          <div className="pricing-card-wrap  wow fadeInUp p-4" data-wow-delay=".4s">
            {fricingCards.map((card, index) => (
              <div className="pricing-card style3" key={index}>
                <div className="pricing-card-header">
                  {/* <div className="pricing-card-header_price">{card.price}</div> */}
                  {/* <div className="pricing-card-header_text">{card.period}</div> */}
                </div>
                <div
                  className="pricing-card-header_badge "
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                  data-bg-src
                >
                  <span>{card.badgeText}</span>
                </div>
                
                <div className="checklist p-3">
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
                </div>
                  <div>
                    
                  </div>
                
               
              </div>
            ))}
          </div>

          </div>
        </>
    )
   
}
