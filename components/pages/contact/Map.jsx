import React from "react";

export default function Map() {
  return (
    <div className="map-section wow fadeInUp" data-wow-delay=".6s">
      <div className="map-items">
        <div className="googpemap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0180863533624!2d-17.475747724650226!3d14.71156928578811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173ec4a6d88bd%3A0xb0300f6dda3fde04!2sEN%20D&#39;INDUSTRIES%20ET%20DE%20COMMERCE%20(ETIC)%2C%20MERMOZ%20PYROTECHNIQUE%20villa%20n%C2%B033%20DAKAR%20SENEGAL!5e0!3m2!1sfr!2sfr!4v1740754018842!5m2!1sfr!2sfr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
