import React, { use } from 'react';
import "./availablePlayers.css";


const AvailablePlayers = ({promiseMade}) => {
    const promisedData = use(promiseMade);
    console.log(promisedData); 

    return (
        <div className='max-w-[1440px] grid grid-cols-3 gap-5 mx-auto mt-10'>
            {
                promisedData.map(player => <SinglePlayer player={player}></SinglePlayer>)
            }
        </div>
    );
};


function SinglePlayer({player}){
    const {player_image, player_name, player_country, player_role, rating, bating_style,bawling_style, price } = player;

    return(
        <div className='mx-auto'>
            <div className="card font-sora bg-white w-96 text-gray-900 shadow-sm rounded-2xl">
                <figure className='m-4 rounded-2xl max-h-[200px]'>
                    <img
                    src={player_image}
                    alt={player_name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{player_name}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-600'>🏳️ {player_country}</p>
                        <span className='bg-gray-100 text-gray-900 px-5 py-1.5 rounded-md'>{player_role}</span>
                    </div>
                    
                    <div className='h-0.5 w-full bg-gray-200 my-2'></div>

                    <div className='flex justify-between items-center'>
                        <p className='text-gray-900 font-bold text-md'>Rating</p>
                        <p className='text-gray-900  text-md text-right'>{rating}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-gray-900 font-bold  text-md text-left'>Bating Style:</p>
                        <p className='text-gray-900 text-md text-right'>{bating_style}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-900 font-bold  text-md text-left'>Bowling Style:</p>
                        <p className='text-gray-900 text-md text-right'>{bawling_style}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-900 font-bold  text-md text-left'>Price: {price}</p>
                        <button className="btn bg-transparent font-normal border-[1px] shadow-none border-gray-200 rounded-xl text-md text-gray-900 hover:bg-[#E7FE29] hover:border-[#E7FE29]">Choose Player</button>
                    </div>

                </div>
            </div>
        </div>


    )
}


export default AvailablePlayers;