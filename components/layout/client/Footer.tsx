"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ Data }: any) => {
  const router = useRouter();
  return (
    <div className="bg-[#283037] mt-5">
      <div className="d:w-[1200px] p:mx-auto mx-auto grid p:grid-cols-1 gap-5 d:grid-cols-2 py-10 text-white font-normal">
        <div className="flex flex-col gap-5">
          <h2>THÔNG TIN LIÊN HỆ</h2>
          <div className="h-1 rounded-full w-[100px] bg-white"></div>
          <ul className="flex flex-col gap-1 font-extralight">
            <li className="uppercase font-normal">Đặt xe hợp đồng</li>
            <li>
              {" "}
              <strong>ĐC:</strong> {Data?.CompanyAddress}
            </li>
            <li>
              {" "}
              <strong> Hotline: </strong>
              <span
                className="hover:underline hover:text-blue-500"
                onClick={() => router.push(`https://zalo.me/${Data?.Hotline}`)}
              >
                {" "}
                {Data?.Hotline}
              </span>{" "}
              (Zalo)
            </li>
            <li>
              {" "}
              <strong>Email:</strong> {Data?.Email}
            </li>
            <li className="flex gap-2">
              {" "}
              <strong>Thời gian hoạt động:</strong>{" "}
              <div>
                {Data?.CompanyTime} (Công Ty) <br />
                {Data?.WebsiteTime} (Website)
              </div>
            </li>
            <li>
              {" "}
              <strong>CSKH:</strong> {Data?.PhoneNumber}
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="uppercase">Hỗ trợ khách hàng</h2>
            <div className="h-1 rounded-full w-[100px] bg-white"></div>
            <ul className="flex flex-col gap-1 font-extralight">
              <li>Đặt xe sân bay</li>
              <li>Đặt xe đường dài</li>
              <li>Thuê xe Tour</li>
              <li>Đặt xe ôm công nghệ</li>
              <li>Thuê xe tự lái</li>
              <li>Dịch vụ taxi liên tỉnh</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/Accent-2021-new-300x158.png?alt=media&token=c3d90879-9479-40e3-8c1f-0814e0164339"
              alt="Logo"
              width={300}
              height={158}
            />

            <Image
              src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/taxigrab-300x213.png?alt=media&token=931916d6-e993-43f6-ae24-9a2578559ddf"
              alt="Logo"
              width={300}
              height={213}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
