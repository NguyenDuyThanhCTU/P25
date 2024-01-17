import Image from "next/image";
import React from "react";

const Booking = () => {
  return (
    <div className="fixed bottom-1/2 left-0  box-border flex flex-col gap-5 zoom-animation">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/grabcantho-1a220.appspot.com/o/datxe.png?alt=media&token=995d8a4d-d6a2-4947-8957-83a62d820125"
        alt="booking button"
        width={50}
        height={25}
      />
    </div>
  );
};

export default Booking;
