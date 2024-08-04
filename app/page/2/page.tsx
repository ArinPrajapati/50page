import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className=" p-10 flex flex-col items-center justify-center gap-10 px-60">
      <div className="flex flex-row gap-8 justify-between  ">
        <div className="w-fit h-fit flex flex-col justify-center items-start gap-10 py-14">
          <div className="text-[56px] font-semibold text-[#252525] w-[444px] h-[231px]">
            Discover the beauty around the world
          </div>
          <div className="text-[20px] font-normal text-[#252525] w-[386px] h-fit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu.
          </div>
          <Button className="w-[158px] h-[54px] text-[19px] rounded-[16px]">
            Get Started
          </Button>
        </div>

        <div className=" flex flex-row gap-5 h-[640px]  ">
          <Image
            src="https://plus.unsplash.com/premium_photo-1663962158789-0ab624c4f17d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVhdmVzfGVufDB8fDB8fHww
          "
            alt="image"
            width={316}
            height={288}
            className="w-[408px] h-[500px] rounded-[16px] justify-self-start "
          />
          <Image
            src="https://images.unsplash.com/photo-1549908054-b79f0c4c482a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRyZXNzfGVufDB8fDB8fHww
          "
            alt="image"
            width={316}
            height={288}
            className="w-[408px] h-[500px] rounded-[16px] self-end"
          />
        </div>
      </div>
      <div className="w-[1312px] flex flex-row flex-wrap gap-9">
        <Image
          src="https://images.unsplash.com/photo-1722135899665-c46926258080?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
          alt="image"
          width={316}
          height={288}
          className="w-[412px] h-[469px] rounded-[16px]"
        />
        <Image
          src="https://images.unsplash.com/photo-1516732935065-25d7a0ac2196?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
          alt="image"
          width={316}
          height={288}
          className="w-[412px] h-[469px] rounded-[16px]"
        />
        <Image
          src="https://images.unsplash.com/photo-1509854188881-be2ba9163d90?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
          alt="image"
          width={316}
          height={288}
          className="w-[412px] h-[469px] rounded-[16px]"
        />
      </div>
    </div>
  );
};

export default page;
