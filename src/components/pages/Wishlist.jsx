import React from "react";
import img from '../../assets/images/chain.png'
import img_left from "../../assets/icons/black-arrow-left.svg";
import checkout from '../../mockapi/checkoutPageApi'
import { useNavigate } from "react-router-dom";

const Wishlist = () => {

    const navigate = useNavigate();


  return (
    <div className="w-full mb-20 md:py-4">
        <img src={img_left} className="w-[25px] md:w-[35px] mt-3 ml-3 md:ml-13 cursor-pointer" onClick={() => navigate(-1)}    />
        <div className="w-full text-center mt-4 py-4">
          <h1 className="lora italic text-[22px] md:text-[28px] font-[500] pb-2 md:py-4">Wishlist</h1>
          <p className="poppins text-[10px] md:text-[12px] md:tracking-[2px] pt-2 md:py-4" >This is your account wishlist. You can review or share a wishlist  </p>
        </div>
        <div className="w-[90%] mx-auto flex justify-end md:justify-center py-4">
            <button className="bg-black text-white p-4 px-6 text-[11px] md:text-[13px] font-[300] tracking-[3px]">ADD ALL TO CART</button>
        </div>
        <div className="w-[90%] mx-auto h-[300px] md:h-[400px] overflow-y-scroll max-w-[650px] my-12">
        {
            checkout?.item?.content?.map((data, i) => (
                <React.Fragment  key={i}>
                <div className="w-full flex gap-2 md:gap-5 my-4 lg:p-2">
                    <div className="w-fit flex items-center">
                        <img src={data?.image} className="w-[80px]" />
                    </div>
                    <div className="w-[70%] flex flex-col justify-start md:justify-center items-center">
                        <h1 className="text-[16px] md:text-[19px] lora font-[500] w-full" >{data?.title}</h1>
                        <h1 className="text-[11px] md:text-[14px] poppins w-full" >{data?.id}</h1>
                        <h1 className="text-[11px] md:text-[14px] poppins w-full" > <span className="line-through">₹ {data?.price}</span> <span className="font-[600]">₹ {data?.discount_price}</span></h1>
                    </div>
                    <div className="w-10% flex items-center">
                    <div className="flex items-center w-full justify-end">
                        <button className="text-[19px] bg-[#ffffff] font-[500] px-2 flex justify-center items-center" >-</button>
                        <p className="text-[13px] bg-[#3EDCFF] font-[500] px-2 flex justify-center items-center" >{data?.qty}</p>
                        <button className="text-[19px] bg-[#ffffff] font-[500] px-2 flex justify-center items-center" >+</button>
                    </div>
                    </div>
                </div>
                <div className="w-[90%] mx-auto flex justify-end border-b border-b-[#0000002d] pb-2">
                    <button className="bg-[#3EDCFF] poppins tracking-[2px] text-[12px] p-2 px-4 md:p-4 md:px-6 font-[500]">ADD TO CART</button>
                </div>
                </React.Fragment>
            ))
        }
        </div>
    </div>
  );
};

export default Wishlist;
