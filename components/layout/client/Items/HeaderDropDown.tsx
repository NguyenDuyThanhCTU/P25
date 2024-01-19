import Link from "next/link";
import React from "react";
import slugify from "slugify";

const HeaderDropDown = ({ ServiceItem }: any) => {
  return (
    <>
      <div className="flex flex-col top-6 absolute ">
        <div className="bg-none w-full h-6"></div>
        <div className=" top-9 hidden group-hover/main:block duration-300     ">
          <div className=" flex flex-col bg-white  shadow-md border-t-2 border-gray-500 ">
            {ServiceItem.map((items: any, idx: number) => {
              const parentSlug = slugify(
                items.title ? items.title : items.level0,
                {
                  lower: true,
                  locale: "vi",
                }
              );
              const slug = slugify(items?.level1, {
                lower: true,
                locale: "vi",
              });

              return (
                <Link
                  key={idx}
                  href={`/${
                    parentSlug === "ve-nha-khoa" ? "gioi-thieu" : parentSlug
                  }/${slug}`}
                  className="  border-b hover:bg-mainColor duration-300"
                >
                  <p className="py-2 px-4 w-max hover:text-maingreen duration-300 text-black">
                    {items.level1}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDropDown;
