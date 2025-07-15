
"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
const ServiceCard = (props) => {
  const {
    serviceId,
    title,
    author,
    content,
    category,
     image,
     avatar,
    extra,
    link,
    onView,
  } = props;

  const [heart, setHeart] = useState(true);

  return (
    <div className={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white rounded-xl shadow-md ${extra}`}>
      <div className="h-full w-full">
        <div className="relative w-full">
          <Image
            width={100}
            height={50}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            src={image}
            alt={title || "Service image"}
          />
          {/* <button
            onClick={() => setHeart(!heart)}
            className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              <IoMdEye />
            </div>
          </button> */}
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {title}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2 line-clamp-2">
              {content}
            </p>
          </div>
<div className="btn-wrapper">
          <Link scroll={false} href={link} className="link-btn">
            En savoir plus{" "}
            <i className="fa-sharp fa-light fa-arrow-right-long" />
          </Link>
        </div>
       
        </div>

        
      </div>
    </div>
  );
};

export default ServiceCard;