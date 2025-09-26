import React from 'react';
import BackgroundImage from "../../assets/bg-shadow.png"
import CricketBat from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='max-container'>
            <div className='bg-black rounded-3xl overflow-hidden lg:mt-10 m-2 mt-5'>
                <div className='lg:h-[500px] p-5 font-sora bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center' style={{backgroundImage: `url(${BackgroundImage})`}}>
                    <img className='h-[160px] w-[200px] md:w-[250px] md:h-[200px]' src={CricketBat} alt="" />
                    <h1 className='text-xl md:text-4xl mt-5 font-bold text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-lg md:text-xl mt-3 text-gray-300'>Beyond Boundaries Beyond Limits</p>
                    <button className='mt-3 p-1.5 text-[#131313] rounded-2xl border-1  border-[#E7FE29]'>
                        <p className='bg-[#E7FE29] w-[170px] font-bold h-[40px] text-center  rounded-xl flex justify-center items-center'>Claim Free Credit</p>
                    </button>

                </div>
            </div>
            
        </div>
    );
};

export default Banner;