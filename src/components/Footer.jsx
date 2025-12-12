import React from 'react'
import logo from '../assests/logo.png'
const productItems=['Features','pricing','Documentations','API Reference']
const companyItems=['About Us','Careers','Blog','Contact']
const legalItems=['Privacy Policy','Terms of Service','Security','Compiliance']
import { LuLinkedin } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
const Footer = () => {
  return (
    <div className='bg-black px-[80px] py-[40px]'> 
        <section className='font-poppins grid grid-cols-4 gap-[24px] mb-[20px] border-t-[0.89px] border-[#FFFFFF1A] pt-4'>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2 '>
                <img src={logo} alt="HawkStack Logo" className='w-[38px] h-[38px] bg-[#5373FF] p-2 rounded-[10px]'/>
                <h1 className='text-white text-[24px] leading-none'>HawkStack</h1>
                </div>
                <p className=' text-[14px] text-[#FFFFFF99] font-normal'>Enterprise AI & Cloud Security Solutions for modern businesses</p>
            </div>
            <div>
                <h1 className='text-[14px] text-white font-normal mb-2'>Product</h1>
                {
                    productItems.map((item)=>(
                        <p key={item} className='text-[14px] text-[#FFFFFF99] font-normal mb-2'>{item}</p>
                    ))

                }
            </div>
            <div>
                <h1 className='text-[14px] text-white font-normal mb-2'>Company</h1>
                {
                    companyItems.map((item)=>(
                        <p key={item} className='text-[14px] text-[#FFFFFF99] font-normal mb-2'>{item}</p>
                    ))

                }
            </div>
            <div>
                <h1 className='text-[14px] text-white font-normal mb-2'>Legal</h1>
                {
                    legalItems.map((item)=>(
                        <p key={item} className='text-[14px] text-[#FFFFFF99] font-normal mb-2'>{item}</p>
                    ))

                }
            </div>

        </section>
        <div className='flex justify-between border-t-[0.89px] border-[#FFFFFF1A] pt-4 px-[10px]'>
            <p className='text-[14px]  font-normal text-[#FFFFFF80] '>© 2024 HawkStack × RedHat. All rights reserved.</p>
            <div className='flex gap-4 items-center'>
                <LuLinkedin className='w-[16px] h-[16px] text-[#5373FF] cursor-pointer'/>
                <FiTwitter className='w-[16px] h-[16px]  text-[#5373FF] cursor-pointer'/>
                <VscGithubAlt className='w-[16px] h-[16px] text-[#5373FF] cursor-pointer'/>
            </div>

        </div>

    </div>
  )
}

export default Footer