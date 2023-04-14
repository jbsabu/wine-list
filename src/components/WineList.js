import { useState } from "react"



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
    : theWines.map(wine=>( 
      <div className="wine-card">
        <h2 className = 'wine-header'>{wine.wine}</h2>
        <img src = {wine.image} className = 'wine-img' alt = {wine.wine}/>
      </div>
    )) } 

    </section>
  )
}


