import Image from "next/image";
import React from "react";
import { HiHeart, HiStar } from "react-icons/hi";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div
      className="flex py-7 px-2 border-b cursor-pointer 
      hover:opacity-80 hover:shadow-lg transition duration-200 
      ease-out first:border-t"
    >
      <div
        className="relative h-24 w-40 
        md:h-52 md:w-80 flex-shrink-0"
      >
        <Image src={img} className="object-cover rounded-2xl" fill alt="/" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HiHeart className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <HiStar className="h-5 text-[#87AE73]" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
