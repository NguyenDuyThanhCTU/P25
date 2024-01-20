"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slide = () => {
  const ImageItem = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/15111.png?alt=media&token=767001b0-ffd4-4d87-a687-2040b5763ea9",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/z5064414017613_0e71fc37355095c7cae84133c09fe40e.jpg?alt=media&token=abd73d45-aadf-4ad1-b213-b9076e1ca4b2",
    },
  ];
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <div className="">
          {ImageItem.map((item: any, idx: number) => (
            <div key={idx}>
              {" "}
              <SwiperSlide>
                <div className="p:h-auto d:h-[70vh] w-full flex justify-center">
                  <img
                    src={item.image}
                    alt="slide"
                    className="h-full object-cover w-full"
                  />
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slide;
