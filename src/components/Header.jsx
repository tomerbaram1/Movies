import { useState } from "react"
import "./newmovie.css"

const Header = (props) => {
  const [movie, setMovie] = useState(false);
  
  return (
    <header className="header">
       <div>  </div>
        <h1>Favorite Movies!</h1>
        
        <button onClick={()=>setMovie(!movie)} className="btn-modal">
          Add Movie
        </button>
  
        {movie && (
          <div className="modal">
            <div onClick={()=>setMovie} className="overlay"></div>
            <div className="modal-content">
              <h2>Add Movie</h2>
              <input type="text" className="movieinput" placeholder="Movie Image" onChange={(e)=>props.setImage(e.target.value)}></input>
              <input type="text" className="movieinput" placeholder="Movie Trailer" onChange={(e)=>props.setTrailer(e.target.value)}></input>
              <input type="text" className="movieinput" placeholder="Movie Title" onChange={(e)=>props.setName(e.target.value)}></input>
              <button className="btn-add" onClick={()=>props.updateMovies()}>Add Movie</button>
              <button className="close-modal" onClick={()=>setMovie (!movie)}>
                CLOSE
              </button>
            </div>
          </div>
        )}
        
      
    </header>
  )
}


export default Header




// const Header = () => {
//     const onClick = ()=>{
//         console.log('click')
//     }
//   return (
//     <header className="header">
//         <h1>Favorite Movies!</h1>
//         <NewMovie />
//     </header>
//   )
// }