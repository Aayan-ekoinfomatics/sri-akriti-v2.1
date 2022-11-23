import React, { useState } from "react";
import { useRecoilState } from "recoil";
import SidebarAtom from "../../recoil/atoms/sidebar/SidebarAtom";
import arrow_left from "../../assets/icons/Arrow-left-nav.svg";
import home from "../../assets/icons/home-temp.svg";
import { Link } from "react-router-dom";
import nav_data from "../../mockapi/mobileNavData";
import up_arrow from "../../assets/icons/up-arrow.svg";
import down_arrow from "../../assets/icons/Arrow-sort.svg";

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useRecoilState(SidebarAtom);
  const [navListToggle, setNavListToggle] = useState(null);
  const [navSubListToggle, setNavSubListToggle] = useState(null);

  return (
    <div
      className={`h-screen bg-white transition-all overflow-y-scroll duration-300 max-w-[70vw] fixed z-[1000] right-0 pt-32 ${
        sidebarToggle ? "w-[100%] ease-in" : "w-0 ease-out bg-[#69696913]"
      }`}
    >
      {/* <div className='w-full -translate-y-[75px] pl-5'>
        <Link to='/' ><img src={home} className='w-[40px]' alt="" /></Link>
      </div> */}
      {/* <div className="w-full h-[10px]"></div> */}
      <div className="w-full">
        <ul className="w-full">
          {nav_data?.nav?.map((data, i) => (
            <div key={i}>
              <div 
                // to={data?.route}
                
              >
                <li className="poppins text-[#696969d5] border-b border-b-[#696969d5] mx-auto w-[87%] font-[300] flex justify-between items-center py-[13px] text-[18px] tracking-[1px]">
                  {" "}
                  <span className=" pr-3" onClick={() => {
                  if (navListToggle === data?.title) {
                    setNavListToggle(null);
                  } else {
                    setNavListToggle(data?.title);
                  }
                }}>
                    <img
                      src={
                        navListToggle === data?.title ? down_arrow : arrow_left
                      }
                      className=""
                      alt=""
                    />
                  </span>{" "}
                  <Link to={data?.route} className="pl-3" onClick={() => setSidebarToggle(false)}>{data?.title}</Link>
                </li>
              </div>
              <div
                className={`transition-all duration-500 ${
                  navListToggle === data?.title ? "max-h-[250px] overflow-y-scroll h-full ease-in" : "max-h-0 h-0 ease-out p-0 overflow-y-hidden"
                }`}
              >
                {data?.sub?.map((datas, index) => (
                  <React.Fragment key={index}>
                  <ul className="text-right py-2 poppins tracking-[2px] text-[#696969d5] w-[90%] mx-auto"
                  >
                    <li className="w-full flex justify-between items-center py-1 font-[300] text-[13px]">
                      {" "}
                      <span className="ml-5" onClick={() => {
                        if (navSubListToggle === datas?.sub_title) {
                          setNavSubListToggle(null);
                        } else {
                          setNavSubListToggle(datas?.sub_title);
                        }
                      }}>
                        <img src={ navSubListToggle === datas?.sub_title ? down_arrow : arrow_left} className="" alt=""/>
                      </span>{" "}
                      {datas?.sub_title}
                    </li>
                  </ul>
                  {}
                  <div className={`transition-all duration-300 ${navSubListToggle === datas?.sub_title ? 'max-h-[145px] ease-in' : 'max-h-0 overflow-y-hidden ease-out'}`}>
                    <ul>
                      {
                        datas?.sub_content?.map((data, sub_index) => (
                          <li key={sub_index} className="poppins text-[12px] text-right py-1 pr-3">{data?.link_name}</li>
                        ))
                      }
                    </ul>
                  </div>
                    </React.Fragment>
                      ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
