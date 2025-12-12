import React from 'react'
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
const testimonal=[
  {
    id:1,
    name:"John Doe",
    company:"Company A",
    feedback:"HawkStack has transformed our business operations. The efficiency and reliability of their solutions are unmatched.",
    position:"CEO, Company A",
    color:"bg-[#EE0000]",
    gradient:'bg-[radial-gradient(200px_at_90%_10%,rgba(120,20,20,0.32),transparent_70%)] '
  },
  {
    id:2,
    name:"John Doe",
    company:"Company B",
    feedback:"HawkStack has transformed our business operations. The efficiency and reliability of their solutions are unmatched.",
    position:"CEO, Company A",
    color:'bg-[#5373FF]',
    gradient:'bg-[radial-gradient(150px_at_90%_10%,rgba(20,40,120,0.35),transparent_70%)]'
  }
]
const Testimonal = () => {
  return (
    <div className=' bg-[radial-gradient(500px_at_20%_80%,rgba(20,40,120,0.35),transparent_70%),radial-gradient(500px_at_80%_20%,rgba(120,20,20,0.32),transparent_70%)] min-h-screen w-full flex flex-col items-center space-y-4 py-16  bg-black font-poppins 
min-h-screen'>
  <div className='flex flex-col items-center gap-2 mb-10'>
        <button className='text-[16px] text-white bg-[linear-gradient(90deg,#EE000033_0%,#5373FF33_100%)] border-[1px] border-[#FFFFFF1A] rounded-full  w-[209px] h-[50px]'>Client Success Stories</button>
        <h1 className='text-[#FFFFFF] text-[72px] text-center font-[400]'>Client Testimonials</h1>
        <p className='text-[#99A1AF] text-[28px] text-center font-[400]'>Real results from enterprise leaders who trust HawkStack</p>
        </div>
        <section className='my-10'>
          <div className='grid grid-cols-2 space-x-[32px]'>
          {
            testimonal.map((item)=>(
            
              <div key={item.id} className={`font-normal font-poppins border-[1px] border-[#FFFFFF1A] rounded-[20px] w-[600px] h-[483px] mt-10 p-10  flex flex-col justify-between bg-white/10 backdrop-blur-sm ${item.gradient}`}>
               <div className={`text-white ${item.color} p-4 rounded-[10px] text-xl w-[48px]`}> <RiDoubleQuotesR /></div>
              <div className='flex gap-2'> {[...Array(5)].map((_,index)=>(
                <FaStar key={index} className='w-[20px] h-[20px] text-[#EE0000]'/>
               ))}</div>
                <p className='text-[#FFFFFF] text-[24px] font-[400]'>"{item.feedback}"</p>
                <div className='flex  justify-between items-center'>
                  <div className='flex flex-col gap-2'>
                <p className={`text-[14px]  ${item.color} text-white rounded-[10px] p-2`}>{item.company}</p>
                <h3 className='text-[16px] text-white'>{item.position}</h3>
                <p className='text-[14px] text-[#6A7282]'>{item.name}</p>
                </div>
                <span className={`${item.color} w-[5px] h-[5px] rounded-full`}></span>
                </div>
                </div>
        ) )}
        </div>
        </section>
        <div className='w-[896px] h-[290px] rounded-[24px] border-[1px] border-[#FFFFFF33] flex flex-col items-center justify-center space-y-4  bg-[linear-gradient(90deg,#EE00001A_0%,#5373FF1A_50%,#4689661A_100%)]'>
          <h1 className='text-[36px] text-white font-normal'>Ready to transform your infrastructure?</h1>
          <p className='text-[20px] text-[#99A1AF] font-normal'>Join the ranks of successful enterprises powered by HawkStack</p>
          <button className='flex items-center gap-2 justify-center text-[20px] text-white w-[374.58px] h-[76px] font-normal rounded-[16px] bg-[linear-gradient(90deg,#EE0000_0%,#5373FF_100%)]'>Get Started with HawkStack <GoArrowRight /></button>
        </div>
        <p className='text-[14px] text-[#6A7282] font-normal py-4'>Trusted by Fortune 500 companies worldwide</p>
    </div>
  )
}

export default Testimonal