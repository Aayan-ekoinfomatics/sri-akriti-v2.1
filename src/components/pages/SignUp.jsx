import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/icons/dropdown-arrow.svg'
import country_names from '../../mockapi/countrySelectorApi'

const SignUp = () => {

    const [countryDropdown, setCountryDropdown] = useState(false);

    const genderRef = useRef();
    const nameRef = useRef();
    const numberRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const termsandConditionsRef = useRef();
    
    let formdata = new FormData();

    const signUp = (e) => {

        e.preventDefault();
        // formdata.append("id", data?.id);
        formdata.append("email", emailRef?.current?.value);
        formdata.append("name", nameRef?.current?.value);
        formdata.append("number", numberRef?.current?.value);
        formdata.append("password", passwordRef?.current?.value);
        formdata.append("password", passwordRef?.current?.value);
        formdata.append("gender", genderRef?.current?.value);
        formdata.append("terms&conditions", termsandConditionsRef?.current?.value);
        // axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'signUp' ,formdata).then((response) => setCategoryApiData(response?.data));

    }

    window.addEventListener("click", (event) => {
        const dropdown = document?.getElementById("dropdown");
    
        if (dropdown) {
          if (!dropdown?.contains(event?.target)) {
            setCountryDropdown(false);
          }
        }
    });

    useEffect(() => {
        console.log(formdata)
    }, [formdata])
    


  return (
    <div className='w-full bg-[#ffffff] pb-10'>
        <div className='w-[90%] mx-auto flex justify-center items-center lora italic text-[24px] font-[400] py-10 mb-10 '>
        <h1>New Customer</h1>
        </div>
        <form onSubmit={() => signUp} className='w-[85%] max-w-[600px] mx-auto mb-10'>
            <div className='flex justify-between md:px-10'>
                <div className='flex items-center'>
                    <input type="radio" ref={genderRef} className='pr-7 bg-[#e3e3e3]' name="Male" />
                    <label htmlFor="input" className='pl-5 poppins text-[12px] md:text-[14px] tracking-[2px]'>Male</label>
                </div>
                <div className='flex items-center'>
                    <input type="radio" ref={genderRef} className='pr-7 bg-[#e3e3e3]' name="Female" />
                    <label htmlFor="input" className='pl-6 poppins text-[12px] md:text-[14px] tracking-[2px]'>Female</label>
                </div>
            </div>
            <div className='py-2 w-full flex flex-col relative'>
                <input type="text" ref={nameRef} placeholder='Name' className='my-2 poppins tracking-[2px] text-[13px] md:text-[15px] px-3 py-2 md:p-4 font-[300] bg-[#e3e3e3]' name="name" />
                <input type="text" ref={emailRef} placeholder='Email ID' className='my-2 poppins tracking-[2px] text-[13px] md:text-[15px] px-3 py-2 md:p-4 font-[300] bg-[#e3e3e3]' name="email" />
                <div id='dropdown' className='flex justify-between py-2 gap-4'>
                    <div className='bg-[#e3e3e3] w-[3.5rem] md:w-[4rem] flex justify-between gap-1 items-center px-1 md:px-2 cursor-pointer' onClick={() => setCountryDropdown(!countryDropdown)}>
                        <div className='poppins text-[14px] flex-1 min-w-[28px] pl-1'>IN</div>
                        <div className='w-full flex justify-center items-center'><img src={arrow} className="w-[13px]" /></div>
                    </div>
                    <input type="number" min={0} ref={numberRef} placeholder='Moblile Number' className=' poppins tracking-[2px] text-[13px] md:text-[15px] px-3 py-2 md:p-4 font-[300] flex-1 bg-[#e3e3e3]' name="number" />
                </div>
                <div className={`bg-[#f0f0f0e0] w-[80px] max-w-[120px] max-h-[180px] md:max-h-[200px] absolute translate-y-[150px] md:translate-y-[210px] left-0 flex flex-col justify-start items-center transition-all duration-400 md:duration-500 cursor-pointer ${ countryDropdown ? ' h-[200px] ease-in overflow-y-scroll py-2 px-1' : 'h-0 ease-out overflow-hidden' }`} >
                    {
                        country_names?.map((data, i) => (
                            <button key={i} className='py-1 text-[14px] w-full hover:bg-[white]' >{data}</button>
                        ))
                    }
                </div>
                <input type="password" ref={passwordRef} placeholder='Create Password' className='my-2 poppins tracking-[2px] text-[13px] md:text-[15px] px-3 py-2 md:p-4 font-[300] bg-[#e3e3e3]' name="password" />
                <input type="password" ref={confirmPasswordRef} placeholder='Confirm Password' className='my-2 poppins tracking-[2px] text-[13px] md:text-[15px] px-3 py-2 md:p-4 font-[300] bg-[#e3e3e3]' name="confirm password" />
            </div>
            <div className='w-full md:w-[80%] md:mx-auto flex justify-between sm:justify-start items-center gap-3 pl-1'>
                <input type="checkbox" name="terms & conditions" ref={termsandConditionsRef} />
                <h1 className='poppins text-[10px]'>By Signing up to create an account I accept SriAatriti's Terms & Conditions & Privacy Policy</h1>
            </div>
            <div className='w-full flex justify-center items-center py-5'>
                <button className='bg-black text-white poppins text-[13px] md:text-[16px] py-4 px-16 font-[300] tracking-[3px] w-full sm:w-auto'>SIGN UP</button>
            </div>
        <div className='w-full flex justify-center items-center my-4 tracking-[2px] lora font-[400]'>
            <h1>Already a user ? <Link to='/login' className='underline'>Login</Link></h1>
        </div>
        </form> 
    </div>
  )
}

export default SignUp