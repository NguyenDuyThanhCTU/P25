import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ Data }: any) => {
  return (
    <Link href={`/chi-tiet-san-pham/${Data.url}`}>
      <div className="border hover:shadow-2xl duration-300 border-gray-500">
        <div className="p-4 grid d:grid-cols-2 p:grid-cols-1">
          <div>
            <Image src={Data.image} alt="product" width={200} height={200} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5 cursor-pointer ">
              <div className="border hover:border-mainColor duration-300">
                <div className="p-2">4 chỗ</div>
              </div>
              <div className="border  hover:border-mainColor duration-300">
                <div className="p-2">7 chỗ</div>
              </div>
            </div>
            <div className="font-normal text-blue-500">{Data.title}</div>
            <div className="text-red-500 font-normal">{Data.price}</div>
            <div className="flex">
              <div className="bg-blue-500 rounded-lg py-1 cursor-pointer text-white font-normal px-4 hover:bg-blue-700 duration-300">
                Đặt xe nhanh
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
