import Header from "../components/Header"
import Footer from "../components/Footer"
import {Link} from "react-router-dom"
import { useState } from "react"

export const movieData = [
  {id:1, title:"Inception", genre:"Sci-Fi", director:"Christopher Nolan", views: 2000 , ratings:5},
  {id:2, title:"The Shawshank Redemption", genre:"Drama", director:"Frank Darabont",views: 3000, ratings:6},
  {id:3, title:"Pulp Fiction", genre:"Crime", director:"Quentin Tarantino",views: 4000, ratings:2},
  {id:4, title:"The God Father", genre:"Crime", director:"Francis Ford Coppola", views: 50000, ratings:8},
  {id:5, title:"The Dark Knight", genre:"Action", director:"Christopher Nolan", views: 6000, ratings:9},
]


const Movies =()=>{
const [genreFilter, setGenreFilter] = useState("All")
const filteredMovies  = genreFilter === "All"? movieData : movieData.filter(movie=>movie.genre== genreFilter)

return(
<>
<Header/>
<div className="container ">
  <div className="pt-3">
<label htmlFor="genreInput">Filter by Genre: </label>
<select id="genreInput" className="form-control" onChange={(event)=> setGenreFilter(event.target.value)}>
<option value="All">All Genres</option>
<option value="Action">Action</option>
<option value="Crime">Crime</option>
<option value="Drama">Drama</option>
<option value="Sci-Fi">Sci-Fi</option>
</select>
  </div>
<ul className="list-group py-4">
  {filteredMovies.map((movie)=>(
    <li key={movie.id} className="list-group-item">
<h5>{movie.title}</h5>
<p>Genre: {movie.genre}</p>
<p>Director: {movie.director}</p>
<Link className="btn btn-primary" to={`/movies/${movie.id}`}>View Details</Link>
</li>
))}
</ul>
</div>
<Footer/>
</>
)
}
export default Movies