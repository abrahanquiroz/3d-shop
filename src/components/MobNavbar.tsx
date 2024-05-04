import React from "react";

import { FiHeart } from "react-icons/fi"; // FiHeart
import { HiOutlineShoppingBag } from "react-icons/hi"; // HiOutlineShoppingBag
import { IoMenuOutline } from "react-icons/io5"; // IoMenuOutline
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai"; // AiOutlineAppstore, AiOutlineHome


const MobNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-slate-500 rounded-t-xl left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8">
      <div className="flex justify-between text-[28px] py-2">
        <IoMenuOutline className="text-white" />
        <div className="relative">
          <HiOutlineShoppingBag className="text-white" />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -xtranslate-y-1">
            0
          </div>
        </div>

        <AiOutlineHome className="text-white" />
        <div className="relative">
          <FiHeart className="text-white" />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>

        <AiOutlineAppstore className="text-white" />
      </div>
    </div>
  );
};

export default MobNavbar;
