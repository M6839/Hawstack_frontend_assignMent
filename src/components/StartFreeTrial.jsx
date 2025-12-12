import React from 'react'

const StartFreeTrial = () => {
  return (
    <div className='bg-black flex flex-col items-center justify-center font-poppins px-[105px] py-[40px]'>
        <button className='w-[202px] h-[45px] border-[0.89px] border-[#5373FF4D] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] rounded-full bg-[linear-gradient(90deg,#5373FF_0%,#EE0000_100%)] bg-clip-text text-transparent'>Ready to Get Started?</button>
        <h1 className='text-[60px] text-white text-center font-semibold'>Secure Your Cloud Infrastructure </h1>
        <h1 className='text-[60px]  text-center font-semibold bg-[linear-gradient(90deg,#5373FF_0%,#EE0000_100%)] bg-clip-text text-transparent'> Today</h1>
        <p className='text-[#FFFFFFB2] text-[20px] fonty-normal'>Join industry leaders in building secure, AI-powered cloud infrastructure</p>
        <div className='flex items-center gap-4 mt-4'>
            <button className='bg-[linear-gradient(90deg,#5373FF_0%,#3D5AE6_100%)] text-white shadow-[0px_20px_50px_0px_#5373FF80] rounded-[14px] px-[40px] py-[20px] w-[243px] h-[68px]'>Start Free Trial</button>
            <button className='text-white  rounded-[14px] px-[40px] py-[20px] w-[243px] h-[68px] border-[0.89px] border-[#FFFFFF33] '>Contact Sales</button>
        </div>

    </div>
  )
}

export default StartFreeTrial

