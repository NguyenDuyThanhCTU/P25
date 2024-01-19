import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import Link from "next/link";
import { find } from "@lib/api";

const Booking = () => {
  return (
    <>
      <div className="border-4 border-orange-700 my-20 p:w-auto d:w-[30vw]">
        <div className="bg-orange-500 text-white uppercase text-[23px] font-normal text-center py-2">
          Đặt xe
        </div>
        <div className="bg-orange-200">
          <div className="p-5 flex flex-col gap-3">
            <div>
              <label className="font-normal ">Xác định điểm đón</label>
              <div className="border rounded-lg mt-3 bg-white">
                <div className="p-2 flex items-center">
                  <div className="text-[20px] px-2 py-1 cursor-pointer text-red-500">
                    <IoLocationSharp />
                  </div>
                  <input
                    type="text"
                    placeholder="Điểm đón"
                    className="outline-none w-full bg-white"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="font-normal ">Nhập điểm trả</label>
              <div className="border rounded-lg mt-3 bg-white">
                <div className="p-2 flex items-center">
                  <div className="text-[20px] px-2 py-1 text-blue-500">
                    <IoLocationSharp />
                  </div>
                  <input
                    type="text"
                    placeholder="Điểm đón"
                    className="outline-none w-full bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="font-normal ">Dịch vụ</label>
                <div className="border rounded-lg mt-3 bg-white">
                  <div className="p-2 flex items-center">
                    <div className="text-[20px] px-2 py-1 text-green-700">
                      <TbTargetArrow />
                    </div>
                    <select className="outline-none w-full bg-white">
                      <option value="1">1 Chiều</option>
                      <option value="2">2 Chiều xe ở lại phục vụ</option>
                      <option value="3">2 Chiều đưa đi đón về</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="font-normal ">Loại xe</label>
                <div className="border rounded-lg mt-3 bg-white">
                  <div className="p-2 flex items-center">
                    <div className="text-[20px] px-2 py-1 text-red-500">
                      <FaCarSide />
                    </div>
                    <select className="outline-none w-full bg-white">
                      <option value="1">Xe 4 Chỗ</option>
                      <option value="2">Xe 7 Chỗ</option>
                      <option value="3">Xe 16 Chỗ</option>
                      <option value="4">Xe Honda</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href={`/chon-xe`}
              className="bg-adminOrange text-center py-3 uppercase text-[22px] font-normal text-white rounded-md mt-3 hover:bg-orange-500 duration-300 cursor-pointer"
            >
              Xem giá
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
