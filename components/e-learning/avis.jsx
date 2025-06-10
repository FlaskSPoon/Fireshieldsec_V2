import { blogCards2 } from "@/data/blogs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaArrowRightLong, FaCircleUser, FaTag } from "react-icons/fa6";

export default function Blogs1() {
  return (
    <section className="blog-area space-top pb-425 fix">
      <div className="container">
        <div className="blog-card-wrap style1 mb-30">
          {blogCards2.slice(0.3).map((card, index) => (
            <div
              key={index}
              className="blog-card style1 img-shine wow fadeInUp"
              data-wow-delay={card.delay}
            >
              <div className="blog-card-thumb style1">
                <Image src={card.imgSrc} width={322} height={216} alt="thumb" />
              </div>
              <div className="blog-card-body">
                <div className="tag-cloud">
                  <div className="meta">
                    <span className="icon">
                      <FaCircleUser size={22} color="#e02234" />
                    </span>
                    <span className="text">{card.userName}</span>
                  </div>
                  <div className="meta">
                    <span className="icon">
                      <FaTag size={22} color="#e02234" />
                    </span>
                    <span className="text">{card.category}</span>
                  </div>
                </div>
                <h3 className="blog-title style1">
                  <Link scroll={false} href={`/blog/blog-details`}>
                    {card.title}
                  </Link>
                </h3>
                <div className="btn-wrapper">
                  <Link scroll={false} href={`/blog/blog-details`}>
                    Lire plus {""}
                    <FaArrowRightLong size={15} />
                  </Link>
                </div>
                <div className="calendar">
                  <div className="date">{card.date}</div>
                  <div className="month">{card.month}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
