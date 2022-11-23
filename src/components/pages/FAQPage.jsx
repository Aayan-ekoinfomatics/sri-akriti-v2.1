import React from 'react'
import { useState } from 'react'
import faq_page from '../../mockapi/faqPageApi';

const FAQPage = () => {

    const [ faqToggle, setFaqToggle ] = useState(null);


  return (
    <div className='w-full my-2 md:my-5 mb-10'>
        <div className='w-[90%] md:w-[80%] mx-auto'>
        <h1 className='lora text-[30px] tracking-[0.5px] font-[500] pb-1'>FAQs</h1>
        <h1 className='poppins tracking-[1px] text-[13px] pt-1 pb-5 mb-4'>Frequently Asked Questions</h1>
            {
                faq_page?.section_data?.map((data, i) => (
                    <div className='py-4 my-2' key={i}>
                        <h1 className='poppins border-b pb-5 mb-2 border-b-[#69696954] text-[18px] tracking-[1px]' >{data?.title}</h1>
                        {
                            data?.question_data?.map((question, index) => (
                                <div className='' key={index}>
                                    <h1 onClick={() => {
                                        if( faqToggle === question?.question) {
                                            setFaqToggle(null);
                                        }else {
                                            setFaqToggle(question?.question)
                                        }
                                        }}
                                        className='poppins text-[12px] tracking-[1px] p-2 cursor-pointer'
                                        > - {question?.question}</h1>
                                    <div className={`bg-transparent flex justify-center items-center text-left pl-3 mb-2 transition-all duration-300 overflow-y-scroll ${faqToggle === question?.question ? 'h-[100px] ease-in' : 'h-0 ease-out border-none'}`}>
                                        <h1 className='poppins text-[10px] tracking-[1px]'>{question?.answer}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
            <div className='w-[90%] mx-auto p-4 text-[13px] md:text-[17px] bg-[#D9D9D9] flex justify-between items-center'>
                <h1 className='lora' >Didn't find what you were looking for? Contact us.</h1>
                <button className='poppins bg-[#41B2EC] flex justify-center items-center py-2 px-4 md:py-3 md:px-6' >Contact</button>
            </div>
    </div>
  )
}

export default FAQPage