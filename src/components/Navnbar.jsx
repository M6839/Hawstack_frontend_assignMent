import React from 'react'
import hawkstackLogo from '../assests/hawkstack.png'
import redhat from '../assests/redhat.png'
const menu=['Home','HawkStack Approach','Red Hat Sevices','RHCSA Certifications']
const Navnbar = () => {
  return (
    <div className='flex justify-between items-center px-12 py-4'>
        <div className='flex items-center gap-4'>
            <img src={hawkstackLogo} alt="HawkStack Logo" className='w-[114px] h-[30px]'/>
             <img src={redhat} alt="redhat Logo" className='w-[114px] h-[30px]'/>
        </div>
        <div className='flex items-center gap-[32px]'>
            { 
                menu.map((item)=>(
                    <a href='#' key={item} className='text-[12px] font-normal text-[#FFFFFF]'>{item}</a>
                ))
            }
        </div>
        <div className='flex items-center gap-[16px]'>
            <button className='w-[104px] h-[46px] px-[24px] rounded-full border-[1px] border-[#FFFFFF33] py-[9px] text-[#FFFFFF] text-[16px]'>Contact</button>
            <button className='w-[200px] h-[44px] bg-[#5373FF] px-[22px] py-[8px] text-white rounded-full'>Talk to Learning Team</button>
        </div>
    </div>
  )
}

export default Navnbar