"use client";

import { apiClient } from '@/components/utils';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';


export default function CommentForm({ articleId=null, serviceId=null}) {

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      articleId,
      serviceId,
    };

    try {
      await apiClient.post("/comment", payload);
      toast.success("Commentaire envoyé avec succès !");
      formRef.current.reset();
    } catch (error) {
      console.error("Erreur:", error);
      toast.error("Erreur lors de l'envoi du commentaire.");
    }
  };

   return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="form-clt">
            <input type="text" name="name" placeholder="Votre nom" required />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-clt">
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-clt">
            <textarea
              name="message"
              placeholder="Votre message"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <button type="submit" className="gt-btn">
            Poster le commentaire
            <i className="fa-sharp fa-light fa-arrow-right-long ms-1" />
          </button>
        </div>
      </div>
    </form>
  );
}
