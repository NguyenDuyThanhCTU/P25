"use client";
import { useStateProvider } from "@context/StateProvider";
import React from "react";

const Section1 = () => {
  const { setIsLoading } = useStateProvider();
  return (
    <div>
      <div
        className="py-2 px-6 bg-blue-500 cursor-pointer"
        onClick={() => setIsLoading(10000)}
      >
        click
      </div>
      ;
    </div>
  );
};

export default Section1;
