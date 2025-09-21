import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import AvailableTop from './Components/AvailableTop/AvailableTop'

// import PlayersJson from "/player.json"

const makePlayerPromise = async() => {
    const res = await fetch("/player.json");
    return res.json()
}

function App() {
  const promiseMade = makePlayerPromise();
  // console.log(promiseMade)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AvailableTop></AvailableTop>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <AvailablePlayers promiseMade={promiseMade}></AvailablePlayers>
      </Suspense>
    </>
  )
}

export default App
