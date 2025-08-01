

'use client'

import { newsItems } from "@/data/blogs";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCircleUser, FaTag, FaArrowRightLong } from "react-icons/fa6";
import { apiClient } from "@/components/utils";
import { useQuery } from "@tanstack/react-query";
import { about } from "@/data/events";
import { encodeId } from "@/app/hashids/hashids";





export default function Blogs2() {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://back-end-b30o.onrender.com';
  const {
    data: allEven, 
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['evenements'],
    queryFn: () => apiClient.getAll('/evenements'),
  });


  if (isLoading) {
    return <div>Chargement des evenements</div>
  }

  if (isError) {
    return <div>Erreur: {error.message}</div>
  }


  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const getImageByEvenementId = (evenementId) => {
    const aboutItem = about.find(even => even.id === evenementId);
    return aboutItem ? aboutItem.bgImage : null;
  };

  return (
    <section className="blog-area space-top pb-425 fix">
      <div className="container">
        <div className="blog-card-wrap style1 mb-30">
          {allEven.slice(0, 100).map((even, index) => {

            const localImage = getImageByEvenementId(even.id);

            return (
              <div key={even.id} className="blog-card style1 img-shine wow fadeInUp">
                <div className="blog-card-thumb style1">
                  <Image
                    src={
                      even.image
                        ? `${baseURL}/uploads/services/${even.image}`
                        : getImageByEvenementId(even.id) || '/assets/img/blog/blogCardThumb1_4.png'
                    }
                    width={322}
                    height={216}
                    alt="even"
                    onError={(e) => {
                      const fallbackImage = getImageByEvenementId(even.id) || '/assets/img/blog/blogCardThumb1_4.png';
                      if (e.target.src !== fallbackImage) {
                        e.target.src = fallbackImage;
                      }
                    }}
                  />
                </div>
                <div className="blog-card-body">
                  <div className="tag-cloud">
                    <div className="meta">
                      <span className="icon"><FaCircleUser size={22} color="#e02234" /></span>
                      <span className="text">{even.user?.username || 'Fireshield Security'}</span>
                    </div>
                    <div className="meta">
                      <span className="icon"><FaTag size={22} color="#e02234" /></span>
                      <span className="text">{even.category?.name || 'Catégorie '}</span>
                    </div>
                  </div>
                  <h3 className="blog-title style1">
                    <Link scroll={false} href={`/event/${encodeId(even.id)}`}>
                      {truncateText(even.title, 60)}
                    </Link>
                  </h3>
                  <p>{truncateText(even.description, 100)}</p>
                  <div className="btn-wrapper">
                    <Link scroll={false} href={`/event/${encodeId(even.id)}`}>
                      Lire plus {""}
                      <FaArrowRightLong size={15} />
                    </Link>
                  </div>
                  <div className="calendar">
                    <div className="date">{new Date(even.dateEvenement).getDate()}</div>
                    <div className="month">
                      {new Date(even.dateEvenement).toLocaleString("fr-FR", { month: "short" })}
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
