import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {useParams} from "react-router-dom"
import {movieData} from "../pages/Movies"

function MovieDetails(){
const movieId = useParams()
const movie = movieData.find((mov)=> mov.id === parseInt(movieId.movieId))


  return(
    <div>
<Header/>
<section className="container py-4">
<div className="row">
<div className="col">
<div id="movie-details">
{movie?(
<>
<h2>{movie.title}</h2>
<ul className="list-group">
<li className="list-group-item">
<strong>Title: </strong>{movie.title}
</li>
<li className="list-group-item">
<strong>Genre: </strong>{movie.genre}
</li>
<li className="list-group-item">
<strong>Director: </strong>{movie.director}
</li>

</ul>

</>
):(
  <>
  <p className="alert alert-danger"> Movie not Found.</p>
</>)}
</div>
</div>
</div>
</section>

<Footer/>
    </div>
  )
}

export default MovieDetails;