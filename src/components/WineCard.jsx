export default function WineCard({wine}){
  return (
    ( 
      <div className="wine-card">
     
        <img src = {wine.image} className = 'wine-img' alt = {wine.wine}/>
        <h2 className = 'wine-header'>{wine.wine}</h2>
      </div>
    )
  )
}