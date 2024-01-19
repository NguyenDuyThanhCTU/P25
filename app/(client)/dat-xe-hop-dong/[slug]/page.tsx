import { ProductTypeItems } from "@assets/item";
import ProductCard from "@components/client/Product/ProductCard";
import { find } from "@lib/api";
import React from "react";
import slugify from "slugify";

const ProductSlugPage = async ({ params }: { params: { slug: string } }) => {
  const FetchData = await find("Products");
  const Data = FetchData.filter((item: any) => item.level1 === params.slug);
  const Category = await find("ProductCategory");
  const CategoryData = Category.filter(
    (item: any) =>
      slugify(item?.level1 ? item?.level1 : "", {
        lower: true,
        locale: "vi",
      }) === params.slug
  );

  return (
    <div>
      <div className="d:w-[1200px] mx-auto p:w-auto ">
        <h2 className="text-[25px] font-normal uppercase py-5">
          {CategoryData[0]?.level1}
        </h2>
        <div className=" grid d:grid-cols-3 p:grid-cols-2 gap-5">
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

export default ProductSlugPage;
