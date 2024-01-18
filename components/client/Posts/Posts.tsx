import React from "react";
import NewPosts from "./NewPosts";
import Link from "next/link";
import Image from "next/image";
import { convertDate } from "@components/items/server-items/Handle";

const Posts = ({ Data, Title }: any) => {
  return (
    <div className="p:col-auto d:col-span-5">
      <div className="font-LexendDeca font-extralight ">
        <div className="flex flex-col gap-8 mt-5">
          {Data?.map((item: any, idx: number) => {
            const Date = convertDate(Data[0]?.createdAt);
            const markup = { __html: item?.content };
            return (
              <div
                key={idx}
                className="hover:bg-gray-100 duration-300 cursor-pointer"
              >
                <div className="grid grid-cols-3 gap-5 p-2">
                  <Link href={`/bai-viet/${item.url}`}>
                    <div className="w-full overflow-hidden">
                      <Image
                        width={300}
                        height={200}
                        src={item.image}
                        alt="news"
                        className="w-full h-[200px] hover:scale-110 duration-300 object-contain"
                      />
                    </div>
                  </Link>
                  <div className="col-span-2 mt-2">
                    <Link href={`/bai-viet/${item.url}`}>
                      <h2 className="font-normal hover:text-blue-400 duration-300">
                        {item.title}
                      </h2>
                      <p className="text[15px] text-gray-400">{Date}</p>
                    </Link>

                    <div
                      dangerouslySetInnerHTML={markup ? markup : { __html: "" }}
                      className="truncate2 text-[14px] mt-2"
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
