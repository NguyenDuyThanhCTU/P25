"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Booking = () => {
  return (
    <Link
      className="fixed bottom-1/2 left-0  box-border flex flex-col gap-5 zoom-animation cursor-pointer"
      href={`/chon-xe`}
    >
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/datxe.png?alt=media&token=995d8a4d-d6a2-4947-8957-83a62d820125"
        alt="booking button"
        width={50}
        height={25}
      />
    </Link>
  );
};

export default Booking;
