"use client";
import { HeaderItems } from "@assets/item";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import HeaderDropDown from "./Items/HeaderDropDown";

const Header = ({ PostCategory, ProductCategory }: any) => {
  console.log(PostCategory, ProductCategory);
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  return (
    <>
      <div>
        <div className="">
          <div className="w-[1200px] mx-auto h-[115px] flex justify-between items-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/Logo.jpg?alt=media&token=3aa10bd0-849a-4d68-940d-6fc4852a87d5"
              alt="Logo"
              width={200}
              height={100}
            />
            <div className="flex items-center justify-start gap-10">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/header.png?alt=media&token=c766d4ea-8e1a-47eb-be87-6d23d1b2bceb"
                alt="Header Slogan"
                width={500}
                height={100}
              />
              <div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/hotline.png?alt=media&token=946b9a74-2f1a-4464-8884-964b8049f69b"
                    alt="Hotline"
                  />
                  <div className="font-normal">
                    <p>Hotline / Zalo</p>
                    <p> 038.6019.486</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="py-2 px-6 bg-red-500 rounded-full text-center text-white font-normal uppercase cursor-pointer hover:bg-red-600 duration-300">
                  Đặt xe ngay
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#283037]">
            <div className="w-[1200px] mx-auto  text-white uppercase text-[13px] font-normal flex justify-between ">
              <div className="flex items-center ">
                {HeaderItems.map((item, index) => {
                  const PostDropdown = PostCategory?.filter(
                    (items: any) => items.title === item.label
                  );
                  const ProductDropdown = ProductCategory?.filter(
                    (items: any) => items.title === item.label
                  );
                  return (
                    <div key={index} className="relative group/main">
                      <Link
                        href={`/${item.value}`}
                        className="py-2 px-3 flex items-center hover:bg-mainColor cursor-pointer w-max "
                        key={index}
                      >
                        <p className="w-max">{item.label}</p>
                        {(PostDropdown?.length > 0 ||
                          ProductDropdown?.length > 0) && (
                          <FaCaretDown className="text-[20px]  " />
                        )}
                      </Link>
                      {PostDropdown?.length > 0 && (
                        <HeaderDropDown ServiceItem={PostDropdown} />
                      )}
                    </div>
                  );
                })}
              </div>
              <div>
                <div>
                  <div className=" relative py-3">
                    <div className="border rounded-full bg-none border-mainGreen flex items-center ">
                      <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                        <input
                          type="text"
                          className="outline-none mr-2 col-span-6 text-mainGreen bg-[#283037]"
                          placeholder="Tìm kiếm"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <div>
                          <div
                            className={`${
                              search ? "block" : "hidden"
                            }  bg-gray-500 text-gray-300 w-max p-1 rounded-full text-[10px] cursor-pointer`}
                            onClick={() => setSearch("")}
                          >
                            <RxCross2 />
                          </div>
                        </div>
                      </div>
                      <div className="bg-mainColor py-3 px-6 text-white rounded-r-full cursor-pointer">
                        <FaSearch />
                      </div>
                    </div>
                    {search && (
                      <div className="absolute w-full bg-gray-50 top-full flex flex-col shadow-inner z-50 mt-2">
                        <div className=" flex flex-col">
                          {searchRs.map((product: any, idx: number) => (
                            <Link
                              href={`$chi-tiet-san-pham/${product.url}`}
                              key={idx}
                              className="cursor-pointer p-2 hover:bg-gray-100"
                            >
                              {product.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
