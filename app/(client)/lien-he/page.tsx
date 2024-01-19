import Contact from "@components/client/Contact/Contact";
import { findById } from "@lib/api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Grab An Phát Cần Thơ",
  description: "An Phát - Hợp Tác Xã Dịch Vụ Vận Tải Cần Thơ ",
};

const ContactPage = async () => {
  const Data = await findById("Config", "contact");
  return (
    <div>
      <div className="flex flex-col d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
        <>
          <Contact Data={Data} />
        </>
      </div>
    </div>
  );
};

export default ContactPage;
