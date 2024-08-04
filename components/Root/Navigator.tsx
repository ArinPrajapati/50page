import React from "react";
import { Button } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";

const Navigator = () => {
  const router = useRouter();
  const pathname = usePathname();

  const getCurrentPage = () => {
    const match = pathname.match(/\/page\/(\d+)/);
    return match ? parseInt(match[1]) : 1;
  };

  const handlerNext = () => {
    const currentPage = getCurrentPage();
    const nextPage = currentPage < 50 ? currentPage + 1 : 50;
    router.push(`/page/${nextPage}`);
  };

  const handlerPrev = () => {
    const currentPage = getCurrentPage();
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    router.push(`/page/${prevPage}`);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 p-4">
      <Button
        onClick={handlerPrev}
        disabled={getCurrentPage() === 1}
        variant={"transparent"}
      >
        {"<"}
      </Button>
      <Button
        onClick={handlerNext}
        disabled={getCurrentPage() === 50}
        variant={"transparent"}
      >
        {">"}
      </Button>
    </div>
  );
};

export default Navigator;
