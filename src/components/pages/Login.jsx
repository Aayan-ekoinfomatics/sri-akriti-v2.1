import React, { useState } from 'react'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorText, setErrorText] = useState(null);

  const formSubmit = (e) => {
    e.preventDefault()

    const userCredentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (emailRef?.current?.value?.length === 0 || passwordRef?.current?.value?.length === 0) {
      setErrorText('Please fill all fields')
    } else if (emailRef?.current?.value?.length > 5 && passwordRef?.current?.value?.length >= 8) {

      // axios({
      //     method: "post",
      //     url: import.meta.env.VITE_APP_BASE_API_LINK + "login",
      //     data: userCredentials,
      // }).then(function (response) {
      //     localStorage.setItem("status", response?.data?.status);
      //     localStorage.setItem("user_type", response?.data?.data?.user_type);
      //     localStorage.setItem("token", response?.data?.data?.token);
      //     localStorage.setItem("full_name", response?.data?.data?.full_name);
      //     localStorage.setItem("designation", response?.data?.data?.designation);
      //     if (localStorage.getItem("status") === 'true') {
      //         navigate("/");
      //     } else {
      //         setErrorText("Wrong Password")
      //     }
      // }).catch(function (error) {
      //     console.log(error);
      // });
      if (emailRef?.current?.value === 'demo@demo.com' && passwordRef?.current?.value === 'demo1234demo') {
        localStorage.setItem("status", 'true');
        localStorage.setItem("email", 'demo@demo.com');
        localStorage.setItem("password", 'demo1234demo');
      }

      // if (localStorage.getItem('email') !== 'demo@demo.com') {
      //   setErrorText("Wrong Email")
      // } else if (localStorage.getItem('password') !== 'demo1234demo') {
      //   setErrorText("Wrong Password")
      // } else if (localStorage.getItem("status") === 'true') {
      //   navigate("/");
      // } 

      if (localStorage.getItem("status") === 'true') {
        navigate("/");
      } else {
        setErrorText("Wrong Credentials")
      }

    }


  }


  return (
    <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly px-5 mt-16 mb-16 md:mt-[200px] md:mb-[200px] w-[98%] md:w-[90%] mx-auto'>
      <div className='bg-[E3E3E3] md:px-8 flex-1 flex flex-col items-center justify-evenly md:mx-5 md:max-w-[450px] md:max-h-[450px] border-2 bg-[#E3E3E3] lg:py-10'>
        <h1 className='lora md:py-4 text-[24px] md:text-[30px] font-[500] tracking-[1px] italic mt-4' >New Customer</h1>
        <p className='mx-4 py-2 pt-4 text-center poppins font-[300] text-[#696969] text-[12px] md:text-[16   px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur iure voluptatibus impedit consectetur adipisicing elit</p>
        <Link to='/signup'><button className='my-5 bg-black text-white p-3 px-12 text-[14px] poppins tracking-[4px] font-[300]'>SIGN UP</button></Link>
      </div>
      <div className='hidden md:inline-block w-[1px] bg-[black]'>

      </div>
      <form onSubmit={formSubmit} className='bg-[E3E3E3] md:px-8 flex-1 flex flex-col items-center justify-evenly md:mx-5 md:max-w-[450px] md:max-h-[450px] border-2 bg-[#E3E3E3] lg:py-10'>
        <h1 className='lora py-2 text-[30px] font-[500] tracking-[1px] italic' >Login</h1>
        <div className='flex flex-col justify-evenly gap-4 w-[70%]'>
          <input type="email" ref={emailRef} name="" placeholder='Email' className='text-[13px] border-2 pl-2 p-2 outline-none' />
          <input type="password" ref={passwordRef} name="" placeholder='Password' className='text-[13px] border-2 pl-2 p-2 outline-none' />
          {
            <p className='text-[12px] text-red-500'>{errorText}</p>
          }
          <button className='bg-black text-white p-3 px-12 text-[14px] poppins tracking-[4px] font-[300]'>LOGIN</button>
        </div>
      </form>
    </div>
  )
}

export default Login