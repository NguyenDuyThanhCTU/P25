"use client";
import { useData } from "@context/DataProviders";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function Hotline() {
  return (
    <div className="fixed bottom-7 right-10  box-border flex flex-col gap-5">
      <Link href={`https://zalo.me/0939656507`}>
        <div className="flex items-center">
          <div className="h-14 w-14   zalo-animation bg-blue-500">
            <SiZalo className="text-white text-[40px]" />
          </div>
        </div>
      </Link>
      <Link href={`tel:0923870930`}>
        <div className="flex items-center">
          <div className="text-black font-normal d:flex p:hidden justify-start items-center rounded-full w-[250px]  h-[60px] bg-white shadow-2xl absolute right-1 ">
            <span className="ml-5">Hotline: 0923870930</span>
          </div>
          <div className="h-14 w-14   call-animation">
            <BiPhoneCall className="text-white text-[40px]" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Hotline;
