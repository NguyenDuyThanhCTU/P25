"use client";
import CRUDButton from "@components/items/server-items/CRUDButton";
import { convertDate } from "@components/items/server-items/Handle";
import Search from "@components/items/server-items/Search";
import { Modal } from "antd";
import Image from "next/image";
import React from "react";
import { PiCardsLight } from "react-icons/pi";
import { useStateProvider } from "@context/StateProvider";
import FormSlide from "./FormSlide";
import { WebsiteUrl } from "@assets/item";
import slugify from "slugify";
import { useRouter } from "next/navigation";

interface SlideProps {
  image: string;
  url: string;
  type: string;
  createdAt: any;
  title: string;
}

const Slide = ({ Data }: any) => {
  const router = useRouter();
  const [isOpenAddTypeModal, setIsOpenAddTypeModal] = React.useState(false);
  const { setFormData } = useStateProvider();
  return (
    <div className="w-full  px-10 font-light gap-10 min-h-screen  bg-white py-10">
      <div className="flex items-center gap-5">
        <div>
          <h3 className="text-[30px] font-bold">Danh sách slide giới thiệu</h3>
        </div>
        <div>
          <CRUDButton
            Clicked={setIsOpenAddTypeModal}
            Label="Thêm"
            value="Slide"
            Style="hover:bg-pink-900 bg-pink-700"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-10 gap-5 min-h-screen">
        <div className="bg-gray-50 border rounded-lg col-span-3 ">
          <div className="p-3">
            <div className="flex justify-between ">
              <div></div>
              <div className="flex items-center gap-4 text-[14px] mr-20">
                <div className="flex items-center gap-1">
                  <PiCardsLight />
                  <p>{Data?.length} đối tác</p>
                </div>
              </div>
            </div>
            <div className="font-LexendDeca font-light">
              {" "}
              <div className="mt-5 text-black">
                <div className="grid grid-cols-7 border-b-2 border-black py-3">
                  {[
                    "STT",
                    "Đối tượng liên kết",
                    "Hình ảnh",
                    "Liên kết",
                    "Thời gian",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`${
                        item === "Đối tượng liên kết" || item === "Liên kết"
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
                  {Data?.map((item: SlideProps, idx: number) => {
                    const value = convertDate(item.createdAt);
                    const type = slugify(item.type, {
                      lower: true,
                      locale: "vi",
                    });
                    return (
                      <div
                        className="grid grid-cols-7   text-center border-b py-3 cursor-pointer hover:bg-slate-200 items-center "
                        key={idx}
                        //   onClick={() => HandleSelectProduct(item.id)}
                      >
                        <div className="">{idx + 1}</div>
                        <div className="col-span-2 text-start">{item.type}</div>

                        <div className="flex justify-center items-center">
                          <Image
                            src={item.image}
                            width={100}
                            height={100}
                            alt="product webp"
                          />
                        </div>
                        <div
                          className="col-span-2 text-start truncate text-blue-600 hover:underline"
                          onClick={() =>
                            router.push(`${WebsiteUrl}/${ype}/${item.url}`)
                          }
                        >{`${WebsiteUrl}/${type}/${item.url}`}</div>

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
          title="Thêm slide"
          open={isOpenAddTypeModal}
          width={1200}
          onCancel={() => setIsOpenAddTypeModal(false)}
          destroyOnClose={true}
          afterClose={() => setFormData({})}
        >
          <FormSlide />
        </Modal>
      </>
      <>
        {/* <Modal
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
    </Modal> */}
      </>
    </div>
  );
};

export default Slide;
