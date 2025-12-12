import React from 'react'
import { LuBrain } from "react-icons/lu";
import { LiaCubesSolid } from "react-icons/lia";
import { PiSpiralThin } from "react-icons/pi";

const approaches=[
    {
        name:'Red Hat OpenShift',
        desc:'Build & deploy at scale',
        icon:<LiaCubesSolid className='w-[48px] text-sm p-2 h-[48px] rounded-[12px] text-white bg-[linear-gradient(90deg,#EE0000_0%,#CC0000_100%)]'></LiaCubesSolid>
    },
    {
        name:'Red Hat OpenShift',
        desc:'Build & deploy at scale',
        icon:<LuBrain className=' w-[48px] h-[48px] text-sm p-2 rounded-[12px]  text-white  bg-[linear-gradient(90deg,#5373FF_0%,#4060DD_100%)]'></LuBrain>
    }, {
        name:'Red Hat OpenShift',
        desc:'Build & deploy at scale',
        icon:<PiSpiralThin className='w-[48px] h-[48px] text-sm p-2 rounded-[12px] text-sm text-white bg-[linear-gradient(90deg,#EE0000_0%,#5373FF_100%)]'></PiSpiralThin>
    }
]
const Approaches = () => {
  return (
    <div className='w-full bg-white px-[105px] my-[20px]'>
        <h1 className='text-[48px] font-semibold bg-[linear-gradient(90deg,#5373FF_0%,#EE0000_100%)] bg-clip-text text-transparent  text-center py-[10px]'>HawkStack's <span className='text-black'> Approach</span></h1>
        <p className='text-[20px] px-[67px] text-[#4A5565] text-center font-normal'>HawkStack Technologies accelerates digital evolution with DevOps, Cloud, Automation, and Security expertise—driving innovation and faster time-to-market.</p>
        <div className='flex justify-between items-center'>
            {
                approaches.map((item)=>(
                    <div key={item.name} className='p-[33px] w-[381.33px] font-normal h-[218px] border-[2px] border-[#F3F4F6] rounded-[16px] flex flex-col justify-center gap-4 m-4'>
                        {item.icon}
                        <h3 className='text-[20px] text-black'>{item.name}</h3>
                        <p className='text-[14px] text-[#99A1AF]'>{item.desc}</p>
                        </div>
                        ))
            }
        </div>
    </div>
  )
}

export default Approaches