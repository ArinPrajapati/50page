"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Page = () => {
  const imgData = [
    "https://images.unsplash.com/photo-1722448614145-551f03e44e1c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1689132270423-046962247545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675712566846-ec91b6c2d5d8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721087331712-e3f61df498a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721058677807-34a4fcde1952?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722241493021-1d0d3ce79f5e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1720649610188-3dfa0defde94?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? imgData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto max-h-screen">
      <div className="relative w-full aspect-[4/3] bg-gray-100">
        <Image
          className="object-contain"
          src={imgData[selectedIndex]}
          alt="selected image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <Button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full z-10"
          onClick={handlePrevClick}
        >
          &lt;
        </Button>
        <Button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full z-10"
          onClick={handleNextClick}
        >
          &gt;
        </Button>
      </div>
      <div className="flex flex-row gap-2 overflow-x-auto mt-4">
        {imgData.map((image, index) => (
          <div
            key={index}
            className={`relative w-52 h-52 flex-shrink-0 cursor-pointer ${
              selectedIndex === index ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              className="object-cover rounded-lg"
              src={image}
              alt={`thumbnail ${index}`}
              fill
              sizes="80px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
