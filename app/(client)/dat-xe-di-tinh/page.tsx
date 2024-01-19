import ProductCard from "@components/client/Product/ProductCard";
import { find } from "@lib/api";
import React from "react";

const DisplayProductPage = async ({ params }: { params: { slug: string } }) => {
  const FetchData = await find("Products");
  const Data = FetchData.filter(
    (item: any) => item.level0 === "dat-xe-di-tinh"
  );

  return (
    <div>
      <div className="d:w-[1200px] mx-auto p:w-auto">
        <h2> Đặt xe đi tỉnh</h2>
        <div className=" grid d:grid-cols-3 p:grid-cols-2">
          {Data?.map((item: any, idx: number) => (
            <div key={idx}>
              <ProductCard Data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayProductPage;
