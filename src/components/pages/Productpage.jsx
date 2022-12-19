import React, { useEffect, useState } from "react";
import chain from "../../assets/images/chain-1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import arrow from "../../assets/icons/arrow.svg";
// import { data } from "autoprefixer";
import product_details from "../../mockapi/singleProductPageApi";
import collection_data from "../../mockapi/apiData";
import { Link, NavLink, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import singleProductApiAtom from "../../recoil/atoms/products/singleProductApiAtom";
import axios from "axios";
import categoriesApiAtom from "../../recoil/atoms/products/categoriesApiAtom";

const Productpage = () => {

  const params = useParams();

  const [productApiData, setProductApiData] = useRecoilState(singleProductApiAtom);

  const [categoryApi, setCategoryApi] = useRecoilState(categoriesApiAtom);

  const [selectedQuality, setSelectedQuality] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  useEffect(() => {
    let formdata = new FormData();
    // formdata.append("id", data?.id);
    formdata.append("product_id", params?.product_id);
    axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'productDetails', formdata).then((response) => setProductApiData(response?.data))
    // console.log(response?.data)
  }, [params])

  // useEffect(() => {
  //   console.log(categoryApi);
  // }, [categoryApi])


  return (
    <>
      <div className="md:flex gap-5 w-[95%] mx-auto ">
        <div className=" md:w-[50%]">
          <div className="pl-3 flex gap-4 items-center md:tracking-[2px] text-[11px] md:text-[18px] my-5 md:my-10">
            {/* Home / Necklace / Type 1 Necklace Platinum */}
            {
              product_details?.product[0]?.breadcrumbs?.map((data, i) => (
                <h1 className="poppins leading-[1px] cursor-pointer" key={i}>{data?.link_name} {product_details?.product[0]?.breadcrumbs?.length === i + 1 ? '' : <span>/</span>} </h1>
              ))
            }
            {/* {params?.product_id} */}
          </div>
          <div className="w-[95%] mx-auto object-cover mb-2 md:flex gap-1 justify-center items-center md:pb-16 md:pr-12 lg:pb-24 lg:pr-24">
            {/* mobile slider */}
            <Slider
              className="w-full mx-auto z-[780] md:hidden"
              slidesToScroll={1}
              slidesToShow={1}
              infinite
              dots={true}
              dotsClass="slick-dots"
            >
              {product_details?.images?.map((data, i) => (
                <div key={i} className=" max-w-[100%] h-[100%]">
                  <img
                    src={data?.img}
                    alt=""
                    className="object-contain w-[95%] mx-auto"
                  />
                </div>
              ))}
            </Slider>

            {/* desktop pictures */}

            {/* {product_details?.product?.map((datas, index) => (
              <React.Fragment key={index}>
                <div className="hidden md:block w-[75%]">
                  <img src={datas?.images[0]} className="w-[95%]" />
                </div>
              </React.Fragment>
            ))} */}

            <div>
              <div className="hidden md:block w-full">
                <img src={import.meta.env.VITE_APP_BASE_API_LINK + productApiData?.image[0]} className=" min-w-[300px] w-[90%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="lora w-[95%] md:w-[50%] pt-12 mx-auto tracking-[2px] mt-6">
          {/* {product_details?.product?.map((data, i) => (
            <div key={i} className='relative'>
              <h1 className="text-[20px] sm:text-[30px] md:text-[36px] my-2 md:my-[20px] lg:my-[35px] font-[600]">
                {data?.title}
              </h1>
              <h1 className="text-[15px] md:text-[18px] lora ">{data?.id}</h1>
              <h1 className="text-[18px] sm:text-[26px] md:text-[25px] my-3 md:my-[20px] lg:my-[30px]">
                ₹{data?.discount_price}{" "}
                <span className="line-through">₹{data?.original_price}</span>{" "}
                {data?.offer}
              </h1>
              <div className="w-full mx-auto md:my-8">
                <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">M or F</h1>
                <div className="flex justify-between md:w-[58%] text-[#6969698a]">
                  <h1 className="text-[12px] md:text-[14px] lora text-black" >BOTH</h1>
                  <h1 className="text-[12px] md:text-[14px] lora" >MEN'S ONLY</h1>
                  <h1 className="text-[12px] md:text-[14px] lora" >WOMEN'S ONLY</h1>
                </div>
              </div>
              <div className="w-full mx-auto md:my-8">
                <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Diamond Quality</h1>
                <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                  <h1 className="text-[12px] md:text-[14px] lora" >SI J</h1>
                  <h1 className="text-[12px] md:text-[14px] lora text-black" >GV VS</h1>
                </div>
              </div>
              <div className="w-full mx-auto md:my-8">
                <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Size</h1>
                <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                  <h1 className="text-[12px] md:text-[14px] lora" >16 INCHES</h1>
                  <h1 className="text-[12px] md:text-[14px] lora text-black" >18 INCHES</h1>
                </div>
              </div>
              <div className="w-full mx-auto md:my-8">
                <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Weight</h1>
                <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                  <h1 className="text-[12px] md:text-[14px] lora text-black" >16 gms</h1>
                  <h1 className="text-[12px] md:text-[14px] lora" >18 gms</h1>
                </div>
              </div>
              <div className="w-full md:w-[80%] flex justify-between sticky botton-0 right-0 text-black my-5">
                <Link to=''><button className="bg-black text-white p-2 px-2 md:p-4 md:px-14 poppins text-[15px] md:text-[22px] tracking-[2px] md:tracking-[3px]">ADD TO CART</button></Link>
                <button className="bg-[#3EDCFF] p-2 px-6 md:p-4 md:px-[90px] poppins text-[15px] md:text-[22px] tracking-[2px] md:tracking-[3px]">BUY NOW</button>
              </div>
              <div className="w-full poppins text-[12px] md:text-[14px] my-4 md:mt-20">
                <h1 className="lora text-[16px] md:text-[20px] " >Product Description</h1>
                <ul className="poppins font-[300] text-[12px] md:text-[13px] list-disc pl-4">
                  {
                    product_details?.product[0]?.description_list?.map((data, i) => (
                      <li className="py-1 md:py-[3px]" key={i}>{data}</li>
                    ))
                  }
                </ul>
                <h1>This chain is not eligible for exchange or refund</h1>
              </div>
            </div>
          ))} */}
          <div className='relative'>
            <h1 className="text-[20px] sm:text-[30px] md:text-[36px] my-2 md:my-[20px] lg:my-[35px] font-[600]">
              {productApiData?.name}
            </h1>
            <h1 className="text-[15px] md:text-[18px] lora ">{productApiData?.name}</h1>
            <h1 className="text-[18px] sm:text-[26px] md:text-[25px] my-3 md:my-[20px] lg:my-[30px]">
              ₹ {productApiData?.selling_price[selectedQuality][selectedSize]}
              <span className="line-through text-[20px] text-[#696969] mx-2">₹ {productApiData?.actual_price[selectedQuality][selectedSize]} </span>
              <span className="text-[18px]">{productApiData?.discount}% Off</span>
            </h1>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">M or F</h1>
              <div className="flex justify-between md:w-[58%] text-[#6969698a]">
                {/* <h1 className="text-[12px] md:text-[14px] lora text-black" >BOTH</h1>
                  <h1 className="text-[12px] md:text-[14px] lora" >MEN'S ONLY</h1>
                  <h1 className="text-[12px] md:text-[14px] lora" >WOMEN'S ONLY</h1> */}
                <h1 className="text-[12px] md:text-[14px] lora text-black" >{productApiData?.gender}</h1>
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Diamond Quality</h1>
              <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                {/* <h1 className="text-[12px] md:text-[14px] lora" >SI J</h1> */}
                {
                  productApiData?.diamond_quality?.map((data, i) => (
                    <h1 key={i} className={`text-[12px] md:text-[14px] lora cursor-pointer ${i === selectedQuality ? 'text-black' : ''} `} onClick={() => setSelectedQuality(i)} >{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Size</h1>
              <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                {/* <h1 className="text-[12px] md:text-[14px] lora" >16 INCHES</h1>
                  <h1 className="text-[12px] md:text-[14px] lora text-black" >18 INCHES</h1> */}
                {
                  productApiData?.size?.map((data, i) => (
                    <h1 key={i} className={`text-[12px] md:text-[14px] lora cursor-pointer ${i === selectedSize ? 'text-black' : ''} `} onClick={() => setSelectedSize(i)} >{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Weight</h1>
              <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                {/* <h1 className="text-[12px] md:text-[14px] lora text-black" >16 gms</h1>
                  <h1 className="text-[12px] md:text-[14px] lora" >18 gms</h1> */}
                {
                  productApiData?.weight?.map((data, i) => (
                    <h1 key={i} className={`text-[12px] md:text-[14px] lora cursor-pointer mx-2 ${i === selectedSize ? 'text-black' : ''} `} onClick={() => setSelectedSize(i)}>{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full md:w-[80%] flex gap-2 justify-between sticky botton-0 right-0 text-black my-5">
              <Link to=''><button className="bg-black text-white p-2 px-2 md:p-4 md:px-14 poppins text-[15px] md:text-[20px] tracking-[2px] md:tracking-[3px]">ADD TO CART</button></Link>
              <button className="bg-[#3EDCFF] p-2 px-6 md:p-4 md:px-[90px] poppins text-[15px] md:text-[20px] tracking-[2px] md:tracking-[3px]">BUY NOW</button>
            </div>
            <div className="w-full poppins text-[12px] md:text-[14px] my-4 md:mt-20">
              <h1 className="lora text-[16px] md:text-[20px] " >Product Description</h1>
              <ul className="poppins font-[300] text-[12px] md:text-[13px] list-disc pl-4">
                {/* {
                    product_details?.product[0]?.description_list?.map((data, i) => (
                      <li className="py-1 md:py-[3px]" key={i}>{data}</li>
                    ))
                  } */}
              </ul>
              <h1>This chain is not eligible for exchange or refund</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[93%] mx-auto flex justify-start items-center gap-2 md:gap-4 my-4 mb-10">
        <div className="w-[8px] md:w-[18px]">
          <img src={arrow} className="w-full" />
        </div>
        <h1 className="lora text-[22px] md:text-[36px] font-[600] tracking-[2px]">
          Similar
        </h1>
        <h1 className="lora text-[14px] md:text-[22px] font-[400] ml-4 md:ml-8 tracking-[2px]">
          to this one
        </h1>
      </div>
      <div>
        <div className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 mb-10">
          {
            categoryApi?.data?.map((data, i) => (
              <div className="p-1" key={i}>
                <div>
                  <NavLink to='/product-details/:product_id'> <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="" /></NavLink>
                </div>
                <button className="w-full text-white tracking-[1px] md:tracking-[3px] text-[15px] md:text-[20px] bg-[#3EDCFF] px-4 md:px-7 py-2">
                  ADD TO CART
                </button>
                <div className="flex items-center gap-3">
                  <h1 className="text-[14px] py-2 md:text-[23px] font-[500] tracking-[2px] ">
                    ₹ {data?.selling_price}
                  </h1>
                  <span className="text-[20px] line-through text-[#696969] tracking-[2px]">₹ {data?.actual_price}</span>
                </div>
                <h1 className="text-[12px] md:text-[19px] font-[400] tracking-[3px]">
                  {data?.name}
                </h1>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Productpage;
