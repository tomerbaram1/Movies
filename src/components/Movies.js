 import { useState } from "react";
import Counter from "./Counter"
import Header from "./Header";
import YoutubePlayer from "./YoutubePlayer"
import "./movies.css"



const Movies = (props) => { 
  const [movies, setMovies] = useState ([])
    const [image, setImage] = useState ("")
    const [trailer, setTrailer] = useState ("")
    const [name, setName] = useState ("")
    const [movie, setMovie] = useState ({})
    const updateMoviesList = (props) => {
        const moviesList = [...movies]
        const movie = {
            image,
            trailer,
            name
        }
        setMovie(movie)
        moviesList.push(movie)
        setMovies(moviesList)}

        function removeMovie(i){
          const deletedMovie= [...movies]
          deletedMovie.splice(i,1)
          setMovies(deletedMovie)
        }
   
  
  return(
  <div className="main">
   <Header updateMovies = {updateMoviesList} setName={setName} setImage={setImage} setTrailer={setTrailer}  />
<div className="parent">
  <table className="table">
      <tr className="titles">
          <th>Image</th>
          <th>Trailer</th>
          <th>Title</th>
          <th>Rating</th>
      </tr>
             <tr>
          <td className="imgrow1" ><img src='https://cdn.quotesgram.com/img/15/14/1560609081-TheGodfather-MoviePoster.jpg'></img></td>
          <td><YoutubePlayer frame={<iframe width="560" height="315" src="https://www.youtube.com/embed/sY1S34973zA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}/></td>
          <td><span>The Godfather</span></td>
          <td> <Counter/> </td>
          <td><button className="y"  >✅</button></td>
          </tr>
      
      <tr>
          <td className="imgrow"><img src='https://play-lh.googleusercontent.com/hZuesjSWMLsJK9UdfKut2LM4fVk7bfMoaGaRMt6gDR5mJSjv0AlbBUnR7PY0oBkzM1j5eoE9csuESEWzzNY=w240-h480-rw'></img></td>
          <td><YoutubePlayer frame={<iframe width="560" height="315" src="https://www.youtube.com/embed/sY1S34973zA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}/></td>
          <td><span>The Green Mile</span></td>
          <td> <Counter/> </td>
          <td><button  className="y">✅</button></td>
      </tr>
      
      <tr>
          <td className="imgrow"><img src='https://i.ytimg.com/vi/jZscaLqS_mQ/movieposter_en.jpg'></img></td>
          <td><YoutubePlayer frame={<iframe width="560" height="315" src="https://www.youtube.com/embed/sY1S34973zA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}/></td>
          <td><span>The Conjuring</span></td>
          <td> <Counter/> </td>
          <td><button className="y">✅</button></td>
      </tr>
      <tr className="movieline">{movies.map((movie) => {return(
        <tr >
          <td className="imgrow"><img src={movie.image}></img></td>
          <td><YoutubePlayer frame={movie.trailer}/></td>
          <td><span>{movie.name}</span></td>
          <td> <Counter /></td>
          <td><button className="x"  onClick={removeMovie}>❌</button></td>
        </tr>
      )})}

      </tr>
  </table>
  </div>
       </div> )
}


  
  
  export default Movies
  