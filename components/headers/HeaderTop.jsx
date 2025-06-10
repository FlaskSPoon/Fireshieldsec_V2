import React from "react";
import config from "@/config/config.json";
import { socialLinks } from "@/data/socials";

export default function HeaderTop() {
  
  // data source
  const { phone1, phone2, email1 } = config.contact_info;

  return (
    <div className="header-top-section style1 fix">
      <div className="container">
        <div className="header-top-wrapper">
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope" />
              <a href={`mailto:${email1}`} className="link">
                {email1}
              </a>
            </li>
            {/* <li>
              <i className="fa-solid fa-phone-volume" />
              <a href={`tel:${phone1}`}>{phone1}</a>
            </li> */}
            {/* <li>
              <i className="fa-solid fa-phone-volume" />
              <a href={`tel:${phone2}`}>{phone2}</a>
            </li> */}
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <span>Nous suivre :</span>
              {socialLinks.map((link, index) => (
                <a href={link.href} key={index}>
                  <i className={link.iconClass} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
