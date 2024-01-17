"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#283037]">
      <div className="w-[1200px] mx-auto grid grid-cols-2 py-10 text-white font-normal">
        <div className="flex flex-col gap-5">
          <h2>THÔNG TIN LIÊN HỆ</h2>
          <div className="h-1 rounded-full w-[100px] bg-white"></div>
          <ul className="flex flex-col gap-1 font-extralight">
            <li> ĐẶT XE ĐI TỈNH | TAXI ĐƯỜNG DÀI 24H</li>
            <li> CN HCM: Q. Bình Thạnh, TP. Hồ Chí Minh</li>
            <li> CN Miền Tây: Chợ Ba Se Phong Điền, Cần Thơ</li>
            <li> CN Miền Đông: Vòng Xoay Ngã Tư Đồng Xoài, Bình Phước</li>
            <li> Hotline: 038.6019.486 (Zalo)</li>
          </ul>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2>THÔNG TIN LIÊN HỆ</h2>
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
