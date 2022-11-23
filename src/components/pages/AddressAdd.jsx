import React from 'react'

const AddressAdd = () => {
  return (
    <div className='w-full pb-10 border-2 bg-[#eeeeee]'>
        <div className='w-full mt-5'>
            <p className='poppins tracking-[2px] text-[10px] pl-2 md:pl-14'>Home / Accounts</p>
        </div>
        <div className='w-full text-center my-10'>
            <h1 className='lora italic font-[500] text-[20px]'>Add New Address</h1>
        </div>
        <div className='w-[90%] md:w-[50%] mx-auto flex flex-col gap-3 justify-center items-center'>
            <div className='flex flex-col w-full'>
                <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Address Title</label>
                <input type="text" className='md:p-2 md:text-[15px]' />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Address Line I</label>
                <input type="text" className='md:p-2 md:text-[15px]' />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Address Line II</label>
                <input type="text" className='md:p-2 md:text-[15px]' />
            </div>
            <div className='md:grid grid-cols-2 gap-3 w-full'>
                <div className='w-full py-[5px] flex flex-col'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >City</label>
                    <input type="text" className='md:p-2 md:text-[15px]' />
                </div>
                <div className='w-full py-[5px] flex flex-col'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >State</label>
                    <input type="text" className='md:p-2 md:text-[15px]' />
                </div>
                <div className='w-full py-[5px] flex flex-col'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Country</label>
                    <input type="text" className='md:p-2 md:text-[15px]' />
                </div>
                <div className='w-full py-[5px] flex flex-col'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Pincode</label>
                    <input type="number" className='md:p-2 md:text-[15px]' min={0} />
                </div>
            </div>
            <div className='w-full flex justify-between md:justify-center md:gap-[60px] pt-5 md:pt-10'>
                <button className='p-2 px-8 md:p-4 md:px-12 poppins tracking-[3px] poppins text-[11px] md:text-[13px] bg-white text-black' >CANCEL</button>
                <button className='p-2 px-8 md:p-4 md:px-14 poppins tracking-[3px] poppins text-[11px] md:text-[13px] bg-black text-white' >SAVE</button>
            </div>
        </div>
    </div>
  )
}

export default AddressAdd