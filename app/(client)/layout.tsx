import Booking from "@components/layout/client/Booking";
import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer";
import Header from "@components/layout/client/Header";
import Hotline from "@components/layout/client/Hotline";
import OnTop from "@components/layout/client/OnTop";
import { find } from "@lib/api";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = async ({ children }) => {
  const PostCategory = await find("PostCategory");
  const ProductCategory = await find("ProductCategory");

  return (
    <div className="font-LexendDeca font-extralight">
      <div className="relative z-50">
        <Header PostCategory={PostCategory} ProductCategory={ProductCategory} />
      </div>
      <div className="">{children}</div>
      <OnTop />
      <Hotline />
      <Booking />
      <div className="bg-gray-200">
        <Footer />
      </div>
      <Copyright />
    </div>
  );
};

export default layout;
