import Booking from "@components/client/Booking/Booking";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Grab An Phát Cần Thơ",
  description: "An Phát - Hợp Tác Xã Dịch Vụ Vận Tải Cần Thơ ",
};
const BookingPage = () => {
  return (
    <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/418515540_345206448297298_3020859239129877530_n.jpg?alt=media&token=a47b0c6b-1bc1-4b16-b696-2f88facb9502)] bg-no-repeat bg-cover ">
      <div className="bg-[rgba(255,255,255,0.84)] flex justify-center items-center">
        <Booking />
      </div>
    </div>
  );
};

export default BookingPage;
