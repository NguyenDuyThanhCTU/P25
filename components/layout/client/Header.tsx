"use client";
import { HeaderItems } from "@assets/item";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import HeaderDropDown from "./Items/HeaderDropDown";
import { useRouter } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { Drawer, Modal } from "antd";

const Header = ({ PostCategory, ProductCategory, Data }: any) => {
  const [search, setSearch] = useState("");
  const [searchRs, setSearchRs] = useState([]);
  const [openSearchMB, setOpenSearchMB] = useState(false);
  const [open, setOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const HandleNavigate = (url: any) => {
    setOpen(false);
    router.push(url);
  };

  return (
    <>
      <div className="d:block p:hidden">
        <div className="">
          <div className="d:w-[1200px] p:mx-auto mx-auto h-[115px] flex justify-between items-center">
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
                    <p> {Data?.Hotline}</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div
                  className="py-2 px-6 bg-red-500 rounded-full text-center text-white font-normal uppercase cursor-pointer hover:bg-red-600 duration-300"
                  onClick={() =>
                    router.push(`https://zalo.me/${Data?.Hotline}`)
                  }
                >
                  Đặt xe ngay
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#283037]">
            <div className="d:w-[1200px] p:mx-auto mx-auto  text-white uppercase text-[13px] font-normal flex justify-between ">
              <div className="flex items-center ">
                {HeaderItems.map((item, index) => {
                  const PostDropdown = PostCategory?.filter(
                    (items: any) => items.title === item.label
                  );
                  const ProductDropdown = ProductCategory?.filter(
                    (items: any) => items.level0 === item.label
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
                      {ProductDropdown?.length > 0 && (
                        <HeaderDropDown ServiceItem={ProductDropdown} />
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
      <div className="d:hidden p:block bg-mainNormalBlue ">
        <div className="h-[84px] fixed z-50 w-full top-0 bg-white  text-black shadow-xl">
          <div className="px-4 w-full flex justify-between items-center">
            <Link href={`/`} className="h-[84px] w-[190px]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/Logo.jpg?alt=media&token=3aa10bd0-849a-4d68-940d-6fc4852a87d5"
                alt="Logo"
                className="w-full h-full p-2"
              />
            </Link>
            <div className="flex gap-2">
              <div
                className="text-[22px] p-2"
                onClick={() => setOpenSearchMB(!openSearchMB)}
              >
                <FaSearch />
              </div>
              <div className="text-[22px] p-2" onClick={() => setOpen(true)}>
                <IoIosMenu />
              </div>
            </div>
          </div>
          {openSearchMB && (
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainblue flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainblue"
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
                <div className="bg-mainblue py-3 px-6 text-white rounded-r-full cursor-pointer">
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
          )}
        </div>
        <>
          <Drawer
            placement="left"
            closable={false}
            width={300}
            onClose={() => setOpen(false)}
            open={open}
          >
            <div className=" ">
              <div onClick={() => HandleNavigate("/")} className="p-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/Logo.jpg?alt=media&token=3aa10bd0-849a-4d68-940d-6fc4852a87d5"
                  alt="logo"
                />
              </div>

              <div>
                <div className="flex flex-col mt-2 ">
                  {HeaderItems.map((item: any, idx: number) => (
                    <div
                      onClick={() => HandleNavigate(`/${item.value}`)}
                      className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                      key={idx}
                    >
                      {item.label}
                    </div>
                  ))}
                  <div
                    onClick={() => HandleNavigate(`/doi-tac-grab`)}
                    className="cursor-pointer border-b hover:text-red-500 duration-300 py-2"
                  >
                    Đăng ký làm đối tác grab
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </>
        <>
          <Modal
            closeIcon={false}
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={false}
          >
            <div className=" relative bg-white py-3">
              <div className="border rounded-full bg-white border-mainblue flex items-center ">
                <div className=" pl-4 w-full  justify-between items-center grid grid-cols-7">
                  <input
                    type="text"
                    className="outline-none mr-2 col-span-6 text-mainblue"
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
                <div className="bg-mainblue py-3 px-6 text-white rounded-r-full cursor-pointer">
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
          </Modal>
        </>
      </div>
    </>
  );
};

export default Header;
