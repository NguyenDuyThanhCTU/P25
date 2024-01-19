import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ Data }: any) => {
  return (
    <Link href={`/chi-tiet-san-pham/${Data.url}`}>
      <div className="border hover:shadow-xl rounded-lg d:text-[16px] p:text-[12px]">
        <div>
          <Image
            src={Data?.image}
            alt="Picture of the author"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="p-4 flex flex-col  items-center gap-2 font-normal">
          <div className="flex gap-5 cursor-pointer ">
            <div className="border hover:border-mainColor duration-300">
              <div className="p-2">4 chỗ</div>
            </div>
            <div className="border  hover:border-mainColor duration-300">
              <div className="p-2">7 chỗ</div>
            </div>
          </div>
          <div className="text-blue-500">{Data?.title}</div>
          <div className="text-red-500">{Data?.price}</div>
          <div className="bg-blue-500  px-4 py-1 rounded-lg text-white">
            Đặt xe nhanh
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
