import React, { useState } from 'react';

const AvailableTop = () => {
    let [buttonState, setButtonState] = useState(true);

    let buttonCss1= "over:cursor-pointer rounded-l-xl px-7 py-2 border-1 border-gray-200  hover:font-bold hover:bg-[#E7FE29]"
    let buttonCss2= "hover:cursor-pointer rounded-r-xl  px-7 py-2 border-1 border-gray-200 border-l-0 hover:font-bold hover:bg-[#E7FE29]"


    return (
        <div className='max-w-[1440px] mt-10 mx-auto text-[#131313] flex justify-between font-sora'>
            <h2 className='text-2xl font-bold'>Available Player:</h2>
            <div>
                <button className={buttonState ? buttonCss1 + " bg-[#E7FE29] font-bold" : buttonCss1} onClick={() => setButtonState(true)}>Available</button>
                <button className={buttonState ? buttonCss2 : buttonCss2 + " bg-[#E7FE29] font-bold"} onClick={() => setButtonState(false)}>Selected (0)</button>
            </div>
        </div>
    );
};

export default AvailableTop;