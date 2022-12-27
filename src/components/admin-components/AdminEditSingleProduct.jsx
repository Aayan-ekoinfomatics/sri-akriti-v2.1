import React, { useEffect, useState } from 'react'
import logo from '../../assets/icons/sri-aakriti-logo.svg'
import order_logo from '../../assets/icons/admin-order-logo.svg'
import products_logo from '../../assets/icons/admin-products-logo.svg'
import admiProductsApi from '../../mockapi/admiProductsApi'
import adminOrdersApi from '../../mockapi/adminOrdersApi'
import left_arrow from '../../assets/icons/admin-left-pointer.svg'
import right_arrow from '../../assets/icons/admin-right-pointer.svg'
import search from '../../assets/icons/admin-search-icon.svg'
import img from '../../assets/icons/no-data-found.svg'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import down from '../../assets/icons/down-arrow-admin.svg'


const AdmitEditSingleProduct = () => {

    const [searchData, setSearchData] = useState('');
    const [filterValue, setFilteredValue] = useState();

    const [dropdown, setDropdown] = useState(false);
    const [selectedDiamondQuality, setSelectedDiamondQuality] = useState(null);

    const [defaultData, setDefaultData] = useState();

    const [gender, setGender] = useState();

    const params = useParams()

    const [activeIndex, setActiveIndex] = useState()

    const [activeKey, setActiveKey] = useState();

    useEffect(() => {
        setFilteredValue(adminOrdersApi?.products?.filter((filterValue) => {
            if (searchData === '') {
                return filterValue
            } else if (filterValue?.order_name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.order_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.order_category?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                return filterValue
            }
        }).length)
    }, [searchData])

    useEffect(() => {
        setGender(defaultData?.gender)
        console.log(defaultData)
    }, [defaultData])


    useEffect(() => {
        // let formdata = new FormData();
        // formdata.append("id", params?.product_id);
        axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminSingleProduct?product_id=  ' + params?.product_id).then((response) => {
            // console.log(response?.data)
            setDefaultData(response?.data)
            setSelectedDiamondQuality(response?.data?.variants[0]?.diamond_quality)
        })
    }, [])


    useEffect(() => {
        console.log(selectedDiamondQuality)
    }, [selectedDiamondQuality])


    // const diamondQalityApi = {
    //     product: [
    //         {
    //             diamond_quality: 'ABCD',
    //             size: ['22', '21', '20'],
    //             weight: ['50', '60', '70'],
    //             actual_price: ['22000', '23000', '24000'],
    //             selling_price: ['24000', '26000', '28000'],
    //         },
    //         {
    //             diamond_quality: 'EFGH',
    //             size: ['23', '22', '21'],
    //             weight: ['40', '50', '60'],
    //             actual_price: ['24000', '26000', '28000'],
    //             selling_price: ['26000', '28000', '30000'],
    //         },
    //         {
    //             diamond_quality: 'IJKL',
    //             size: ['24', '23', '22'],
    //             weight: ['30', '50', '60'],
    //             actual_price: ['26000', '28000', '30000'],
    //             selling_price: ['28000', '30000', '32000'],
    //         },
    //         {
    //             diamond_quality: 'MNOP',
    //             size: ['25', '24', '23'],
    //             weight: ['20', '70', '90'],
    //             actual_price: ['32000', '30000', '28000'],
    //             selling_price: ['34000', '32000', '30000'],
    //         },
    //     ]
    // }

    const submitForm = (e) => {
        e.preventDefault()
        // let formdata = new FormData();
        // formdata.append("id", params?.product_id);
        axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminSingleProduct?product_id=  ' + params?.product_id).then((response) => {
            // console.log(response?.data)
            setDefaultData(response?.data)
        })
    }


    return (
        <div className='w-full bg-[#F5F5F5] flex justify-center items-center relative'>
            <div className='w-full pt-10'>

                {/* mani flex - 1 */}
                <div className='w-[80%] mx-auto'>

                    {/* sub-flex - 1 */}
                    <div className='w-full flex gap-3'>
                        <div className='w-[18%] pb-4'>
                            <div className='w-full flex flex-col justify-end items-center'>
                                <img src={logo} className="w-[85px]" />
                            </div>
                        </div>
                        <div className='w-[82%] flex justify-between items-center'>
                            <div className='w-full'>
                                {/* <h1 className='roboto text-[50px] font-[900]'>Orders</h1> */}
                            </div>
                            {/* <div className='w-fit mr-4'>
                                <button className='w-[120px] bg-white p-1 rounded-[5px] shadow-md'>Add Orders</button>
                            </div> */}
                        </div>
                    </div>

                    {/* sub-flex - 2 */}
                    <div className='w-full flex gap-3'>

                        {/* content-flex - 1 */}
                        <div className='w-[18%] px-3'>
                            <div className='w-full flex flex-col justify-start items-center pt-[110px] bg-[#3EDCFF] h-[97%] shadow-xl rounded-[14px] my-2'>
                                <NavLink to='/admin-orders' className='w-full block'>
                                    <div className='w-full hover:bg-[#19C7EE] lg:pl-5 py-2 cursor-pointer flex justify-start gap-4 my-2'>
                                        <div>
                                            <img src={order_logo} className="w-[20px]" />
                                        </div>
                                        <div>
                                            <h1 className='roboto text-[17px] font-[500]'>Order</h1>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to='/admin-products' className='w-full block'>
                                    <div className='w-full bg-[#19C7EE] pl-5 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                                        <div>
                                            <img src={products_logo} className="w-[20px]" />
                                        </div>
                                        <div>
                                            <h1 className='roboto text-[17px] font-[500]'>Products</h1>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        {/* content-flex - 1 */}
                        <div className='w-[82%] px-3'>
                            <div className='w-full min-h-[70vh] pt-[20px]'>
                                <form onSubmit={submitForm} className='w-fit min-w-[1000px] roboto'>
                                    <div className='w-full flex gap-2'>
                                        <div className='w-full'>

                                            <div className='flex gap-5 my-2 max-w-[500px]'>
                                                <div className='flex gap-4 items-center' onClick={() => setGender('Male')}>
                                                    <div className={`w-[10px] h-[10px] rounded-[50%] ${gender === 'Male' ? 'bg-[#3EDCFF] border-none' : 'bg-[#c5c5c5]'}`}>
                                                    </div>
                                                    <label htmlFor='gender' className='text-[15px] font-[500]'>Male</label>
                                                </div>
                                                <div className='flex gap-4 items-center' onClick={() => setGender('Female')}>
                                                    <div className={`w-[10px] h-[10px] rounded-[50%] ${gender === 'Female' ? 'bg-[#3EDCFF] border-none' : 'bg-[#c5c5c5]'}`}>
                                                    </div>
                                                    <label htmlFor='gender' className='text-[15px] font-[500]'>Female</label>
                                                </div>
                                                <div className='flex gap-4 items-center' onClick={() => setGender('Unisex')}>
                                                    <div className={`w-[10px] h-[10px] rounded-[50%] ${gender === 'Unisex' ? 'bg-[#3EDCFF] border-none' : 'bg-[#c5c5c5]'}`}>
                                                    </div>
                                                    <label htmlFor='gender' className='text-[15px] font-[500]'>Gay</label>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col my-2 max-w-[500px]'>
                                                <input type="text" name="product name" defaultValue={defaultData?.name} className='outline-none py-[6px] px-3 my-1 rounded-[8px] shadow-md text-[13px]' placeholder='Product Name' />
                                                <input type="text" name="product category" defaultValue={defaultData?.category} className='outline-none py-[6px] px-3 my-1 rounded-[8px] shadow-md text-[13px]' placeholder='Product Category' />
                                            </div>
                                            <h1 className='my-1 pt-14 font-[500]'>Diamond Quality</h1>
                                            <div className='w-full flex flex-col my-2 max-w-[500px]'>

                                                {/* dropdown */}
                                                <div className='w-full rounded-[10px] z-[110] bg-white shadow-md py-[5px] pl-3 my-1 cursor-pointer flex justify-between items-center pr-3' onClick={() => setDropdown(!dropdown)}>
                                                    <div className='text-[15px] text-[#696969b6]'>{!selectedDiamondQuality ? 'Select a diamond quality' : selectedDiamondQuality}</div>
                                                    <div><img src={down} className="" /></div>
                                                </div>
                                                <div className={`fixed max-w-[500px] z-[110] mt-10 rounded-[10px] shadow-md bg-white w-full overflow-hidden transition-all duration-300 ${dropdown ? 'max-h-[180px] ease-in  px-4 py-2' : 'max-h-0 ease-out p-0'}`}>
                                                    {
                                                        defaultData?.variants?.map((data, i) => {
                                                            return (
                                                                <li key={i} className='text-[16px] list-none roboto w-full hover:bg-[#dddddd] my-1 px-2 py-1 cursor-pointer rounded-md' onClick={() => {
                                                                    setSelectedDiamondQuality(data?.diamond_quality)
                                                                    setDropdown(false)
                                                                }}>{data?.diamond_quality}</li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className={`fixed bottom-0 top-0 left-0 right-0 bg-black opacity-40 z-[100] ${dropdown ? 'block' : 'hidden'}`} onClick={() => setDropdown(false)}>

                                                </div>


                                                <input type="text" defaultValue={selectedDiamondQuality} name="product name" className='outline-none py-[6px] px-3 my-1 rounded-[8px] shadow-md text-[13px]' placeholder='Category Name' />
                                            </div>
                                            <div className='w-full flex justify-end max-w-[500px]'>
                                                <button className=' py-[4px] px-6 rounded-[10px] text-[14px] active:bg-[#d6d6d6] active:scale-[0.91]'>Add more</button>
                                            </div>
                                        </div>
                                        <div className='w-full flex flex-col gap-2 justify-end'>
                                            <div className='w-full flex justify-end gap-4'>
                                                <input type="file" name="files" id="files" className="inputfile" />
                                                <label htmlFor="files">Add Image</label>
                                                <button className='bg-[#3EDCFF] text-white px-6 py-[5px] shadow-md rounded-[10px]'>Submit</button>
                                            </div>
                                            <div className='w-full pt-10 flex justify-end'>
                                                <img src={import.meta.env.VITE_APP_BASE_API_LINK + defaultData?.image[0]} className="max-w-[350px]" />
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className='my-1 mt-4 font-[500]'>Variants</h1>
                                    <div className='w-full'>
                                        <div className='grid grid-cols-4 py-4 px-3'>
                                            <div className='text-[14px]'>Size</div>
                                            <div className='text-[14px]'>Weight</div>
                                            <div className='text-[14px]'>Actual Price</div>
                                            <div className='text-[14px]'>Selling Price</div>
                                        </div>
                                        <div className=' max-h-[230px] overflow-y-scroll'>
                                            {
                                                defaultData?.variants?.filter((filter_data, filter_index) => {
                                                    // console.log('filter_data?.diamond_quality:' , filter_data?.diamond_quality)
                                                    // console.log('selectedDiamondQuality:' , selectedDiamondQuality)
                                                    if (selectedDiamondQuality === null) {
                                                        return filter_data
                                                    } else if (filter_data?.diamond_quality === selectedDiamondQuality) {
                                                        return filter_data
                                                    }
                                                })?.map((data, i) => {
                                                    return (
                                                        <div key={i} className='px-2 mb-6'>
                                                            {data?.diamond_quality === selectedDiamondQuality ? 'true' : 'false'}
                                                            {
                                                                data?.sub_variants_data?.map((sub_variants_data, sub_variants_index) => {
                                                                    return (
                                                                        <div className='w-full grid grid-cols-4 px-3 py-1' key={sub_variants_index}>
                                                                            
                                                                            {
                                                                                sub_variants_data?.map((single_sub_variant, single_sub_variant_index) => {
                                                                                    return (
                                                                                        <div key={single_sub_variant_index}>
                                                                                            
                                                                                            <input type="text" id={single_sub_variant?.id} onChange={(e) => {
                                                                                                setDefaultData({
                                                                                                    ...defaultData,
                                                                                                    variants: defaultData?.variants?.map((variantsData, variantsIndex) => {
                                                                                                        return {
                                                                                                            ...variantsData,
                                                                                                            sub_variants_data: variantsData?.sub_variants_data?.map((sub_data, sub_index) => {
                                                                                                               sub_data?.map((sub_sub_data, sub_sub_index) => {
                                                                                                                sub_sub_data?.map((sub_sub_sub_data, sub_sub_sub_index) => {
                                                                                                                    return {
                                                                                                                        ...sub_sub_sub_data,
                                                                                                                        title: e.target.value
                                                                                                                    }
                                                                                                                })
                                                                                                               })
                                                                                                            })
                                                                                                        }
                                                                                                        
                                                                                                    })
                                                                                                })
                                                                                            }} value={single_sub_variant?.value} placeholder={single_sub_variant?.title} className='py-[4px] pl-[8px] rounded-[10px] shadow-md outline-none' />
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-end pr-16'>
                                        <button className=' py-[4px] px-6 rounded-[10px] text-[14px] active:bg-[#d6d6d6] active:scale-[0.91]'>Add more</button>
                                    </div>
                                    {/* <div className='w-full my-2'>
                                        <input type="file" name="files" id="files" className="inputfile" />
                                        <label htmlFor="files">Add Image</label>
                                    </div> */}

                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                {/* mani flex - 2 */}
                <div className='w-full flex justify-center items-center pt-10 relative'>
                    {/* <div className='flex items-center gap-3'>
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AdmitEditSingleProduct






{/* <div className='w-full grid grid-cols-4 px-3 py-1' key={size_index}>
<div className='text-[15px]'>
    <input type="text" className='outline-none p-1 pl-3 shadow-md rounded-[10px] ' defaultValue={size_data} onClick={() => {
        setActiveIndex(size_index)
        setActiveKey('size')
    }} 
    onChange={(e) => {
        setDefaultData({
            ...defaultData,
            variants: defaultData?.variants?.map((data, index) => {
              
                data?.size?.map((size_specific_data, size_specific_index) => {
                    if (size_specific_index === activeIndex) {
                        return 'got chya'
                    }else {
                        return 'size_specific_data'
                    }
                })
            })
        })
    }}
    />
</div>
<div className='text-[15px]'>
    <input type="text" className='outline-none p-1 pl-3 shadow-md rounded-[10px] ' defaultValue={data?.weight[size_index] + ' gms'} onClick={() => setActiveIndex(size_index)} />
</div>
<div className='text-[15px]'>\
    <input type="text" className='outline-none p-1 pl-3 shadow-md rounded-[10px] ' defaultValue={'₹ ' + data?.actual_price[size_index]} onClick={() => setActiveIndex(size_index)} />
</div>
<div className='text-[15px]'>
    <input type="text" className='outline-none p-1 pl-3 shadow-md rounded-[10px] ' defaultValue={'₹ ' + data?.selling_price[size_index]} onClick={() => setActiveIndex(size_index)} />
</div>
</div> */}