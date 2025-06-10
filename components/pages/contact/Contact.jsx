"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
import { FaEnvelope, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import config from "@/config/config.json";

export default function Contact() {
  //data from config site
  const { phone1, phone2, email1, email2, location } = config.contact_info;

  const [isOpen, setOpen] = useState(false);
  const form = useRef();

  const sandMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", form.current, {
        publicKey: "iG4SCmR-YtJagQ4gV"
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Message Sent successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
          form.current.reset();
        } else {
          toast.error("Ops Message not Sent!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        }
      });
  };
  return (
    <>
      <section className="contact-section fix space">
        <div className="container">
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div
                  className="contact-left-items wow fadeInLeft"
                  data-wow-delay=".8s"
                >
                  <div className="contact-info-area-2">
                    <div className="contact-info-items">
                      <div className="icon">
                        <FaPhoneVolume size={25} color="#fff" />
                      </div>
                      <div className="content">
                        <p>Disponible 24h/24 et 7j/7 </p>
                        <h3>
                          {phone1 && <a href={`tel:${phone1}`}>{phone1}</a>}
                        </h3>
                        <h3>
                          {phone2 && <a href={`tel:${phone2}`}>{phone2}</a>}
                        </h3>
                      </div>
                    </div>
                    <div className="contact-info-items">
                      <div className="icon">
                        <FaEnvelope size={25} color="#fff" />
                      </div>
                      <div className="content">
                        <p>Envoyez-nous un email</p>
                        <h3>
                          {email1 && <a href={`mailto:${email1}`}>{email1}</a>}
                        </h3>
                        <h3>
                          {email2 && <a href={`mailto:${email2}`}>{email2}</a>}
                        </h3>
                      </div>
                    </div>
                    <div className="contact-info-items border-none">
                      <div className="icon">
                        <FaLocationDot size={25} color="#fff" />
                      </div>
                      <div className="content">
                        <p>Où nous trouver</p>
                        <h4>{location}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="video-image">
                    <Image
                      alt="img"
                      src="/assets/img/bg/contact.png"
                      width="540"
                      height="293"
                    />
                    <a
                      onClick={() => setOpen(true)}
                      className="play-btn popup-video"
                    >
                      <i className="fa-sharp fa-solid fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contact-content wow fadeInRight"
                  data-wow-delay=".7s"
                >
                  <div className="title-area">
                    <h5 className="subtitle text-start">
                      <span>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/titleIcon.png"
                          width="28"
                          height="12"
                        />
                      </span>{" "}
                      Contactez-nous{" "}
                      <span>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/titleIcon.png"
                          width="28"
                          height="12"
                        />
                      </span>
                    </h5>
                    <h2 className="title mb-50">
                      Restons en contact pour sécuriser votre entreprise
                    </h2>
                    <p>
                      Vous voulez accéder à nos services ou devenir partenaire ?{" "}
                      <br />
                      Besoin d’une expertise en cybersécurité ? <br />
                      Notre équipe est disponible pour répondre à vos questions
                      et vous accompagner dans la sécurisation de vos systèmes
                    </p>
                  </div>
                  <form
                    ref={form}
                    onSubmit={sandMail}
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <span>Votre nom*</span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <span>Votre adresse mail*</span>
                          <input
                            type="text"
                            name="email2"
                            id="email2"
                            required
                            placeholder="Votre adresse mail"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt">
                          <span>Votre message*</span>
                          <textarea
                            name="message"
                            id="message"
                            required
                            placeholder="Votre message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <button type="submit" className="gt-btn">
                          Envoyer le message
                          <i className="fa-solid fa-arrow-right-long ms-1" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="f2Gzr8sAGB8"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
