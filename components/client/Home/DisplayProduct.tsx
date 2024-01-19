"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import slugify from "slugify";
import ProductCard from "./ProductCard";

const DisplayProduct = ({ Data, Category }: any) => {
  const Category1 = Category?.filter(
    (item: any) => item.level0 === "Đặt xe đi tỉnh"
  );
  const [CategorySelected, setCategorySelected] = useState<any>(
    Category1[0]?.level1
  );
  const [ProductSelected, setProductSelected] = useState<any>();

  const HandleSelected = (item: any) => {
    setCategorySelected(item);
    const CategoryValue = slugify(item, {
      lower: true,
      locale: "vi",
    });

    const sort = Data?.filter((items: any) => items.level1 === CategoryValue);
    if (sort.length > 0) {
      setProductSelected(sort);
    }
  };

  useEffect(() => {
    const sort = Data?.filter(
      (items: any) => items.level1 === "tp-ho-chi-minh"
    );
    if (sort.length > 0) {
      setProductSelected(sort);
    }
  }, []);
  return (
    <div>
      <div className="w-full p:h-auto d:h-[90vh]">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/XE%20H%E1%BB%A2P(1).png?alt=media&token=57665c47-d051-4ce4-85c0-88ad132f88e2"
          alt="banner"
          width={1600}
          height={800}
          className="w-full h-full"
        />
      </div>
      <div className="d:w-[1300px] p:w-auto mx-auto py-5">
        <div className="flex items-center justify-center gap-5 py-5">
          <div className="h-1 w-full bg-gray-200"></div>
          <h2 className="uppercase flex text-[25px] font-normal ">
            <p className="w-max">Đặt xe đi tỉnh</p>
          </h2>
          <div className="h-1 w-full bg-gray-200"></div>
        </div>
        <div className="flex  gap-2 justify-center flex-wrap">
          {Category1.map((item: any, idx: number) => (
            <div
              key={idx}
              className={`${
                item.level1 === CategorySelected
                  ? "border-black text-black"
                  : "border-gray-200 text-gray-500"
              } border-2 rounded-full cursor-pointer`}
              onClick={() => HandleSelected(item.level1)}
            >
              <div className="py-2 px-4">{item.level1}</div>
            </div>
          ))}
        </div>
        <div className="grid d:grid-cols-3 gap-5 mt-5 p:grid-cols-2">
          {ProductSelected?.map((item: any, idx: number) => (
            <div key={idx}>
              <ProductCard Data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
