import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly px-5 mt-16 mb-16 md:mt-[200px] md:mb-[200px] w-[98%] md:w-[90%] mx-auto'>
        <div className='bg-[E3E3E3] md:px-8 flex-1 flex flex-col items-center justify-evenly md:mx-5 md:max-w-[450px] md:max-h-[450px] border-2 bg-[#E3E3E3] lg:py-10'>
           <h1 className='lora md:py-4 text-[24px] md:text-[30px] font-[500] tracking-[1px] italic mt-4' >New Customer</h1>
           <p className='mx-4 py-2 pt-4 text-center poppins font-[300] text-[#696969] text-[12px] md:text-[16   px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur iure voluptatibus impedit consectetur adipisicing elit</p>
           <Link to='/signup'><button className='my-5 bg-black text-white p-3 px-12 text-[14px] poppins tracking-[4px] font-[300]'>SIGN UP</button></Link>
        </div>
        <div className='hidden md:inline-block w-[1px] bg-[black]'>

        </div>
        <div className='bg-[E3E3E3] md:px-8 flex-1 flex flex-col items-center justify-evenly md:mx-5 md:max-w-[450px] md:max-h-[450px] border-2 bg-[#E3E3E3] lg:py-10'>
           <h1 className='lora py-2 text-[30px] font-[500] tracking-[1px] italic' >Login</h1>
           <div className='flex flex-col justify-evenly'>
            <input type="text" name="" placeholder='Email' id="" className='border-2 mb-3 pl-2 py-1' />
            <input type="text" name="" placeholder='Password' id="" className='border-2 mt-3 pl-2 py-1' />
            <button className='my-5 bg-black text-white p-3 px-12 text-[14px] poppins tracking-[4px] font-[300]'>LOGIN</button>
           </div>
        </div>
    </div>
  )
}

export default Login