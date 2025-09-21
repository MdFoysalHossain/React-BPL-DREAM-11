import React from 'react';
import BackgroundImage from "../../assets/bg-shadow.png"
import CricketBat from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='max-container '>
            <div className='bg-black rounded-3xl overflow-hidden mt-10'>
                <div className='h-[500px] font-sora bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center' style={{backgroundImage: `url(${BackgroundImage})`}}>
                    <img className='h-[200px] w-[250px]' src={CricketBat} alt="" />
                    <h1 className='text-4xl mt-5 font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-xl mt-3 text-gray-300'>Beyond Boundaries Beyond Limits</p>
                    <button className='mt-3 p-1.5 text-[#131313] rounded-2xl border-1  border-[#E7FE29]'>
                        <p className='bg-[#E7FE29] w-[170px] font-bold h-[40px] text-center  rounded-xl flex justify-center items-center'>Claim Free Credit</p>
                    </button>

                </div>
            </div>
            
        </div>
    );
};

export default Banner;