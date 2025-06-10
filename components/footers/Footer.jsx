"use client";
import Link from "next/link";
import Image from "next/image";
import { recentPosts } from "@/data/blogs";
import { socialLinks } from "@/data/socials";
import { footerLinks } from "@/data/footer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
import Logo from "@/components/common/Logo";
import config from "@/config/config.json";
import { activeSideMenu } from "@/utlis/toggleSideMenu";
import { activePopupSearch } from "@/utlis/togglePopupSearch";

export default function Footer() {
  // data source
  const { logo, title } = config.site;
  const { phone1, phone2, email1, location, opening } = config.contact_info;
  const { footer_content, copyright } = config.params;

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
            position: "bottom-left",
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
            position: "bottom-left",
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
    <footer
      className="footer-area"
      style={{ backgroundImage: "url(/assets/img/bg/footerBg1.png)" }}
    >
      <div className="widget-area style1 pt-100 pb-80">
        <div className="shape2_1">
          <Image
            src="/assets/img/shape/footerShape1_1.png"
            width={361}
            height={372}
            alt="shape"
          />
        </div>
        <div className="shape2_2">
          <Image
            src="/assets/img/shape/footerShape2_2.png"
            width={288}
            height={250}
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="footer-layout style1">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div
                  className="widget footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="gt-widget-about">
                    <div className="about-logo">
                      <Logo src={logo} />
                    </div>
                    <p className="about-text">{footer_content}</p>
                    <p className="about-text">
                      <i className="fa-regular fa-location" /> {" " + location}
                    </p>

                    <div className="gt-social style2">
                      {socialLinks.map((link, index) => (
                        <Link href={link.href} key={index}>
                          <i className={link.iconClass} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-12">
                <div
                  className="widget widget_nav_menu footer-widget wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <h3 className="widget_title">Liens rapides</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      {footerLinks.map((item, index) => (
                        <li key={index}>
                          <Link scroll={false} href={item.href}>
                            <i className="fa-solid fa-chevrons-right" />
                            {item.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-12">
                <div
                  className="widget footer-widget wow fadeInUp"
                  data-wow-delay="1.3s"
                >
                  <h3 className="widget_title">Derniérs posts</h3>
                  <div className="recent-post-wrap">
                    {recentPosts.map((post) => (
                      <div className="recent-post" key={post.id}>
                        <div className="media-img">
                          <Link
                            scroll={false}
                            href={`/blog-details/${post.id}`}
                          >
                            <Image
                              src={post.imageUrl}
                              width={78}
                              height={79}
                              alt="thumb"
                            />
                          </Link>
                        </div>
                        <div className="media-body">
                          <div className="recent-post-meta">
                            <Link
                              scroll={false}
                              href={`/blog-details/${post.id}`}
                            >
                              <i className="fa-regular fa-clock" />
                              {post.date}
                            </Link>
                          </div>
                          <h4 className="post-title">
                            <Link
                              scroll={false}
                              className="text-inherit"
                              href={`/blog-details/${post.id}`}
                            >
                              {post.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div
                  className="widget widget_nav_menu footer-widget wow fadeInUp mt-5"
                  data-wow-delay="1.6s"
                >
                  <h3 className="widget_title">
                    <Link
                      scroll={false}
                      href={`/contact`}
                      className="gt-btn gt-btn-icon"
                    >
                      NOUS CONTACTER
                    </Link>
                    <button
                      type="button"
                      onClick={activeSideMenu}
                      className="simple-icon sideMenuInfo sidebar-btn"
                    ></button>
                  </h3>
                  <div className="checklist">
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-thin fa-envelope" />
                      </li>
                      <li className="text-white">{email1}</li>
                    </ul>
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-light fa-phone-volume" />
                      </li>
                      <li className="text-white">{phone1}</li>
                    </ul>
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-light fa-phone-volume" />
                      </li>
                      <li className="text-white">{phone2}</li>
                    </ul>
                    <ul className="ps-0">
                      <li className="text-white">
                        <i className="fa-regular fa-clock" />
                      </li>
                      <li className="text-white">{opening}</li>
                    </ul>
                    <form
                      ref={form}
                      onSubmit={sandMail}
                      className="email-input-container"
                    >
                      <input
                        type="email"
                        id="email"
                        placeholder="Votre adresse mail"
                        required
                      />
                      <button type="submit" id="submitButton">
                        <i className="fa-regular fa-arrow-right-long" />
                      </button>
                    </form>
                    <form id="termsForm">
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          name="agree"
                          id="agreeCheckbox"
                        />
                        <span className="checkmark" />
                        J'accepte les{" "}
                        <Link
                          scroll={false}
                          className="text-underline"
                          href={`/privacyPolicy`}
                        >
                          Politiques de confidentialité.
                        </Link>
                      </label>
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap bg-theme">
        <div className="container">
          <div className="copyright-layout">
            <div className="layout-text wow fadeInUp" data-wow-delay=".3s">
              <p className="copyright">
                <i className="fal fa-copyright" /> {copyright}
                <Link scroll={false} href={`/`}>
                  {title}
                </Link>
              </p>
            </div>
            <div className="layout-link wow fadeInUp" data-wow-delay=".6s">
              <div className="link-wrapper">
                <Link scroll={false} href={`/mention-legal`}>
                  Mentions Légales{" "}
                </Link>
                <Link scroll={false} href={`/termes-conditions`}>
                  Termes &amp; Conditions{" "}
                </Link>
                <Link scroll={false} href={`/privacy-policy`}>
                  Notre politique
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
