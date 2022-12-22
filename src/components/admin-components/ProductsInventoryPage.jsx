import React, { useState } from 'react'
import logo from '../../assets/icons/sri-aakriti-logo.svg'
import order_logo from '../../assets/icons/admin-order-logo.svg'
import products_logo from '../../assets/icons/admin-products-logo.svg'
import admiProductsApi from '../../mockapi/admiProductsApi'
import left_arrow from '../../assets/icons/admin-left-pointer.svg'
import right_arrow from '../../assets/icons/admin-right-pointer.svg'
import search from '../../assets/icons/admin-search-icon.svg'


const ProductsInventoryPage = () => {

    const [searchData, setSearchData] = useState('');
    return (
        <div className='w-full bg-[#F5F5F5] flex justify-center items-center'>
            <div className='w-full pt-10'>

                {/* mani flex - 1 */}
                <div className='w-[80%] mx-auto'>

                    {/* sub-flex - 1 */}
                    <div className='w-full flex gap-3'>
                        <div className='w-[20%] pb-4'>
                            <div className='w-full flex flex-col justify-end items-center'>
                                <img src={logo} className="w-[85px]" />
                            </div>
                        </div>
                        <div className='w-[80%] flex justify-between items-center'>
                            <div className='w-full'>
                                <h1 className='roboto text-[50px] font-[900]'>Products</h1>
                            </div>
                            <div className='w-fit mr-4'>
                                <button className='w-[120px] bg-white p-1 rounded-[5px] shadow-md'>Add Products</button>
                            </div>
                        </div>
                    </div>

                    {/* sub-flex - 2 */}
                    <div className='w-full flex gap-3'>

                        {/* content-flex - 1 */}
                        <div className='w-[18%] px-3'>
                            <div className='w-full flex flex-col justify-start items-center pt-[110px] bg-[#3EDCFF] h-[97%] shadow-xl rounded-[14px] my-2'>
                                <div className='w-full hover:bg-[#19C7EE] lg:pl-3 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                                    <div>
                                        <img src={order_logo} className="w-[20px]" />
                                    </div>
                                    <div>
                                        <h1 className='roboto text-[17px] font-[500]'>Order</h1>
                                    </div>
                                </div>
                                <div className='w-full bg-[#19C7EE] lg:pl-3 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                                    <div>
                                        <img src={products_logo} className="w-[20px]" />
                                    </div>
                                    <div>
                                        <h1 className='roboto text-[17px] font-[500]'>Products</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* content-flex - 1 */}
                        <div className='w-[82%]  px-3'>
                            <div className='w-full my-2 mb-4'>
                                <div className='w-full shadow-md rounded-[14px] bg-white flex items-center pl-3 gap-3'>
                                    <span><img src={search} className="w-[15px]" /></span><input type="text" className='w-[95%] py-[8px] px-2rounded-[14px] outline-none' placeholder='Filter Products' onChange={(e) => setSearchData(e.target.value)} />
                                </div>
                            </div>
                            <div className='w-full mt-8'>
                                <div className='w-full grid grid-cols-4 gap-4 justify-center items-center px-[12px]'>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>#</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Name</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Category</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Action</h1>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    {
                                        admiProductsApi?.products?.filter((filterValue) => {
                                            if (searchData === '') {
                                                return filterValue
                                            } else if (filterValue?.product_name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.product_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.product_category?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                                                return filterValue
                                            }
                                        }).map((data, i) => (
                                            <div key={i} className='w-full bg-[#FFFFFF] shadow-md rounded-[14px] py-[8px] px-[11px] my-7'>
                                                <div className='grid grid-cols-4 gap-4 justify-center items-center'>
                                                    <div className='flex justify-center items-center'>
                                                        <h1 className='text-[#718096]'>{data?.product_id}</h1>
                                                    </div>
                                                    <div className='flex justify-center items-center'>
                                                        <h1 className='text-[#718096]'>{data?.product_name}</h1>
                                                    </div>
                                                    <div className='flex justify-center items-center'>
                                                        <h1 className='text-[#718096]'>{data?.product_category}</h1>
                                                    </div>
                                                    {/* <div className='inline-block flex'>{data?.product_action?.map((sub_data, sub_index) => (
                                                        <div key={sub_index} className='flex items-center border border-red-500'>
                                                            <span className='border border-red-500'><img src={sub_data?.img} className="w-[20px]" /></span>
                                                        </div>
                                                    ))}</div> */}
                                                    <div className='flex justify-center items-center'>
                                                        <div className='flex gap-5 w-fit items-center'>
                                                            <span className=''><img src={data?.icon_edit} className="w-[16px]" /></span>
                                                            <span className=''><img src={data?.icon_delete} className="w-[14px]" /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* mani flex - 2 */}
                <div className='w-full flex justify-center items-center pt-4 relative'>
                    <div className='flex items-center gap-3'>
                        <span className='mr-3' ><img src={left_arrow} className="w-[11px]" /></span>
                        {
                            admiProductsApi?.page_number_data?.map((num_data, num_index) => (
                                <p key={num_index} className='mx-1 text-[#718096] text-[12px]'>{num_data}</p>
                            ))
                        }
                        <span className='ml-3' ><img src={right_arrow} className="w-[11px]" /></span>
                    </div>
                    <div className='absolute right-[13%]'>
                        <p className='text-[#718096] text-[14px]'>Showing 11- 20 of 64 results</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsInventoryPage