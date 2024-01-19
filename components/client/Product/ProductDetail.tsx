"use client";
import { Image, Modal, Tabs } from "antd";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useData } from "@context/DataProviders";
import { usePathname, useRouter } from "next/navigation";
import { useStateProvider } from "@context/StateProvider";
import { FacebookProvider, Comments } from "react-facebook";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

const ProductDetail = ({ Data, SimilarProduct }: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const router = useRouter();

  const items = [
    {
      key: "1",
      label: "Chi tiết sản phẩm",
      children: (
        <>
          <h3 className="text-[24px] font-semibold ">Thông tin sản phẩm</h3>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: Data?.content }}
          ></div>
        </>
      ),
    },
    {
      key: "2",
      label: "Bình luận",
      children: (
        <>
          <div className="w-[778px]">
            <FacebookProvider appId="781034490143336">
              {" "}
              <Comments
                href="https://khogachcaocaptinphat.com"
                width={778}
              />{" "}
            </FacebookProvider>
          </div>
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-5 my-10 d:w-[1300px] d:mx-auto p:w-auto p:mx-2 pb-14">
      <div>
        <div className="grid p:grid-cols-1 d:grid-cols-2 d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2 pb-14">
          <div className=" rounded-lg d:h-max p:h-auto overflow-hidden">
            <div className="w-full flex justify-center">
              <Image.PreviewGroup>
                <Image
                  className="p-2 h-full  object-contain hover:scale-110 duration-500"
                  src={Data?.image}
                />
              </Image.PreviewGroup>
            </div>
            {Data?.subimage?.length > 0 && (
              <>
                {" "}
                <div className="w-full bg-gray-100 mt-3">
                  <div className="p-2 flex ">
                    <Image.PreviewGroup>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        {Data?.subimage?.map((item: any, idx: number) => (
                          <SwiperSlide>
                            {" "}
                            {/* <div className="mx-4 w-[150px] h-[150px] overflow-hidden flex items-center"> */}
                            <Image
                              className="p-2 h-full w-full object-contain"
                              src={item.url}
                            />
                            {/* </div> */}
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </Image.PreviewGroup>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=" flex flex-col gap-5">
            <div>
              <h3 className="text-[26px] uppercase">{Data?.title}</h3>
              <div className="bg-black w-24 h-1"></div>
            </div>
            {Data?.price && (
              <>
                <div className="font-normal text-[18px] text-red-500">
                  Giá: {Data?.price} <sup>VNĐ</sup>
                </div>
              </>
            )}
            <div className="font-extralight">
              Giá 1 Chiều. Xe riêng, giá trọn gói, giá có thể thay đổi theo điểm
              đón
            </div>
            <div>
              <div>Loại xe:</div>
              <div className="flex gap-5 cursor-pointer mt-2">
                <div className="border hover:border-mainColor duration-300">
                  <div className="p-2">4 chỗ</div>
                </div>
                <div className="border  hover:border-mainColor duration-300">
                  <div className="p-2">7 chỗ</div>
                </div>
              </div>
            </div>
            <>
              <div
                className="bg-mainColor hover:bg-mainColorHover duration-300 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex flex-col items-center  p-2 text-white font-normal">
                  <p className="uppercase text-[22px] ">Đặt Xe ngay</p>
                  <p className="text-center">
                    Chúng tôi sẽ gọi lại sau khi nhận được thông tin
                  </p>
                </div>
              </div>
            </>

            <div className="py-4 border-t border-b w-full font-light">
              <h3>Mô tả</h3>
              <div dangerouslySetInnerHTML={{ __html: Data?.describe }}></div>
            </div>
            <div className="flex gap-3 items-center font-light">
              <span className="">Lượt xem {Data?.access}</span>
            </div>
          </div>
        </div>

        <div className="grid p:grid-cols-1 d:grid-cols-4 gap-5">
          <div className="d:px-16 py-5 p:px-2 border col-span-3">
            <Tabs
              defaultActiveKey="1"
              items={items}
              className="bg-white px-10 rounded-md font-LexendDeca py-5"
            />
          </div>

          <div className="col-span-1">
            <h3 className="text-mainred py-2 border-b-2 border-mainred uppercase font-bold">
              Sản phẩm liên quan
            </h3>
            <div>
              {SimilarProduct?.slice(0, 8).map((item: any, idx: number) => (
                <Link href={`/chi-tiet-san-pham/${item.url}`}>
                  <div
                    className="flex gap-3 py-3 border-b hover:bg-gray-100 duration-300"
                    key={idx}
                  >
                    <div className="flex-[30%]">
                      <img src={item.image} alt="similarProduct" />
                    </div>
                    <div className="flex-[60%]">
                      <h3 className="truncate1 text-black">{item.title}</h3>

                      <div className="flex">
                        <div className="py-1 bg-mainred text-maingreen flex gap-2 items-center text-[15px]">
                          <FiPhoneCall />
                          <span>Chi tiết</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div
      className={`fixed bottom-36 right-[-300px] ${
        OpenCart ? " z-50" : "z-0"
      }`}
    >
      <ShopCart />
    </div> */}
      <Modal
        title="Liên hệ đặt xe"
        closable={false}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div className="font-LexendDeca">
          <h2 className="text-[25px] font-bold text-mainColor text-center">
            LIÊN HỆ HOTTLINE:
          </h2>
          <div
            className="text-[25px] underline text-center text-mainColorHover cursor-pointer"
            onClick={() => router.push("tel:0939656507")}
          >
            093 9656507
          </div>
          <p>
            <strong>Trụ sở văn phòng: </strong>130A Trần Văn Nghiêm , Phường An
            Thới, Quận Bình Thuỷ , TP. Cần Thơ
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetail;
