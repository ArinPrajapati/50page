"use client";

import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const imgData = [
    "https://assets.ajio.com/medias/sys_master/root/20240627/WF8e/667cfa466f60443f31c11831/-1117Wx1400H-700132335-navy-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20240627/PkhK/667cfa466f60443f31c11873/-1117Wx1400H-700132335-navy-MODEL2.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20240627/EryV/667cfa466f60443f31c11843/-473Wx593H-700132335-navy-MODEL8.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20240627/HLMB/667cfa466f60443f31c11875/-1117Wx1400H-700132335-navy-MODEL3.jpg",
  ];

  const sizeList = ["S", "M", "L", "XL", "XXL"];
  const productDetails = {
    maker: "JANKIT DESIGNER",
    name: "Men Printed Regular Fit Shirt with Spread Collar",
    price: 1999,
    discountedPrice: 599,
    color: "Navy",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
  };
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex flex-row w-full h-screen justify-center items-center gap-8">
      <div className="flex gap-10">
        <div className="w-[20%] flex flex-col gap-6">
          {imgData.map((image, index) => (
            <div
              key={index}
              className={`w-[80px] h-[120px] rounded-lg ${
                currentImage === index ? "border-4 border-[#ff0d0d]" : ""
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setCurrentImage(index)}
            ></div>
          ))}
        </div>
        <div className="w-[80%] flex justify-center items-center">
          <Image
            src={imgData[currentImage]}
            alt={`Image ${currentImage + 1}`}
            width={500}
            height={600}
          />
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-4">
        <div>
          <h2 className="text-[48px] font-bold">{productDetails.name}</h2>
          <p className="text-md text-gray-500">by {productDetails.maker}</p>
          <p className="text-3xl font-bold text-red-600">
            ₹{productDetails.discountedPrice}
          </p>
          <p className="text-md text-gray-500 line-through">
            ₹{productDetails.price}
          </p>
          <p className="text-xl font-semibold">Color: {productDetails.color}</p>
          <p className="text-lg my-2 w-[70%]">{productDetails.discription}</p>
          <div className="mt-4">
            <p className="text-xl font-semibold">Sizes Available:</p>
            <div className="flex gap-2 mt-2">
              {sizeList.map((size, index) => (
                <div
                  key={index}
                  className="px-5 py-3 border rounded-lg cursor-pointer hover:bg-gray-200"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
