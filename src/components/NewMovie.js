import { useState } from "react";
import "./newmovie.css"
const NewMovie = () => {
    const [movie, setMovie] = useState(false);
    return (
      <>
        <button onClick={()=>setMovie(!movie)} className="btn-modal">
          Add Movie
        </button>
  
        {movie && (
          <div className="modal">
            <div onClick={()=>setMovie} className="overlay"></div>
            <div className="modal-content">
              <h2>Add Movie</h2>
              <input type="text" className="movieinput" placeholder="Movie Image"></input>
              <input type="text" className="movieinput" placeholder="Movie Title"></input>
              <input type="text" className="movieinput" placeholder="Movie Trailer"></input>
              <button className="btn-add">Add Movie</button>
              <button className="close-modal" onClick={()=>setMovie (!movie)}>
                CLOSE
              </button>
            </div>
          </div>
        )}
        
      </>
    );
  }
  export default NewMovie
  // const toggleMovie = () => {
  //   setMovie(!movie);
  // };

  // if(movie) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }