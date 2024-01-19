"use client";
import React, { useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import Map from "./Map";
import { Modal, notification } from "antd";

const SendBooking = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [Trip, setTrip] = useState({
    from: "",
    to: "",
    service: "",
    type: "",
  });

  const HandleBooking = () => {
    if (
      Trip.from === "" ||
      Trip.to === "" ||
      Trip.service === "" ||
      Trip.type === ""
    ) {
      notification.error({
        message: "Lỗi",
        description: "Vui lòng nhập đầy đủ thông tin",
      });
    } else {
      setIsOpenModal(true);
    }
  };
  return (
    <div className="grid p:grid-cols-1 d:grid-cols-5 gap-5">
      <div className="col-span-2">
        <div className="border border-green-600 bg-gray-100">
          <div className="p-3">
            <h2 className="text-center uppercase text-[20px] text-green-600 font-normal">
              Thông tin chuyến
            </h2>
            <div className="">
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <label className="font-normal ">Xác định điểm đón</label>
                  <div className="border rounded-lg mt-3 bg-white">
                    <div className="p-2 flex items-center">
                      <div className="text-[20px] px-2 py-1 cursor-pointer text-red-500">
                        <IoLocationSharp />
                      </div>
                      <input
                        onChange={(e) =>
                          setTrip({ ...Trip, from: e.target.value })
                        }
                        value={Trip.from}
                        type="text"
                        placeholder="Điểm đón"
                        className="outline-none w-full bg-white"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="font-normal ">Nhập điểm trả</label>
                  <div className="border rounded-lg mt-3 bg-white">
                    <div className="p-2 flex items-center">
                      <div className="text-[20px] px-2 py-1 text-blue-500">
                        <IoLocationSharp />
                      </div>
                      <input
                        onChange={(e) =>
                          setTrip({ ...Trip, to: e.target.value })
                        }
                        value={Trip.to}
                        type="text"
                        placeholder="Điểm đón"
                        className="outline-none w-full bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="font-normal ">Dịch vụ</label>
                    <div className="border rounded-lg mt-3 bg-white">
                      <div className="p-2 flex items-center">
                        <div className="text-[20px] px-2 py-1 text-green-700">
                          <TbTargetArrow />
                        </div>
                        <select
                          className="outline-none w-full bg-white"
                          onChange={(e) =>
                            setTrip({ ...Trip, service: e.target.value })
                          }
                        >
                          <option value="1">1 Chiều</option>
                          <option value="2">2 Chiều xe ở lại phục vụ</option>
                          <option value="3">2 Chiều đưa đi đón về</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="font-normal ">Loại xe</label>
                    <div className="border rounded-lg mt-3 bg-white">
                      <div className="p-2 flex items-center">
                        <div className="text-[20px] px-2 py-1 text-red-500">
                          <FaCarSide />
                        </div>
                        <select
                          className="outline-none w-full bg-white"
                          onChange={(e) =>
                            setTrip({ ...Trip, type: e.target.value })
                          }
                        >
                          <option value="1">Xe 4 Chỗ</option>
                          <option value="2">Xe 7 Chỗ</option>
                          <option value="3">Xe 16 Chỗ</option>
                          <option value="4">Xe Honda</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-adminOrange text-center py-3 uppercase text-[22px] font-normal text-white rounded-md mt-3 hover:bg-orange-500 duration-300 cursor-pointer"
                  onClick={() => HandleBooking()}
                >
                  Đặt xe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <Map />
      </div>
      <>
        <Modal
          open={isOpenModal}
          onCancel={() => setIsOpenModal(false)}
          footer={null}
          width={500}
          closable={false}
        >
          <div className="border border-dashed border-green-500 font-LexendDeca">
            <div className="p-2">
              <h2 className="text-center uppercase text-[20px] text-green-600 font-bold">
                Thông tin chuyến
              </h2>
              <div className="flex flex-col gap-2 p-2">
                <p>
                  Điểm xuất phát: <strong>{Trip.from}</strong>
                </p>
                <p>
                  Điểm đến: <strong>{Trip.to}</strong>
                </p>
                <p>
                  Dịch vụ: <strong>{Trip.service}</strong>
                </p>
                <p>
                  Loại xe: <strong>{Trip.type}</strong>
                </p>
                <div className="flex justify-center">
                  <div className=" py-2 px-4 bg-mainColor hover:bg-mainColorHover duration-300 cursor-pointer text-white">
                    Liên hệ ngay
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default SendBooking;
