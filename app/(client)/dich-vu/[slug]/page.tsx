import Contact from "@components/client/Contact/Contact";
import NewPosts from "@components/client/Posts/NewPosts";
import Posts from "@components/client/Posts/Posts";
import { find } from "@lib/api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Grab An Phát Cần Thơ",
  description: "An Phát - Hợp Tác Xã Dịch Vụ Vận Tải Cần Thơ ",
};

const ServiceSlugLayout = async ({ params }: { params: { slug: string } }) => {
  const PostCategory = await find("Posts");

  const Data = PostCategory.filter((item: any) => item.level1 === params.slug);
  return (
    <div className="d:w-[1200px] p:mx-auto] mx-auto grid p:grid-cols-1  d:grid-cols-7 py-10 gap-5 min-h-screen">
      <div className="border h-max border-gray-400 d:block p:hidden col-span-2">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <NewPosts Data={PostCategory} />
        </div>
      </div>
      <Posts Data={Data} />
      <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết mới nhất
          </h2>
          <NewPosts Data={PostCategory} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSlugLayout;
