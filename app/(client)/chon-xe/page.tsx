import SendBooking from "@components/client/Booking/SendBooking";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Grab An Phát Cần Thơ",
  description: "An Phát - Hợp Tác Xã Dịch Vụ Vận Tải Cần Thơ ",
};
const SendBookingPage = () => {
  return (
    <div>
      <div className="d:w-[1200px]  p:mx-auto mx-auto py-10 min-h-screen">
        <SendBooking />
      </div>
    </div>
  );
};

export default SendBookingPage;
