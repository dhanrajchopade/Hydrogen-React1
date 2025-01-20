import Header from "../components/Header"
import Footer from "../components/Footer"
import {movieData} from '../pages/Movies'

export default function Reports(){
  const mostWatchedMovie = movieData.reduce((acc,curr)=>acc.views>curr.views? acc:curr)
  const highestRated = movieData.reduce((acc,curr)=> acc.ratings>curr.ratings? acc:curr)
 const totalMovies = movieData.length
return(

  <div className>
  <Header/>
<div className="container py-3">
  <h2>
    Movie Report
  </h2>
  <hr/>
  <h3>Most Watched Movie</h3>

  {mostWatchedMovie && 
  <>
  <p>Title: {mostWatchedMovie.title}</p>
  <p>Views: {mostWatchedMovie.views}</p>
  
  </>}

  <h3>Highest Rated Movie</h3>
  {highestRated &&
  <>
  <p>Title: {highestRated.title}</p>
  <p>Title: {highestRated.ratings}</p>
  </>
  }
<h3>Total no. of Movies</h3>
{totalMovies && (
  <p>{totalMovies}</p>
)}

</div>

  <Footer/>
  </div>

)
}