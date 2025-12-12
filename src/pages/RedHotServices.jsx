import React from 'react'
import { LuBrain } from "react-icons/lu";
import { HiOutlineCube } from "react-icons/hi2";
const services=[
    {
        name:'Red Hat OpenShift',
        desc:'Build & deploy at scale',
        icon:<HiOutlineCube className='w-[48px] text-sm p-2 h-[48px] rounded-[12px] text-white bg-[linear-gradient(90deg,#EE0000_0%,#CC0000_100%)]'></HiOutlineCube>
    },
    {
        name:'Red Hat OpenShift',
        desc:'Build & deploy at scale',
        icon:<LuBrain className=' w-[48px] h-[48px] text-sm p-2 rounded-[12px]  text-white  bg-[linear-gradient(90deg,#5373FF_0%,#4060DD_100%)]'></LuBrain>
    }
    , {
        name:'Red Hat OpenShift',
        desc:'Build & deploy at scale',
        icon:<HiOutlineCube className='w-[48px] h-[48px] text-sm p-2 rounded-[12px]  text-white  bg-[linear-gradient(90deg,#468966_0%,#357755_100%)]'></HiOutlineCube>
    },
    {
        name:'Red Hat OpenShift',
        desc:'Build & deploy at scale',
        icon:<LuBrain className='w-[48px] h-[48px] text-sm p-2 rounded-[12px] text-sm text-white bg-[linear-gradient(90deg,#EE0000_0%,#5373FF_100%)]'></LuBrain>
    }
]
const RedHotServices = () => {
  return (
    <div className='w-full  px-[80px] py-[20px] bg-black bg-[radial-gradient(400px_at_30%_60%,rgba(120,20,20,0.32),transparent_60%),radial-gradient(400px_at_60%_20%,rgba(20,40,120,0.35),transparent_70%)] '>
        <h1 className='text-[48px] text-[#FFFFFF] font-normal text-center py-[10px]'>Explore Red Hat Services</h1>
        <div className='flex justify-between items-center'>
            {
                services.map((item)=>(
                    <div key={item.name} className='p-[33px] w-[290px] font-normal h-[240px] border-[1px] border-[#FFFFFF1A] rounded-[16px] flex flex-col bg-white/10 backdrop-blur-md justify-center gap-4 m-4'>
                        {item.icon}
                        <h3 className='text-[20px] text-white'>{item.name}</h3>
                        <p className='text-[14px] text-[#99A1AF]'>{item.desc}</p>

                        </div>
                        ))
            }
        </div>
    </div>
  )
}

export default RedHotServices