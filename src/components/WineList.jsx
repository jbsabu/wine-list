import { useState } from "react"
import WineCard from "./WineCard"



export default function WineList() {
  const [theWines,setTheWines] = useState()
  const getWines = () => {
    fetch('https://api.sampleapis.com/wines/reds')
    .then(response => response.json())
    .then(setTheWines)
    .catch(err => alert(err))
  }
  return (
    <section className="wine-list">
      {(!theWines)
      ? <button onClick={getWines } >Get Wine List</button>
    : theWines.map(wine=> <WineCard wine = {wine}/>)} 

    </section>
  )
}


