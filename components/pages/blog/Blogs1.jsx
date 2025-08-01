"use client"

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaArrowRightLong, FaCircleUser, FaTag } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/components/utils";
import { about } from "@/data/servicesG";
import { encodeId } from "@/app/hashids/hashids";

export default function Blogs1() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://back-end-b30o.onrender.com';
  const {
    data: response,
    isLoading,
    error
  } = useQuery({
    queryKey: ['article'],
    queryFn: () => apiClient.getAll('/article'),
    enabled: true,
  });

  const allArticle = response?.data || [];

  if (isLoading) {
    return <div>Chargement des articles</div>
  }

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const getImageByServiceId = (articleId) => {
    const aboutItem = about.find(item => item.id === articleId);
    return aboutItem ? aboutItem.bgImage : null;
  };

  return (
    <section className="blog-area space-top pb-425 fix">
      <div className="container">
        <div className="blog-card-wrap style1 mb-30">
          {allArticle.slice(0, 300).map((article, index) => {
           
            const localImage = getImageByServiceId(article.id);
            
            return (
              <div key={article.id} className="blog-card style1 img-shine wow fadeInUp">
                <div className="blog-card-thumb style1">
                  <Image
                    src={
                      localImage 
                        ? localImage 
                        : article.image 
                          ? `${baseURL}/uploads/articles/${article.image}` 
                          : '/assets/img/blog/blogCardThumb1_4.png'
                    }
                    width={322}
                    height={216}
                    alt="article"
                  />
                </div>
                <div className="blog-card-body">
                  <div className="tag-cloud">
                    <div className="meta">
                      <span className="icon"><FaCircleUser size={22} color="#e02234" /></span>
                      <span className="text">{article.user?.username || 'Fireshield Security'}</span>
                    </div>
                    <div className="meta">
                      <span className="icon"><FaTag size={22} color="#e02234" /></span>
                      <span className="text">{article.category?.name || 'Catégorie '}</span>
                    </div>
                  </div>
                  <h3 className="blog-title style1">
                    <Link scroll={false} href={`/blog/blog-details/${encodeId(article.id)}`}>
                      {truncateText(article.titre, 60)}
                    </Link>
                  </h3>
                  <p>{truncateText(article.description, 100)}</p>
                  <div className="btn-wrapper">
                    <Link scroll={false} href={`/blog/blog-details/${encodeId(article.id)}`}>
                      Lire plus {""}
                      <FaArrowRightLong size={15} />
                    </Link>
                  </div>
                  <div className="calendar">
                    <div className="date">{new Date(article.datePublication).getDate()}</div>
                    <div className="month">
                      {new Date(article.datePublication).toLocaleString("fr-FR", { month: "short" })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



