import React from 'react';

const SelectedPlayer = ({buttonState, playerSelected, setPlayerSelected, setIsAvailable, isAvailable, currentBalance, setBalance}) => {
    if(playerSelected.length === 0){
        return(<NoPlayer></NoPlayer>)
    }
    else{
        return (
            <div className={buttonState? "hidden" : "visible"}>
                <div className='max-w-[1220px] mx-auto flex flex-col gap-5 mt-10'>
                    {
                        playerSelected.map(player => <EachPlayer  currentBalance={currentBalance} setBalance={setBalance} key={player.id} isAvailable={isAvailable} setIsAvailable={setIsAvailable} setPlayerSelected={setPlayerSelected} playerSelected={playerSelected} player={player}></EachPlayer>)
                    }
                </div>
            </div>
        );
    }
};

function EachPlayer({player, playerSelected, setPlayerSelected, setIsAvailable, isAvailable, currentBalance, setBalance}){
    const {player_image, player_name, bating_style, price} = player;

    function removePlayer(){
        const newPlayerArr = playerSelected.filter(playerdata => playerdata.id !== player.id)
        setIsAvailable(!isAvailable);
        setPlayerSelected(newPlayerArr);
        const newBalance = parseInt(currentBalance) + parseInt(price)
        setBalance(newBalance)

    }

    return(
        <div className='flex flex-row justify-between items-center p-5 border-1 border-gray-200 rounded-2xl'>
            <div className="left flex flex-row items-center gap-5">
                <div className="img">
                    <figure className='w-[70px] h-[70px] overflow-hidden rounded-md'>
                        <img className='w-full h-full object-cover' src={player_image} alt={player_name + "Image"} />
                    </figure>
                </div>
                <div className="details font-sora text-[#131313]">
                    <h2 className='font-semibold text-2xl'>{player_name}</h2>
                    <p className='text-sm text-gray-500'>{bating_style}</p>
                </div>
            </div>

            <button onClick={() => removePlayer()} className='bg-transparent hover:cursor-pointer text-2xl'>❌</button>
        </div>
    )
}

function NoPlayer(){
    return (
        <div className='w-[1220px] text-center bg-gray-100 mx-auto mt-10 py-20 rounded-2xl'>
            <h2 className='text-[#131313] text-2xl font-semibold font-sora'>No Player Selected</h2>
            <p className='text-[#13131370] text-lg font-sora mt-2'>Select Player</p>
        </div>
    )
}

export default SelectedPlayer;