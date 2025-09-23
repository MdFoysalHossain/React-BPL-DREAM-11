import React, { useState, Suspense } from 'react';
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayer from './Components/SelectedPlayer/SelectedPlayer';
import NewsLetter from './Components/NewsLetter/NewsLetter';
// import PlayersJson from "/player.json"

const makePlayerPromise = async() => {
    const res = await fetch("/player.json");
    return res.json()
}

const promiseMade = makePlayerPromise();

function App() {
  // console.log(promiseMade)
  let [buttonState, setButtonState] = useState(true);
  let [playerSelected, setPlayerSelected] = useState([])
  let [isAvailable, setIsAvailable] = useState(false);

  let [currentBalance, setBalance] = useState(100000000);
  // console.log(buttonState)



  return (
    <>
      <Navbar currentBalance={currentBalance}></Navbar>
      <Banner></Banner>
      <AvailableTop buttonState={buttonState} playerSelected={playerSelected} setButtonState={setButtonState}></AvailableTop>

      <Suspense className={<span className="loading loading-infinity loading-xl"></span>}>
      {
        
        buttonState === true ? 
          <AvailablePlayers currentBalance={currentBalance} setBalance={setBalance} isAvailable={isAvailable} setIsAvailable={setIsAvailable} buttonState={buttonState} playerSelected={playerSelected} setPlayerSelected={setPlayerSelected}  promiseMade={promiseMade}></AvailablePlayers> 
            : 
          <SelectedPlayer currentBalance={currentBalance} setBalance={setBalance} isAvailable={isAvailable} setIsAvailable={setIsAvailable} buttonState={buttonState} playerSelected={playerSelected} setPlayerSelected={setPlayerSelected}></SelectedPlayer>
      }
    </Suspense>

    <NewsLetter></NewsLetter>
    </>
  )
}

const AvailableTop = ({buttonState, setButtonState, playerSelected}) => {
    

    let buttonCss1= "over:cursor-pointer rounded-l-xl px-7 py-2 border-1 border-gray-200  hover:font-bold hover:bg-[#E7FE29]"
    let buttonCss2= "hover:cursor-pointer rounded-r-xl  px-7 py-2 border-1 border-gray-200 border-l-0 hover:font-bold hover:bg-[#E7FE29]"


    return (
        <div className='max-w-[1220px] mt-10 mx-auto text-[#131313] flex justify-between font-sora'>
            <h2 className='text-2xl font-bold'> {buttonState? "Available Player": "Selected Player (" + playerSelected.length + "/6)"}</h2>
            <div>
                <button className={buttonState ? buttonCss1 + " bg-[#E7FE29] font-bold" : buttonCss1} onClick={() => setButtonState(true)}>Available</button>
                <button className={buttonState ? buttonCss2 : buttonCss2 + " bg-[#E7FE29] font-bold"} onClick={() => setButtonState(false)}>Selected ({playerSelected.length})</button>
            </div>
        </div>
    );
};


export default App
