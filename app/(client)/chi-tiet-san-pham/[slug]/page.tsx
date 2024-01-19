import ProductDetail from "@components/client/Product/ProductDetail";
import { find, findById } from "@lib/api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Grab An Phát Cần Thơ",
  description: "An Phát - Hợp Tác Xã Dịch Vụ Vận Tải Cần Thơ ",
};

const ProductDetailPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchValue: any = searchParams.poid;
  const Products = await find("Products");

  const poid = parseInt(searchValue) + 1;
  const Data = await findById("Products", poid);
  const similarProduct = Products?.filter(
    (item: any) => item.level0 === Data?.level0
  );
  return (
    <div>
      <div>
        <ProductDetail Data={Data} SimilarProduct={similarProduct} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
