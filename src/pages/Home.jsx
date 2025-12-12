import React from 'react'
import Navnbar from '../components/Navnbar'
import heroImge from '../assests/cubes.png'
import cloudImage from '../assests/cloud.png'
import rhcsaImage from '../assests/rhcsa.png'
import securityIcon from '../assests/securityIcon.png'
const calculations=[
    {
        amount:'99.9%',
        label:'Uptime SIA',
        color: "bg-[linear-gradient(90deg,#5373FF_0%,#8EC5FF_100%)]"
        
    },
    {
        amount:'500K+',
        label:'Threads Blocked',
         color:'bg-[linear-gradient(90deg,#EE0000_0%,#FF8A80_100%)]'
     
    },
    {
        amount:'24/7',
        label:'Monitoring',
        color:'bg-[linear-gradient(90deg,#05DF72_0%,#B7FFDB_100%)]'
       
    }
]
const Home = () => {
  return (
    <div className='bg-[radial-gradient(600px_at_20%_30%,#5373FF26,transparent_70%),radial-gradient(700px_at_80%_70%,#EE000026,transparent_70%)] bg-black min-h-screen'>
        <Navnbar/>
        <section className='grid grid-cols-1 md:grid-cols-2 md:gap-[80px] px-[10px] md:px-[80px]  py-[20px] my-[70px]'>
            <div className='md:w-[620px] h-[] space-y-[10px]  px-[20px]'>
                <button className='text-[16px] text-white border-[0.89px] border-[#5373FF4D] rounded-full  w-[215px] h-[37px]'>Red Hat Certified Training</button>
                <h1 className='  font-poppins font-semibold text-[32px] md:text-[48px] leading-[55px] tracking-[-1.5px] bg-[linear-gradient(90deg,#5472FE_0%,#E90510_100%)] bg-clip-text text-transparent'>RHCSA Certification &
<span className='text-white'> Enterprise Cloud Solutions</span>
</h1>
                <p className='text-[#D1D5DC] text-[20px] font-[400] mt-6'>Master Red Hat Enterprise Linux and accelerate your career with industry-recognized certifications and hands-on cloud training.</p>
                <div className='flex gap-4 mt-6'>
                    <button className='w-[247.59px] h-[56px] bg-[linear-gradient(90deg,#5373FF_0%,#3D5AE6_100%)] shadow-[0px_4px_6px_-4px_#2B7FFF80,0px_10px_15px_-3px_#2B7FFF80] px-[21px] py-[16px] text-white rounded-[14px] text-[16px] font-normal'>Enroll for RHCSA / Training</button>
                    <button className='w-[179.7px] h-[58px] border-[1px] border-[#FFFFFF33] px-[22px] py-[8px] text-white rounded-[14px] border-[0.8px] border-[#FFFFFF1A] text-[20px] font-normal'>View Courses</button>
                </div>
                <div className='flex gap-4 items-center'>
                {
                    calculations.map((item)=>(
                        <div key={item.label} className='flex flex-col items-center gap-[4px] ml-10 mt-10'>
                            <h1 className={` ${item.color} bg-clip-text text-transparent text-[30px] font-bold`}>{item.amount}</h1> 
                            <p className='text-[14px] text-[#BEDBFF99] font-normal '>{item.label}</p>
                            </div>))
                }
            </div>
            </div>
            <div className='relative px-[40px]'>
                <img src={heroImge} className='w-[423.44px] h-[445.06px]'/>
                <img src={cloudImage} className='absolute animate-bounceX left-[-10px] top-[-40px] w-[171.84px] h-[129.24px]'></img>
                <img src={rhcsaImage} className='animate-bounceY absolute  left-[-10px] top-[350px]  w-[177.69px] h-[194px]'></img>
                <div className='animate-bounceY w-[226.65px] h-[81.6px]  rounded-[16px] border-[0.8px] border-[#5373FF] bg-[#101828E5] absolute left-[300px] top-[120px] flex items-center gap-4 px-[16px] py-[16px]'>
                    <img src={securityIcon} className='w-[48px] h-[48px]'/>
                    <div className='flex flex-col'>
                        <p className='text-[12px] text-[#99A1AF] font-normal '>Security Status</p>
                        <h3 className='text-[#FFFFFF] text-[14px] font-normal'>All System Protected</h3>
                    </div>
                </div>
                 <div className='w-[182.39px] h-[81.6px]  rounded-[16px] border-[0.8px] border-[#5373FF] bg-[#101828E5] absolute left-[270px] top-[400px] flex items-center gap-4 px-[16px] py-[16px]'>
                    <div className='flex flex-col'>
                        <p className='text-[24px] text-[#5373FF] font-normal'>10M+</p>
                        <h3 className='text-[#FFFFFF] text-[12px] font-normal'>EventsDay</h3>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[24px] text-[#EE0000] font-normal'>50ms</p>
                        <h3 className='text-[#FFFFFF] text-[12px] font-normal'>Response</h3>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default Home