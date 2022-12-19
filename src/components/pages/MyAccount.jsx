import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import profile_data from '../../mockapi/myProfileApi'
import img_left from "../../assets/icons/black-arrow-left.svg"

const MyAccount = () => {

    const navigate = useNavigate();


  return (
    <div className='bg-white pb-24'>
        <span className='inline-block ml-4 md:ml-[250px] mt-4 cursor-pointer'>
            <img src={img_left} className="w-[32px]" onClick={() => navigate(-1)} />
        </span>
        <div className="w-full text-center pt-5 pb-10">
            <h1 className="lora italic text-[18px] md:text-[28px] font-[500]">My Account</h1>
        </div>

      {/* main flex */}

      <div className='w-[90%] md:w-[70%] mx-auto md:flex md:gap-x-12 md:flex-row-reverse'>
        {/* first sub-main flex item */}

        <div className='md:w-[45%] md:flex flex-col justify-between md:pb-4' >
            {/* my Orders */}
            <div className='w-full bg-[#E3E3E3] my-4 md:mx-10 md:max-h-[160px] overflow-y-scroll pt-[1rem] max-h-[200px]'>
            <div className="w-[90%] mx-auto flex justify-between py-2 lora text-[15px]">
                <h1 className="font-[500] md:text-[17px]">{profile_data?.my_orders?.header?.heading}</h1>
                <Link to='/orders' className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</Link>
            </div>
            {
              profile_data?.my_orders?.content?.map((data, i) => (
                <div className="w-[95%] mx-auto flex justify-between items-center py-2 px-2 lora text-[12px] tracking-[1.5px]" key={i}>
                    <img src={data?.image} className="w-[40px]" />
                    <h1>{data?.title}</h1>
                    <h1>{data?.price}</h1> 
                </div>
              ))
            }
            </div>

            {/* wishlist */}
            <div className='w-full bg-[#E3E3E3] my-4 md:mx-10 md:max-h-[160px] overflow-y-scroll pt-[1rem] max-h-[200px]'>
            <div className="w-[90%] mx-auto flex justify-between py-2 lora text-[15px]">
                <h1 className="font-[500] md:text-[17px]">{profile_data?.wishlist?.header?.heading}</h1>
                <Link to='/wishlist' className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</Link>
            </div>
            {
              profile_data?.wishlist?.content?.map((data, i) => (
                <div className="w-[95%] mx-auto flex justify-between items-center py-2 px-2 lora text-[12px] tracking-[1.5px]" key={i}>
                    <img src={data?.image} className="w-[40px]" />
                    <h1>{data?.title}</h1>
                    <h1>{data?.price}</h1> 
                </div>
              ))
            }
            </div>

            {/* card desktop*/}
            <div className="w-full px-3 bg-[#E3E3E3] my-4 mx-10 md:my-0 hidden md:block md:max-h-[160px] overflow-y-scroll pt-[1rem]">
                <div className="w-[95%] mx-auto flex justify-between py-2 lora text-[15px]">
                    <h1 className="font-[500] md:text-[17px]">{profile_data?.card?.header?.heading}</h1>
                    <h1 className="tracking-[2px] cursor-pointer">{profile_data?.card?.header?.sub_heading}</h1>
                </div>
                {
                    profile_data?.card?.content?.map((data, i) => (
                        <div key={i} className='w-[95%] mx-auto border-b border-b-[#696969b6] py-3'>
                            <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
                                <h1 className="poppins text-[10px]">{data?.card_number}</h1>
                                <h1 className="poppins text-[10px]">{data?.cvv}</h1>
                            </div>
                            <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
                                <h1 className="poppins text-[10px]">{data?.name}</h1>
                                <span className='flex justify-between gap-4'>
                                <a className="poppins text-[10px] border-b border-b-[#696969b6] cursor-pointer">edit</a>
                                <h1 className="poppins text-[10px]">{data?.expiry}</h1>
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* second sub-main flex item */}

        <div className='md:w-[55%] md:flex flex-col justify-between' >
            {/* my profile */}
            <div className='w-full bg-[#E3E3E3] my-4 py-2 px-4 pt-4 max-h-[200px] md:max-h-max overflow-y-scroll md:overflow-auto'>
                <div className="w-[95%] mx-auto flex justify-between py-2 lora text-[15px]">
                    <h1 className="font-[500] md:text-[18px] md:w-full md:text-center md:ml-8">{profile_data?.my_profile?.header?.heading}</h1>
                    <h1 className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</h1>
                </div>
                <div className='md:grid grid-cols-2'>
                {
                    profile_data?.my_profile?.content?.map((data, i) => (
                        <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]" key={i}>
                            <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">{data?.label}</label>
                                <input type={data?.type} className="w-full p-2 md:p-1 text-[11px]" />
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>

            {/* address */}
            <div className='w-full bg-[#E3E3E3] my-4 py-2 px-4 md:px-0 md:max-h-[155px] overflow-y-scroll pt-4 max-h-[200px]'>
                <div className="w-[95%] mx-auto flex justify-between md:px-3 py-2 lora text-[14px] mb-4">
                    <h1 className="font-[500] md:text-[18px] md:w-full md:text-center md:ml-8">{profile_data?.address?.header?.heading}</h1>
                    <Link to='/add-address' className="tracking-[2px]">{profile_data?.address?.header?.sub_heading}</Link>
                </div>
                {
                    profile_data?.address?.content?.map((data, i) => (
                    <div className='w-[90%] mx-auto flex justify-between items-center my-2'  key={i}>
                        <div className="w-full flex flex-col justify-start py-2 md:px-3 lora text-[11px] tracking-[1.5px]">
                            <h1>{data?.area}</h1>
                            <h1>{data?.city}</h1>
                            <h1>{data?.pincode}</h1>
                        </div>
                        <NavLink to='/add-address'>
                            <div className='lora text-[13px] tracking-[2px]'>
                                <p>edit</p>
                            </div>
                        </NavLink>
                    </div>
                    ))
                }
            </div>

            {/* card mobile*/}
            <div className="w-full px-3 bg-[#E3E3E3] my-4  md:my-0 block md:hidden overflow-y-scroll pt-4 max-h-[200px] md:max-h-max">
                <div className="w-full flex justify-between md:px-3 py-2 lora text-[15px]">
                    <h1 className="font-[500] md:text-[17px]">{profile_data?.card?.header?.heading}</h1>
                    <h1 className="tracking-[2px]">{profile_data?.card?.header?.sub_heading}</h1>
                </div>
                {
                    profile_data?.card?.content?.map((data, i) => (
                        <div className='w-full border border-b-[#696969]' key={i}>
                            <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
                                <h1 className="poppins text-[10px]">{data?.card_number}</h1>
                                <h1 className="poppins text-[10px]">{data?.cvv}</h1>
                            </div>
                            <div className="flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]">
                                <h1 className="poppins text-[10px]">{data?.name}</h1>
                                <span className='flex justify-between gap-4'>
                                <a className="poppins text-[10px] border-b border-b-[#696969b6] cursor-pointer">edit</a>
                                <h1 className="poppins text-[10px]">{data?.expiry}</h1>
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>

      {/* main flex 2 */}
      {/* <div className='border-2 border-red-500 w-full'>
      </div> */}
    </div>
  )
}

export default MyAccount