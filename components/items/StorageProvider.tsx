"use client";
import { useData } from "@context/DataProviders";
import React, { useEffect } from "react";

const StorageProvider = ({ Products, Posts }: any) => {
  const { setProducts, setPosts } = useData();
  //   console.log(Products);
  useEffect(() => {
    setProducts(Products);
    setPosts(Posts);
  }, [Products, Posts]);

  return <div></div>;
};

export default StorageProvider;
