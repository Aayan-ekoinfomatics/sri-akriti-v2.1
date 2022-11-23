import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.svg";
import search from "../../assets/icons/search.svg";
import mobile_menu from "../../assets/icons/menu-mobile.svg";
import cross from "../../assets/icons/cross.svg";
import transparent_logo from "../../assets/icons/transparent-logo.png";
import { Link, NavLink } from "react-router-dom";
import nav_data from "../../mockapi/mobileNavData";
import heart from '../../assets/icons/heart-outline.svg'
import SidebarAtom from "../../recoil/atoms/sidebar/SidebarAtom";
import { useRecoilState } from "recoil";

const Navbar = () => {
  const [navToggle, setNavToggle] = useRecoilState(SidebarAtom);

  const [searchItem, setSearchItem] = useState("");
  const [navHoverShow, setNavHoverShow] = useState(null);

  // useEffect(() => {
  //   console.log(searchItem);
  // }, [searchItem]);

  return (
    <div className="relative">
        <header className="w-full md:pt-2 flex justify-end items-end z-[999]">
      {/* desktop menu */}
      <nav className="hidden md:flex justify-evenly pb-0 w-[95%] mx-auto">
        <div className="md:w-[100px] lg:w-[180px] flex justify-center items-center">
          <Link to="/">
            <img src={logo} className="w-[120px]" />
          </Link>
        </div>
        <ul className="flex justify-evenly items-center w-full gill-sans-nav tracking-wider lg:pl-6 font-[300] md:text-sm lg:text-lg xl:text-xl">
          {nav_data?.nav.slice(0, 7)?.map((data, i) => (
            <div className="" key={i} onMouseLeave={() => setNavHoverShow(null)}>
            <NavLink
              to={data?.route}
              onMouseEnter={() => setNavHoverShow(data?.title)} 
              className={({ isActive }) =>
                isActive
                  ? "scale-x-105 transition-all duration-150 font-[500]"
                  : " transition-all duration-150 w-full"
              }
            >
              <li className="cursor-pointer group flex flex-col w-full py-5 pb-14">
                {" "}
                <p>{data?.title}</p>
                <span className={`h-[1px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-black ${navHoverShow === data?.title ? 'max-w-full' : 'max-w-0'}`}></span>
              </li>
            </NavLink>
            {data?.sub && 
              <div onMouseEnter={() => setNavHoverShow(data?.title)}  className={`hidden absolute right-0 left-0 top-[100%] md:flex justify-center items-center w-full transition-all duration-300 overflow-hidden bg-white ${navHoverShow === data?.title ? ' h-[300px] ease-in' : 'h-0 ease-out'} `} >
              <div className="w-[90%] mx-auto flex justify-evenly">
                {
                  data?.sub?.map((datas, index) => (
                    <div className="" key={index}>
                    <h1 className="poppins text-[18px] font-[500] py-2">{datas?.sub_title}</h1>
                    <ul className="poppins text-[12px]">
                        {datas?.sub_content?.map((sub, index_sub) => (
                          <NavLink to={sub?.link_path} key={index_sub} ><li className="py-1">{sub?.link_name}</li></NavLink>
                        ))}
                    </ul>
                    </div>
                  ))
                }
              </div>
            </div>
            }
          
            </div>
          ))}
        </ul>
        <div className="w-[10%] gap-4 lg:gap-8 hidden md:flex justify-end md:justify-start items-center pb-10">
          <NavLink to='/wishlist'><img src={heart} className=" w-[25px]" /></NavLink>
          <NavLink to='/cart' ><img src={cart} className=" w-[25px]" /></NavLink>
          <img src={search} className=" w-[25px]" />
        </div>
      </nav>
      

      {/* mobile menu */}
      <div className="sticky w-full flex flex-col items-center mb-4 md:hidden">
        <div className="sticky top-0 bg-white z-[999] flex w-[95%] justify-between items-center pt-2">
          <div className="flex-1"></div>
          <div className="flex-1">
            <Link to="/">
              <img src={logo} className="w-[100px] mx-auto" />
            </Link>
          </div>
          <div className="flex-1 flex md:hidden justify-end gap-4 sm:gap-8 pr-2">
            <img src={cart} className="w-[27px] mr-12" />
            {/* <img src={!navToggle ? mobile_menu : cross } className="w-[27px] fixed z-[9990] " onClick={() => setNavToggle(!navToggle)} /> */}
          </div>
        </div>
        <div className="sticky top-[73px] bg-white z-[999] border mt-5 flex w-[93%] p-2 border-[#696969] mx-auto ">
          <input
            type="text"
            className="w-full outline-none"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <img src={search} className="w-[35px] p-1" />
        </div>
        {/* <div className="w-[93%] mt-3" >
          <ul className="flex justify-between">
            <li className="underline underline-offset-4 underline-[#696969]  decoration-[#69696985] u p-2 text-gray-500" >NECKLESS</li>
            <li className="underline underline-offset-4 underline-[#696969]  decoration-[#69696985] u p-2 text-gray-500" >BRACELETS</li>
            <li className="underline underline-offset-4 underline-[#696969]  decoration-[#69696985] u p-2 text-gray-500" >RINGS</li>
            <li className="underline underline-offset-4 underline-[#696969]  decoration-[#69696985] u p-2 text-gray-500" >EARINGS</li>
          </ul>
        </div>
        <div className="w-[93%] mt-4 flex justify-between">
          <div className="flex flex-col justify-center px-2 pt-2 lora font-[16px] text-[#696969]">
            <p>We Design</p>
            <p>We create and</p>
            <p>We turn your story into reality</p>
          </div>
          <div><img src={transparent_logo} className="" /></div>
        </div> */}
      </div>
    </header>

    </div>
  );
};

export default Navbar;
