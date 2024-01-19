import Booking from "@components/client/Booking/Booking";
import DisplayProduct from "@components/client/Home/DisplayProduct";
import Slide from "@components/client/Home/Slide";
import Footer from "@components/layout/client/Footer";
import Header from "@components/layout/client/Header";
import { find } from "@lib/api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Grab An Phát Cần Thơ",
  description: "An Phát - Hợp Tác Xã Dịch Vụ Vận Tải Cần Thơ ",
};

const HomePage = async () => {
  const Data = await find("Products");
  const ProductCategory = await find("ProductCategory");
  const ImageItem = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/415503105_340800135404596_469848352939223444_n.jpg?alt=media&token=7fd6c41a-a142-4dd1-af2b-e480c1ee1687",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/419733111_122112607802168381_4677955368756454232_n.jpg?alt=media&token=69a70ccf-aa9d-484e-9d62-9b8bd80bd124",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/420032116_122113183484168381_7354775147602849383_n.jpg?alt=media&token=005e63a1-c360-4020-9d7f-0639a3c0a45d",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/418514167_122111760164168381_3288119232042079390_n.jpg?alt=media&token=25fe94fe-f08d-42ae-9f2f-dc6cee4ba6d1",
    },
  ];
  return (
    <>
      <Slide />
      <div className=" bg-[url(https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/418515540_345206448297298_3020859239129877530_n.jpg?alt=media&token=a47b0c6b-1bc1-4b16-b696-2f88facb9502)] bg-center">
        <div className="bg-[rgba(255,255,255,0.71)]  flex justify-center items-center">
          <Booking />
        </div>
      </div>
      <div className="bg-[#283037]">
        <div className="d:w-[1200px] mx-auto p:mx-auto grid grid-cols-4 gap-5">
          {ImageItem.map((item: any, idx: number) => (
            <div
              className="w-full h-[200px] py-5 flex justify-center"
              key={idx}
            >
              <img src={item.image} alt="banner" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <DisplayProduct Data={Data} Category={ProductCategory.reverse()} />
    </>
  );
};

export default HomePage;
