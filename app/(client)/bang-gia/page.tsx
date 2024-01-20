import Contact from "@components/client/Contact/Contact";
import NewPosts from "@components/client/Posts/NewPosts";
import Posts from "@components/client/Posts/Posts";
import { convertDate } from "@components/items/server-items/Handle";
import { find } from "@lib/api";
import { Metadata } from "next";
import React from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Grab An Phát Cần Thơ",
  description: "An Phát - Hợp Tác Xã Dịch Vụ Vận Tải Cần Thơ ",
};

const ListPricePage = async () => {
  const PostCategory = await find("Posts");
  const Data = PostCategory.filter((item: any) => item.level0 === "bang-gia");
  const mainData = Data.filter(
    (item: any) => item.title === "Bảng giá chính thức"
  );
  const Date = convertDate(mainData[0]?.createdAt);

  const priceData = [
    {
      route: "TP. Tân An - Sài Gòn",
      car4Seats: "700.000đ",
      car7Seats: "900.000đ",
    },
    {
      route: "TP. Tân An - Vũng Tàu",
      car4Seats: "1.450.000đ",
      car7Seats: "1.700.000đ",
    },
    {
      route: "TP. Tân An - TP. Cần Thơ",
      car4Seats: "1.300.000đ",
      car7Seats: "1.600.000đ",
    },
    {
      route: "TP. Tân An - TP. Bến Tre",
      car4Seats: "450.000đ",
      car7Seats: "650.000đ",
    },
    {
      route: "TP. Tân An - TP. Châu Đốc",
      car4Seats: "2.000.000đ",
      car7Seats: "2.300.000đ",
    },
    {
      route: "TP. Tân An - Cha Diệp Cà Mau",
      car4Seats: "2.500.000đ",
      car7Seats: "2.800.000đ",
    },
    {
      route: "TP. Tân An - TP. Đà Lạt",
      car4Seats: "3.400.000đ",
      car7Seats: "3.800.000đ",
    },
    {
      route: "TP. Tân An - TP. Phan Thiết",
      car4Seats: "2.500.000đ",
      car7Seats: "2.800.000đ",
    },
    {
      route: "TP. Tân An - TP. Biên Hoà",
      car4Seats: "900.000đ",
      car7Seats: "1.100.000đ",
    },
  ];
  return (
    <div className="d:w-[1200px]  p:mx-auto mx-auto grid p:grid-cols-1 d:grid-cols-7 py-10 gap-5 min-h-screen">
      <div className="border h-max border-gray-400 d:block p:hidden col-span-2">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Các bài báo giá
          </h2>
          <NewPosts Data={Data} />
        </div>
      </div>
      <div className="p:col-auto d:col-span-5">
        <div className=" pb-5 border-b flex flex-col gap-4">
          <h3 className=" text-[34px] font-normal">{mainData[0]?.title}</h3>
          <div className="flex gap-5">
            <div className="uppercase p-1 text-blue-500 border border-blue-500 ">
              Bảng báo giá
            </div>
            <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
              <AiOutlineClockCircle />
              <p className="">{Date}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <AiOutlineUser />
              <p className=""> Grab Cần Thơ+</p>
            </div>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Điểm xuất phát và đích đến
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Giá xe 4 chỗ
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Giá xe 7 chỗ
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {priceData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.route}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.car4Seats}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.car7Seats}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Các bài báo giá
          </h2>
          <NewPosts Data={Data} />
        </div>
      </div>
    </div>
  );
};

export default ListPricePage;
