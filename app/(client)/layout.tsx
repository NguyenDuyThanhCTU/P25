import Booking from "@components/layout/client/Booking";
import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer";
import Header from "@components/layout/client/Header";
import Hotline from "@components/layout/client/Hotline";
import OnTop from "@components/layout/client/OnTop";
import { find, findById, findOne } from "@lib/api";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = async ({ children }) => {
  const PostCategory = await find("PostCategory");
  const ProductCategory = await find("ProductCategory");
  const Data = await findById("Config", "contact");
  return (
    <div className="font-LexendDeca font-extralight">
      <div className="relative z-50">
        <Header
          PostCategory={PostCategory}
          ProductCategory={ProductCategory}
          Data={Data}
        />
      </div>
      <div className="d:mt-0 p:mt-[84px]">{children}</div>
      <div className="relative z-50">
        <OnTop />
        <Hotline />
        <Booking />
      </div>
      <div className="bg-gray-200">
        <Footer Data={Data} />
      </div>
      <Copyright />
    </div>
  );
};

export default layout;
