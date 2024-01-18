import React, { useState, useEffect } from "react";

const Map = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Lấy vị trí hiện tại sử dụng Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position: any) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting geolocation:", error.message);
      }
    );
  }, []); // Chạy chỉ một lần sau khi component được render

  if (latitude === null || longitude === null) {
    return <p>Đang tìm vị trí...</p>;
  }

  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${latitude},${longitude}&zoom=15`;

  return (
    <div>
      <div>
        vị trí hiện tại của bạn là: {latitude}, {longitude}
      </div>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
      <div className="flex">
        <div className=" py-2 px-4 bg-mainColor hover:bg-mainColorHover duration-300 cursor-pointer text-white">
          Liên hệ ngay
        </div>
      </div>
    </div>
  );
};

export default Map;
