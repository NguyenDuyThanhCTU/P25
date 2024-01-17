import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer";
import Header from "@components/layout/client/Header";
import Hotline from "@components/layout/client/Hotline";
import OnTop from "@components/layout/client/OnTop";
import React from "react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="font-LexendDeca font-extralight">
      <Header />
      <div className="mt-[78px] ">{children}</div>
      <OnTop />
      <Hotline />
      <div className="bg-gray-200">
        <Footer />
      </div>
      <Copyright />
    </div>
  );
};

export default layout;
