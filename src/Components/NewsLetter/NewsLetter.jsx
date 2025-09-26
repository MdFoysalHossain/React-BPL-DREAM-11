import React from 'react';
import BackGround from "../../assets/bg-shadow.png"

const NewsLetter = () => {
    return (
        <div className='bg-[#06091A] w-full py-[100px] md:py-[50px] lg:py-[100px]  mt-[300px] -mb-1 md:-mb-0 relative border-0 border-transparent'>
            <div className=' mt-50 mx-auto bg-[rgba(255,255,255,0.25)] absolute border-2 top-[-360px] left-1/2 -translate-x-1/2 rounded-2xl border-[#fff] 
             lg:w-[950px] xl:w-[1220px] md:w-[700px] w-[350px]
            p-3 lg:p-7            
            ' >
                <div className="py-[70px] rounded-2xl border-1 bg-white bg-no-repeat bg-center bg-cover border-gray-200" style={{ backgroundImage: `url(${BackGround})` }}>
                    <h2 className='font-sora text-2xl font-bold text-center text-[#131313]'>Subscribe to our Newsletter</h2>
                    <p className='font-sora text-lg text-center mt-1 text-[rgba(19,19,19,0.70)]'>Get the latest updates and news right in your inbox!</p>
                    <div className='w-full text-center lg:m-5'>
                        <form action="">
                            <input required className='bg-white mt-2 md:mt-0 h-[50px] w-[280px] md:w-[350px] lg:w-[350px]  border-[1.5px] border-[#d1d1d1] focus-visible:border-[#d1d1d1] placeholder:text-gray-400 font-sora px-4 text-black rounded-xl' type="email" placeholder='Enter your email'/>
                            <input className='bg-[#E7FE29] mt-2 md:mt-0 w-[280px] md:w-auto text-[#131313] font-sora font-semibold text-lg px-5 py-2 md:py-3 md:ml-2 rounded-xl cursor-pointer' type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default NewsLetter;