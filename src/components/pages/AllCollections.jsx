import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import search from "../../assets/icons/search.svg";
import collection_data from "../../mockapi/apiData.js";
import sort_data from "../../mockapi/allCollectionSortData.js";
import heart_outline from "../../assets/icons/heart-outline.svg";
import down_arrow from "../../assets/icons/Arrow-sort.svg";
import up_arrow from "../../assets/icons/up-arrow.svg";
import filter from "../../assets/icons/filter.svg";

const AllCollections = () => {
  const [searchItem, setSearchItem] = useState("");

  const [sortToggle, setSortToggle] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);

  const [filterSubCategory, setFilterSubCategory] = useState(null);

  window.addEventListener("click", (event) => {
    const sort = document?.getElementById("sort");

    if (sort) {
      if (!sort?.contains(event?.target)) {
        setSortToggle(false);
      }
    }
  });

  const handleClick = () => {
    setFilterToggle(false);
    filterSubCategory(null);
  };

  return (
    <div className="">
      <div className="">
        <div className="w-full pb-[100px]">
          <h1 className="text-center text-[30px] md:text-[3.438rem] lora font-semibold py-8 pt-16">
            ALL COLLECTIONS
          </h1>
          <div className="w-full hidden md:block md:w-[43%] lg:w-[33%] mx-auto pt-10 pb-20">
            <div className=" border mt-5 flex w-[90%]  border-[#69696959] mx-auto ">
              <input
                type="text"
                className="w-full outline-none px-5 py-4 text-[15px] lg:text-[1.25rem] font-[300] poppins tracking-[2px] bg-[#b0b0b00a]"
                placeholder="Seach your type of Platinum"
                onChange={(e) => setSearchItem(e.target.value)}
                value={searchItem}
              />
              <img src={search} className="w-[35px] px-1" />
            </div>
          </div>

          {/* filter mobile */}
          <div
            className={`w-full sm:w-[80%] mx-auto px-2 sm:px-6 text-[#696969] text-[18px] sm:text-[20px] poppins lg:hidden flex justify-between`}
          >
            {/* sort */}
            <div
              className={`border border-[#69696996] flex flex-col tracking-[4px] sm:tracking-[6px] p-2 sm:p-4 over cursor-pointer ${
                sortToggle ? "bg-white" : "bg-[#b0b0b00a]"
              }`}
              id="sort"
            >
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    onClick={() => setSortToggle(!sortToggle)}
                    className="inline-flex w-full justify-center items-center gap-6"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    SORT
                    <span>
                      <img src={down_arrow} className="w-[75%] sm:w-full" />
                    </span>
                  </button>
                </div>

                {sortToggle ? (
                  <>
                    <div
                      className="absolute left-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="py-1" role="none">
                        {sort_data?.sort?.map((data, i) => (
                          <a
                            key={i}
                            className="text-gray-700 w-[80%] my-2 bg-white mx-auto hover:bg-blue-200 flex justify-between items-center tracking-[2px] poppins px-4 py-2 text-sm active:scale-[1.1] transition-all"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                            // onClick={() => console.log(data.name)}
                          >
                            {data?.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* filter */}
            <div
              id="filter"
              className={`border cursor-pointer border-[#69696996] flex justify-between gap-5 items-center tracking-[4px] sm:tracking-[6px] p-2 sm:p-4 over ${
                filterToggle ? "bg-white" : "bg-[#b0b0b00a]"
              }`}
              onClick={() => setFilterToggle(!filterToggle)}
            >
              <span>
                <img src={filter} className="w-[80%]" />
              </span>
              FILTER
            </div>
          </div>

          {/* mobile filter pop up */}

          {/* overlay */}
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000071] z-[1004] transition-all ${
              filterToggle
                ? "h-full ease-in  duration-500"
                : "h-0 ease-out  duration-500"
            }`}
            onClick={() => handleClick()}
          ></div>

          {/* pop up */}
          <div
            className={`fixed lg:hidden flex flex-col justify-end bottom-0 overflow-scroll w-full bg-white z-[1005] transition-all duration-500 ${
              filterToggle ? "h-fit ease-in overflow-scroll" : "h-0 ease-out"
            }`}
          >
            <h1 className="text-center py-4 pt-5 tracking-[6px] text-[#00000088] poppins text-[20px]">
              FILTERS
            </h1>
            {sort_data?.filter.map((datas, index) => (
              <React.Fragment key={index}>
                <div
                  className="flex justify-between list-none py-4 tracking-[3px] text-[#00000088] poppins mx-auto w-[90%]"
                  key={index}
                  onClick={() => {
                    if (filterSubCategory === datas?.name) {
                      setFilterSubCategory(null);
                    } else {
                      setFilterSubCategory(datas?.name);
                    }
                  }}
                >
                  <button>{datas?.name}</button>
                  <li className="flex gap-4 justify-between items-center">
                    {" "}
                    <span>
                      <img
                        src={
                          filterSubCategory === datas?.name
                            ? up_arrow
                            : down_arrow
                        }
                        className="w-[19px] cursor-pointer"
                      />
                    </span>{" "}
                    <p className="w-[20px] text-left">{datas?.total_number}</p>
                  </li>
                </div>
                <div
                  className={`w-full overflow-hidden pl-2 bg-[#69696911] ${
                    filterSubCategory === datas?.name
                      ? "max-h-[200px] overflow-y-scroll transition-all duration-500 ease-in py-2"
                      : "max-h-0 transition-all duration-500 ease-out"
                  } flex  flex-col justify-center items-start`}
                >
                  {datas?.sub_filter.map((sub_data, sub_index) => (
                    <ul
                      className="py-2 cursor-pointer pl-4 poppins text-[15px] tracking-[2px] text-[#00000088]"
                      key={sub_index}
                    >
                      {" "}
                      <input type="checkbox" className="" name="" id="" />{" "}
                      {sub_data}
                    </ul>
                  ))}
                </div>
              </React.Fragment>
            ))}
            <div className="flex justify-evenly w-full bg-[#b0b0b03f] py-[40px] ">
              <button className="border-2 p-4 bg-white tracking-[2px] px-6 text-[14px] ">
                CLEAR ALL
              </button>
              <button className="border-2 p-4 bg-[#3EDCFF] tracking-[2px] px-6 text-[14px] ">
                APPLY FILTER
              </button>
            </div>
          </div>

          <div className="flex self-start w-full md:w-[95%] gap-5 mx-auto mt-16 pt-5 h-full">
            {/* filter desktop*/}
            <div className="sticky top-0 w-[20%] hidden lg:flex flex-col">
              {collection_data?.filters?.map((data, i) => (
                <div
                  key={i}
                  className="py-6"
                  style={{
                    borderBottom:
                      collection_data?.filters.length === i + 1
                        ? ""
                        : "1px solid #C0C0C0",
                  }}
                >
                  <h1 className="py-4 poppins text-[1.563rem] tracking-[2px] text-[#000000f3]">
                    {data?.title}
                  </h1>
                  <div>
                    {data?.checkbox?.map((datas, index) => (
                      <div key={index} className="py-2 flex gap-4">
                        <input type="checkbox" value={datas} name={datas} />
                        <label
                          htmlFor={datas}
                          className="text-[1rem] tracking-[1px] poppins font-[300]"
                        >
                          {datas}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* products */}
            <div className="flex-1 grid gap-[8px] md:gap-4 grid-cols-2 lg:grid-cols-3 p-2">
              {collection_data?.products?.map((data, i) => (
                <div className="relative" key={i}>
                  <div className=" absolute top-0 right-0">
                    <img src={heart_outline} className="w-[25px] mt-4 mr-5" />
                  </div>
                  <div className="">
                    <div>
                      <img src={data?.image} alt="" />
                    </div>
                    <button className="bg-[#3EDCFF] w-full p-2 md:p-3 text-[16px] md:text-[1.5rem] text-white tracking-[1px] md:tracking-[3px]">
                      ADD TO CART
                    </button>
                    <p className="font-[500] poppins text-[0.95rem] md:text-[1.438rem] tracking-[2px] pl-1">
                      ₹{data?.price}
                    </p>
                    <p className="font-[300] poppins text-[0.9rem] md:text-[1.438rem] tracking-[1.4px] pl-1">
                      {data?.product_name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
