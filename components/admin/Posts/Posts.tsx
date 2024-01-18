"use client";
import { PostsTypeItems, ProductTypeItems } from "@assets/item";
import EditButton from "@components/items/server-items/EditButton";
import ReportCard from "@components/items/server-items/ReportCard";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import CRUDButton from "@components/items/server-items/CRUDButton";
import { convertDate } from "@components/items/server-items/Handle";
import { useStateProvider } from "@context/StateProvider";
import { PiCardsLight } from "react-icons/pi";
import { FaSort } from "react-icons/fa";
import Search from "@components/items/server-items/Search";
import CategoryCreate from "./Category/Create";
import CategoryUpdate from "./Category/Update";
import Create from "./Posts/Create";
import Image from "next/image";

interface ProductCategoryProps {
  Data: Array<any>;
  Category: Array<any>;
}

interface PostProps {
  id: string;
  title: string;
  url: string;
  description: string;

  image: string;
  pid: string;
  content: "";
  level0: string;
  level1: string;
  createdAt: any;
}
const Posts = ({ Data, Category }: ProductCategoryProps) => {
  const [isOpenAddTypeModal, setIsOpenAddTypeModal] = useState(false);
  const [DataFilter, setDataFilter] = useState<any>([]);
  const [PostData, setPostData] = useState<any>([]);
  const [PolicyData, setPolicyData] = useState<any>([]);
  const [isOpenCategoryModel, setIsOpenCategoryModel] = useState(false);
  const { setFormData } = useStateProvider();
  const [SelectedProductData, setSelectedProductData] = useState<PostProps>({
    id: "",
    title: "",
    url: "",
    description: "",
    image: "",
    pid: "",
    content: "",
    level0: "",
    level1: "",
    createdAt: "",
  });
  useEffect(() => {
    const sort = Data.filter((item) => item.level0 !== "Introductory");
    if (sort) {
      const Posts = sort.filter((item) => item.level0 !== "chinh-sach");
      const Policy = sort.filter((item) => item.level0 === "chinh-sach");
      setPostData(Posts);
      setPolicyData(Policy);
    }
  }, [Data]);
  //choose post in list post
  const HandleSelectProduct = (id: string) => {
    const sort = PostData?.filter((item: any) => item.id === id);

    setSelectedProductData(sort[0]);
    setIsOpenCategoryModel(true);
  };
  //choose post in list policy
  const HandleSelectPolicy = (id: string) => {
    const sort = PolicyData?.filter((item: any) => item.id === id);

    setSelectedProductData(sort[0]);
    setIsOpenCategoryModel(true);
  };

  //sort bar
  const HandleFilter = (criteria: string) => {
    let sortedData = PostData.filter((item: any) => item.level0 === criteria);
    setDataFilter(sortedData);
  };

  return (
    <div className="w-full  px-10 font-light gap-10 min-h-screen  bg-white py-10">
      <div className="flex items-center gap-5">
        <div>
          <h3 className="text-[30px] font-bold">Danh sách bài viết</h3>
          {DataFilter.length > 0 && (
            <p className="font-light">
              Danh mục bài viết loại: <strong> {DataFilter[0]?.title} </strong>
            </p>
          )}
        </div>
        <div>
          <CRUDButton
            Clicked={setIsOpenAddTypeModal}
            Label="Thêm"
            value="loại bài viết"
            Style="hover:bg-orange-900 bg-orange-700"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 mt-10 gap-5 min-h-screen">
        <div className="bg-gray-50 border rounded-lg col-span-3 ">
          <div className="p-3">
            <div className="flex justify-between ">
              <div></div>
              <div className="flex items-center gap-4 text-[14px] mr-20">
                <Search Data={PostData} Select={HandleSelectProduct} />
                <div className="flex items-center gap-1">
                  <PiCardsLight />
                  <p>{PostData?.length} đối tác</p>
                </div>
                <div className="flex items-center gap-1 text-blue-500">
                  <FaSort />
                  <select
                    className="outline-none pr-10 border-b py-1  bg-gray-100  border-blue-500   "
                    onChange={(e: any) => HandleFilter(e.target.value)}
                  >
                    {PostsTypeItems.map((item, idx) => (
                      <option
                        key={idx}
                        className=" font-extralight "
                        value={item.label}
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="font-LexendDeca font-light">
              {" "}
              <div className="mt-5 text-black">
                <div className="grid grid-cols-7 border-b-2 border-black py-3">
                  {["STT", "Tiêu đề", "Hình ảnh", "Mục", "Thời gian"].map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className={`${
                          item === "Tiêu đề" || item === "Mục"
                            ? "col-span-2 justify-start"
                            : "justify-center col-span-1"
                        }
          flex  w-full
          `}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
                <div>
                  {(DataFilter.length > 0 ? DataFilter : PostData)?.map(
                    (item: PostProps, idx: number) => {
                      const value = convertDate(item.createdAt);

                      return (
                        <div
                          className="grid grid-cols-7   text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center "
                          key={idx}
                          onClick={() => HandleSelectProduct(item.id)}
                        >
                          <div className="">{idx + 1}</div>
                          <div className="col-span-2 text-start">
                            {item.title}
                          </div>
                          <div className="flex justify-center items-center">
                            <Image
                              src={item.image}
                              width={100}
                              height={100}
                              alt="product webp"
                            />
                          </div>
                          <div className="flex flex-col items-start text-[14px] col-span-2">
                            <p>
                              {" "}
                              {item.level0} <sup>(Cấp 1)</sup>
                            </p>
                            <p className="border-l border-black ml-3 w-max pl-3">
                              {" "}
                              {item.level1} <sup>(Cấp 2 )</sup>
                            </p>
                          </div>
                          <div>{value}</div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <h2 className="text-[22px] text-cyan-700 font-normal p\">
            Bài viết về chính sách
          </h2>
          <div className=" p-3">
            {" "}
            <div className="font-LexendDeca font-light">
              {" "}
              <div className="mt-5 text-black">
                <div className="grid grid-cols-4 border-b-2 border-black py-3">
                  {["STT", "Tiêu đề", "Thời gian"].map((item, idx) => (
                    <div
                      key={idx}
                      className={`${
                        item === "Tiêu đề"
                          ? "col-span-2 justify-start"
                          : "justify-center col-span-1"
                      }
          flex  w-full
          `}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div>
                  {PolicyData?.map((item: PostProps, idx: number) => {
                    const value = convertDate(item.createdAt);

                    return (
                      <div
                        className="grid grid-cols-4   text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center "
                        key={idx}
                        onClick={() => HandleSelectPolicy(item.id)}
                      >
                        <div className="">{idx + 1}</div>
                        <div className="col-span-2 text-start">
                          {item.title}
                        </div>

                        <div>{value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <Modal
          footer={null}
          title="Thêm bài viết"
          open={isOpenAddTypeModal}
          width={1200}
          onCancel={() => setIsOpenAddTypeModal(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <Create
            setIsOpen={setIsOpenAddTypeModal}
            Data={Category}
            pid={Data.length}
          />
        </Modal>
      </>
      <>
        <Modal
          footer={null}
          title={`Bạn muốn thay đổi bài viết ${SelectedProductData?.title} ?`}
          open={isOpenCategoryModel}
          width={1000}
          onCancel={() => setIsOpenCategoryModel(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <CategoryUpdate
            Category={Category}
            pid={Data.length}
            Data={SelectedProductData}
            setIsOpen={setIsOpenCategoryModel}
          />
        </Modal>
      </>
    </div>
  );
};

export default Posts;
