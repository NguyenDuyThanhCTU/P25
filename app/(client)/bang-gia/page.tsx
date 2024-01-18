import Contact from "@components/client/Contact/Contact";
import NewPosts from "@components/client/Posts/NewPosts";
import Posts from "@components/client/Posts/Posts";
import { convertDate } from "@components/items/server-items/Handle";
import { find } from "@lib/api";
import { Metadata } from "next";
import React from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Trang Chủ - Nha khoa thẩm mỹ Trần Húy",
  description: "Trần Húy - Nha khoa thẩm mỹ uy tín tại Cần Thơ",
};

const ListPricePage = async () => {
  const PostCategory = await find("Posts");
  const Data = PostCategory.filter((item: any) => item.level0 === "bang-gia");
  const mainData = Data.filter(
    (item: any) => item.title === "Bảng giá chính thức"
  );
  const Date = convertDate(mainData[0]?.createdAt);
  const markup = { __html: mainData[0]?.content };
  return (
    <div className="w-[1200px] mx-auto grid grid-cols-7 py-10 gap-5 min-h-screen">
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
        {markup && (
          <div
            className="font-LexendDeca font-extralight mt-5 text-center"
            dangerouslySetInnerHTML={markup}
          ></div>
        )}
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
