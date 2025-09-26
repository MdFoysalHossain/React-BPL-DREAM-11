import React, { use, useState } from 'react';
import "./availablePlayers.css";


const AvailablePlayers = ({promiseMade, buttonState, playerSelected, setPlayerSelected, setIsAvailable, isAvailable, currentBalance, setBalance}) => {
    const promisedData = use(promiseMade);
    // console.log(promisedData); 
    return (
        <div className={buttonState ? "max-w-[1220px] grid gap-5 mx-auto mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 " : "max-w-[1220px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-10 hidden"}>
            {
                promisedData.map(player => <SinglePlayer currentBalance={currentBalance} setBalance={setBalance} isAvailable={isAvailable} setIsAvailable={setIsAvailable} key={player.id} playerSelected={playerSelected} setPlayerSelected={setPlayerSelected} player={player}></SinglePlayer>)
            }
        </div>
    );
};


function SinglePlayer({player, playerSelected, setPlayerSelected, currentBalance, setBalance}){
    const {player_image, player_name, player_country, player_role, rating, bating_style,bawling_style, price } = player;
    let [buttonState, setButtonState] = useState(false);
    
    function returnPlayerSelected(){
        if(playerSelected.length < 6 && buttonState === false){
                const newPlayerList = [...playerSelected, player]
                setPlayerSelected(newPlayerList);
                setButtonState(!buttonState);

                const newBalance = currentBalance - parseInt(price)
                setBalance(newBalance)
                console.log(newBalance);
            
        }else if(playerSelected.length <= 6 && buttonState === true){
                const newPlayerList = playerSelected.filter(playerData => playerData.id !== player.id)
                setPlayerSelected(newPlayerList)
                setButtonState(!buttonState);
                const newBalance = currentBalance + parseInt(price)

                setBalance(newBalance)
                console.log(newBalance);
                console.log("Price Added: ", price, "Currant Balance" , currentBalance);
            }

        
        
            
    }

    function didLoad(){

        const isPlayerIn = playerSelected.find(playerData => playerData.id === player.id);
        if(isPlayerIn){
            console.log(player.player_name);
            setButtonState(true)
        } else{
            setButtonState(false)
        }
    }

    const buttonCss = "btn bg-transparent font-normal border-[1px] shadow-none border-gray-200 rounded-xl text-md text-gray-900 hover:bg-[#E7FE29] hover:border-[#E7FE29]";
    const buttonActiveCss = "btn font-normal border-[1px] shadow-none border-gray-200 rounded-xl text-md text-gray-900 bg-[#E7FE29] border-[#E7FE29]";

    return(
        <div className='mx-auto' onLoad={() => didLoad()}>
            <div className="card font-sora bg-white w-86 md:w-96 text-gray-900 shadow-sm rounded-2xl">
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
                        <p className='text-gray-900 font-bold  text-md text-left'>Price: ${price}</p>
                        <button onClick={returnPlayerSelected} className={buttonState ? buttonActiveCss: buttonCss}> {buttonState ? "Player Selected": "Select Player"}</button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default AvailablePlayers;