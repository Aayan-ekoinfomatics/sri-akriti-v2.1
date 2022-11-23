import React from "react";
import chain from "../../assets/images/chain.png";
import bracelet from "../../assets/images/bracelet.png";

const ThirdSection = () => {
  return (
    <>
      {/* desktop view */}
      <h1 className="hidden md:block lora italic text-[40px] pl-24 py-4 pb-12" >See our suggestions</h1>
      <div className="hidden md:flex w-[95%] mx-auto pb-10">
        <div className="flex-1 flex overflow-hidden group justify-end">
          <div className="w-fit translate-x-8 z-[100] group-hover:translate-x-5 text-vertical p-2 transition-all pb-8">
            <h1 className="text-right text-[#3EDCFF] poppins text-[15px] lg:text-[21px] lg:tracking-[10px]">
              NECKLESS COLLECTIONS
            </h1>
          </div>
          <div className="w-full group-hover:translate-x-8 z-[200] transition-all ">
            <img src={chain} className="w-full " />
          </div>
        </div>
        <div className="flex-1 flex overflow-hidden group justify-end">
          <div className="w-fit translate-x-8 z-[100] group-hover:translate-x-5 text-vertical p-2 transition-all pb-8">
            <h1 className="text-right text-[#3EDCFF] poppins text-[15px] lg:text-[21px] lg:tracking-[10px]">
              BRACELET COLLECTIONS
            </h1>
          </div>
          <div className="w-full group-hover:translate-x-8 z-[200] transition-all ">
            <img src={bracelet} className="w-full " />
          </div>
        </div>
      </div>


      {/* mobile view */}
      <div className="md:hidden">
        <h1 className="lora text-[#231F20] text-[20px] py-4 pl-4 font-[500] italic">
          See our suggestions
        </h1>
        <div className="px-3 py-1">
          <img src={chain} className="w-full" />
        </div>
        <div className="px-3 py-1">
          <img src={bracelet} className="w-full" />
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
