"use client";
import { ProductTypeItems, WebsiteUrl } from "@assets/item";
import { uploadImage } from "@components/items/server-items/Handle";
import InputForm from "@components/items/server-items/InputForm";
import { useData } from "@context/DataProviders";
import { useStateProvider } from "@context/StateProvider";
import { insertAndCustomizeId } from "@lib/api";
import { Tabs, Upload } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdUpload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import slugify from "slugify";

const CreateProduct = ({ Category, pid, setIsOpen }: any) => {
  const { FormData, setFormData } = useStateProvider();
  const [Keyword, setKeyword] = useState<any>([]);
  const [ListSubImage, setListSubImage] = useState<any>([]);
  const [DataFilter, setDataFilter] = useState<any>([]);

  // const customRequest = async (options: any) => {
  //   options.onSuccess({});

  //   try {
  //     const url = await uploadImage(options.file, "avatar");
  //     const newUrl = {
  //       uid: options.file.uid,
  //       url: url,
  //     };
  //     setListSubImage((prev: any) => [...prev, newUrl]);
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };
  useEffect(() => {
    const randomText = Math.floor(Math.random() * 100000000000);
    const headUrl = slugify(`${FormData?.title}-p${randomText}.html`, {
      lower: true,
      locale: "vi",
    });
    setFormData({
      ...FormData,
      url: `${headUrl}?poid=${100000000000 + pid}`,
    });
  }, [FormData?.title]);
  const HandleChangeKeyword = (item: number) => {
    let newKeyword = FormData?.keyword?.filter((i: any) => i !== item);
    setFormData({ ...FormData, keyword: newKeyword });
  };

  useEffect(() => {
    let sortedData = Category?.filter(
      (item: any) => item.level0 === FormData?.level0
    );

    let formattedArray = sortedData?.map((item: any) => ({
      label: item.level1,
      value: slugify(item?.level1 ? item?.level1 : "", {
        lower: true,
        locale: "vi",
      }),
    }));
    setDataFilter(formattedArray);
  }, [FormData?.level0]);

  const router = useRouter();

  const HandleSubmit = async () => {
    const level0 = slugify(`${FormData?.level0}`, {
      lower: true,
      locale: "vi",
    });
    let Data = { ...FormData, level0: level0 };
    await insertAndCustomizeId("Products", Data, `${100000000001 + pid}`).then(
      () => {
        setIsOpen(false);
        router.refresh();
      }
    );

    router.refresh();
  };

  return (
    <div className="relative">
      <Tabs
        tabPosition="top"
        items={[
          {
            key: "1",
            label: "Thông tin chi tiết",
            children: (
              <>
                <form className="flex flex-col gap-2">
                  <InputForm
                    Label="Tên sản phẩm"
                    Type="Input"
                    field="title"
                    Tips="Nhập tên sản phẩm, tối đa 100 ký tự"
                  />
                  <InputForm
                    Label="Giá sản phẩm"
                    Type="Input"
                    field="price"
                    Tips="Nhập giá sản phẩm (VD: 1.000.000, 10.000.000, ...) .Tối đa 100 ký tự"
                  />
                  {/* <InputForm
                    Label="Mã sản phẩm"
                    Type="Input"
                    field="pID"
                    Tips="
          Mã của sản phẩm là các con số hoặc một đoạn mã để xác định tính duy nhất của sản phẩm. Tối đa 20 ký tự
      "
                  /> */}

                  <div className="border border-gray-600">
                    <div className="p-3 flex flex-col gap-2">
                      <InputForm
                        Label="Loại bài viết"
                        Type="Select"
                        field="level0"
                        Option={ProductTypeItems}
                      />
                      <>
                        {" "}
                        <InputForm
                          Label="Mục bài viết"
                          Type="Select"
                          field="level1"
                          Option={DataFilter}
                        />
                      </>
                    </div>
                  </div>
                  <div className="flex gap-5 flex-col mt-5">
                    <InputForm
                      Label="Mô tả sản phẩm"
                      Type="Editor"
                      field="describe"
                    />
                    <InputForm
                      Label="Chi tiết sản phẩm"
                      Type="Editor"
                      field="detail"
                    />
                  </div>
                  <InputForm Label="Ảnh đại diện" Type="Upload" field="image" />
                </form>
              </>
            ),
          },
          {
            key: "2",
            label: "Cấu hình SEO",
            children: (
              <form className="font-LexendDeca">
                <Link
                  href={`https://www.google.com/search?q=${WebsiteUrl}/chi-tiet-bai-viet/${FormData?.url}`}
                >
                  <div className="border rounded-md border-black hover:shadow-2xl duration-300 mt-3 cursor-pointer">
                    <div className=" flex flex-col px-5 py-3 text-[18px] font-normal">
                      <h2 className="text-[#1a0dab]  text-[30px] font-semibold">
                        {FormData?.title === undefined ? (
                          <>N/A</>
                        ) : (
                          FormData?.title
                        )}
                      </h2>
                      <p className="text-[#006621]">
                        {WebsiteUrl}/{FormData?.url}
                      </p>
                      <p className="">
                        {FormData?.description === undefined
                          ? "N/A"
                          : FormData?.description}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="flex  flex-col gap-2 mt-5">
                  <InputForm
                    PlaceHolder={FormData?.title}
                    Label="Thẻ tiêu đề trang"
                    Type="Input"
                    field="title"
                  />
                  <InputForm Label="Đường dẫn" Type="Input" field="url" />

                  <InputForm
                    Label="Thẻ mô tả"
                    Type="Input"
                    field="description"
                  />
                  <div className="border rounded-xl border-black">
                    <div className="p-2 flex flex-col">
                      <div className="grid grid-cols-7 mt-2 items-center">
                        <div>Từ khóa SEO:</div>
                        <div className="col-span-6">
                          <div className=" pl-2 py-2 flex flex-wrap gap-2">
                            {FormData?.keyword?.length > 0 && (
                              <>
                                {FormData?.keyword?.map(
                                  (item: any, idx: number) => (
                                    <div
                                      key={idx}
                                      className="border bg-slate-200 rounded-full relative"
                                    >
                                      <div className="w-max py-1 px-3">
                                        {item}
                                      </div>
                                      <div
                                        className="bg-white p-1 absolute rounded-full w-max -top-2 -right-2 cursor-pointer"
                                        onClick={() =>
                                          HandleChangeKeyword(item)
                                        }
                                      >
                                        <RxCross2 />
                                      </div>
                                    </div>
                                  )
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 ">
                        <div className="grid grid-cols-8  items-center  w-full justify-between  ">
                          <div className="col-span-2 flex items-center gap-2 ">
                            <p>Thêm từ khóa</p>
                          </div>
                          <div className="px-4 py-1 border flex justify-between items-center   bg-white rounded-lg w-full col-span-6">
                            <input
                              type="text"
                              className=" outline-none w-full"
                              value={Keyword}
                              onChange={(e) => setKeyword(e.target.value)}
                            />
                            <div
                              className="text-[20px]  cursor-pointer duration-300 hover:text-blue-500"
                              onClick={() => {
                                if (FormData?.keyword === undefined) {
                                  setFormData({
                                    ...FormData,
                                    keyword: [Keyword],
                                  });
                                } else {
                                  setFormData({
                                    ...FormData,
                                    keyword: [...FormData?.keyword, Keyword],
                                  });
                                }

                                setKeyword("");
                              }}
                            >
                              <MdUpload />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ),
          },
          // {
          //   key: "2",
          //   label: "Thông tin khác",
          //   children: (
          //     <form className="flex flex-col gap-2">
          //       <div className="border border-gray-600">
          //         <div className="p-3 flex flex-col gap-2">
          //           <InputForm
          //             Label="Tình trạng"
          //             Type="Radio"
          //             Option={["Còn Hàng", "Hết Hàng", "Đang Cập nhật"]}
          //             field="state"
          //           />
          //         </div>
          //       </div>
          //       <div className="border border-gray-600">
          //         <div className="p-3 flex flex-col gap-2">
          //           <InputForm
          //             Label="Tùy chọn"
          //             Type="Checkbox"
          //             Option={[
          //               "Sản phẩm mới",
          //               "Sản phẩm nổi bật",
          //               "Sản phẩm bán chạy",
          //               "Sản phẩm khuyến mãi",
          //             ]}
          //             field="topic"
          //           />
          //         </div>
          //       </div>

          //       <div className="flex flex-col w-full gap-2 ">
          //         <div className="col-span-2 flex items-center gap-2 ">
          //           <p> Ảnh liên quan: </p>
          //         </div>
          //         <div className="px-4 py-1   bg-white rounded-lg w-full col-span-6">
          //           <Upload
          //             customRequest={customRequest}
          //             listType="picture-card"
          //           >
          //             <div className="flex flex-col items-center">
          //               <AiOutlinePlus className="text-[24px]" />
          //               <div className="mt-2">Upload</div>
          //             </div>
          //           </Upload>
          //         </div>
          //       </div>
          //     </form>
          //   ),
          // },
          // {
          //   key: "3",
          //   label: "Cấu hình SEO",
          //   children: "Content of Tab Pane 3",
          // },
        ]}
      />
      <>
        <div className="flex w-full justify-end mt-5 pt-3 border-t border-black">
          <div
            className="bg-blue-500 hover:bg-blue-700 duration-300 cursor-pointer text-white p-2 rounded-md"
            onClick={() => HandleSubmit()}
          >
            Cập nhật
          </div>
        </div>
      </>
    </div>
  );
};

export default CreateProduct;
