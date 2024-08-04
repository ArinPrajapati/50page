import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { metadata } from "@/app/layout";
import Image from "next/image";
const page = () => {
  metadata.title = "Discover the beauty around the world";
  return (
    <div className="bg-[#ffffff] py-[100px] flex flex-col items-center justify-center gap-[80px]">
      <div className="flex flex-col items-center justify-center w-[610px] gap-4">
        <div className="text-[64px] font-bold font-sans  text-center leading-[70px]">
          Discover the beauty around the world{" "}
        </div>
        <div className="text-[26px] font-sans  text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus
          repudiandae delectus quaerat quibusdam,
        </div>
        <Button className="w-[158px] h-[54px] text-[19px] rounded-[16px]">Expore</Button>
      </div>
      <div className="w-[1312px] flex flex-row flex-wrap gap-4">
        <Image
          src="https://picsum.photos/seed/picsum/450/300
"
          alt="image"
          width={316}
          height={288}
          className="w-[316px] h-[288px] rounded-[16px]"
        />
        <Image
          src="https://picsum.photos/seed/water/450/300
"
          alt="image"
          width={316}
          height={288}
          className="w-[316px] h-[288px] rounded-[16px]"
        />
        <Image
          src="https://picsum.photos/seed/awesome/450/300
"
          alt="image"
          width={316}
          height={288}
          className="w-[316px] h-[288px] rounded-[16px]"
        />
        <Image
          src="https://picsum.photos/seed/gr345ound/450/300
"
          alt="image"
          width={316}
          height={288}
          className="w-[316px] h-[288px] rounded-[16px]"
        />
        <Image
          src="https://picsum.photos/seed/gro54und/450/300
"
          alt="image"
          width={316}
          height={288}
          className="w-[316px] h-[288px] rounded-[16px]"
        />
        <Image
          src="https://picsum.photos/seed/groun34d/450/300
"
          alt="image"
          width={316}
          height={288}
          className="w-[316px] h-[288px] rounded-[16px]"
        />
        <Image
          src="https://picsum.photos/seed/gro23und/450/300
"
          alt="image"
          width={316}
          height={288}
          className="w-[316px] h-[288px] rounded-[16px]"
        />
        <Image
          src="https://picsum.photos/seed/gro23und/450/300
"
          alt="image"
          width={316}
          height={288}
          className="w-[316px] h-[288px] rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default page;
