"use client";

import { socialLinks } from "@/data/socials";
import Logo from "@/components/common/Logo";
import { closeSideMenu } from "@/utlis/toggleSideMenu";
import Image from "next/image";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "@/config/config.json";
import { apiClient } from "../utils";

export default function SiteMenu() {
  
  // data source
  const { logo } = config.site;
  const { phone1, phone2, email1, email2, location } = config.contact_info;
  const { footer_content } = config.params;

  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && 
        containerRef.current.contains(event.target) &&
        contentRef.current && 
        !contentRef.current.contains(event.target)
      ) {
        closeSideMenu();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const form = useRef();
const sandMail = async (e) => {
  e.preventDefault();
  const email = form.current.querySelector("input[type='email']").value;

  try {
    await apiClient.subscribeToNewsletter({ email });

    toast.success("Abonnement à la newsletter réussi !", {
      position: "bottom-left",
      autoClose: 5000,
    });

    form.current.reset();
  } catch (error) {
    if (error.response?.data?.message) {
      toast.error(error.response.data.message, {
        position: "bottom-left",
        autoClose: 5000,
      });
    } else {
      toast.error("Erreur lors de l’abonnement à la newsletter.", {
        position: "bottom-left",
        autoClose: 5000,
      });
    }
  }
};
  // const sandMail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm("service_noj8796", "template_fs3xchn", form.current, {
  //       publicKey: "iG4SCmR-YtJagQ4gV",
  //     })
  //     .then((res) => {
  //       if (res.status == 200) {
  //         toast.success("Message Sent successfully!", {
  //           position: "bottom-left",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         });
  //         form.current.reset();
  //       } else {
  //         toast.error("Ops Message not Sent!", {
  //           position: "bottom-left",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         });
  //       }
  //     });
  // };
  return (
    <div
      ref={containerRef}
      id="sideMenu"
      className="sidemenu-wrapper sidemenu-info d-none d-lg-block"
    >
      <div className="sidemenu-content" ref={contentRef}>
        <button onClick={closeSideMenu} className="closeButton sideMenuCls">
          <i className="far fa-times" />
        </button>
        <div className="widget">
          <div className="gt-widget-about">
            <div className="about-logo">
              <Logo src={logo} />
            </div>
            <p className="text">
              {footer_content}
            </p>
          </div>
        </div>
        <div className="widget">
          <h3 className="widget_title">Nous contacter</h3>
          <div className="gt-widget-contact">
            <div className="info-box_text">
              <div className="icon">
                <Image
                  alt="img"
                  src="/assets/img/icon/location-dot.svg"
                  width="18"
                  height="20"
                />
              </div>
              <div className="details">
                <p>{location}</p>
              </div>
            </div>
            <div className="info-box_text">
              {/* <div className="icon">
                <Image
                  alt="img"
                  src="/assets/img/icon/phone.svg"
                  width="16"
                  height="16"
                />
              </div> */}
              {/* <div className="details">
                <p>
                  <a href={`tel: ${phone1}`} className="info-box_link">
                  {phone1}
                  </a>
                </p>
                <p>
                  <a href={`tel: ${phone2}`} className="info-box_link">
                  {phone2}
                  </a>
                </p>
              </div> */}
            </div>
            <div className="info-box_text">
              {/* <div className="icon">
                <Image
                  alt="img"
                  src="/assets/img/icon/envelope.svg"
                  width="19"
                  height="16"
                />
              </div> */}
              <div className="details">
                <p>
                  {/* <a
                    href={`mailto: ${email1}`}
                    className="info-box_link"
                  >
                    {email1}
                  </a> */}
                </p>
                <p>
                  {/* <a
                    href={`mailto: ${email2}`}
                    className="info-box_link"
                  >
                    {email2}
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget newsletter-widget">
          <h3 className="widget_title">Souscrire à la Newsletter</h3>
          <form ref={form} className="newsletter-form" onSubmit={sandMail}>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Votre adresse mail"
                required
              />
              <button type="submit" className="gt-btn">
                <i className="far fa-paper-plane text-theme" />
              </button>
            </div>
          </form>
          <div className="gt-social mt-4">
            {socialLinks.map((link, index) => (
              <a href={link.href} key={index}>
                <i className={link.iconClass} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
