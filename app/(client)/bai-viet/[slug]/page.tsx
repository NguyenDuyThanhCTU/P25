import SamePosts from "@components/client/Posts/SamePost";
import { convertDate } from "@components/items/server-items/Handle";
import { find } from "@lib/api";
import { Metadata } from "next";

import React from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

export const metadata: Metadata = {
  title: "Tin tức | Camera Vstarcam ",
  description: "Camera Vstarcam - An Lành Cho Gia Đình Việt",
};

const NewsDetailPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchValue = searchParams.poid;
  const DataCategory = await find("Posts");
  const Data = DataCategory?.filter((item: any) => item.id === searchValue);
  console.log(Data);
  const markup = { __html: Data[0]?.content };

  const Date = convertDate(Data[0]?.createdAt);
  return (
    <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
      <div className="border h-max border-gray-400 col-span-2 d:block p:hidden">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết liên quan
          </h2>
          <SamePosts Data={DataCategory} />
        </div>
      </div>
      <div className="p:col-auto d:col-span-5">
        <div className=" pb-5 border-b flex flex-col gap-4">
          <h3 className=" text-[34px] font-normal">{Data[0]?.title}</h3>
          <div className="flex gap-5">
            <div className="flex items-center gap-1 text-gray-500 pr-5 border-r">
              <AiOutlineClockCircle />
              <p className="">{Date}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <AiOutlineUser />
              <p className=""> Grab Cần Thơ</p>
            </div>
          </div>
        </div>
        {markup && (
          <div
            className="font-LexendDeca font-extralight mt-5 flex-col flex gap-3"
            dangerouslySetInnerHTML={markup ? markup : { __html: "" }}
          ></div>
        )}
      </div>
      <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết liên quan
          </h2>
          <SamePosts Data={DataCategory} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
