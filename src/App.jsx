import {Link} from "react-router-dom"
import React from "react"
import Header from './components/Header'
import Footer from './components/Footer' 
import './App.css' 
export default function App(){
return(
<>
<Header/>
<div className="container py-3">
  <section className="mt-5">
<div className="row">
<div className="col-md-12">
<img src="https://placehold.co/600x400?text=Movie+Cover" alt="Movie Cover Image" className="ing-fluid"/>
</div>
</div>
  </section>

<section className="mt-5">
<div className="row">
<div className="col-md-12">
<h2>
  Our Movies
</h2>
<p>Explore our collection of movies spanning various genres and themes.</p>
<Link className="btn btn-primary" to="/movies">View Movies</Link>
</div>
</div>
</section>

<section className="mt-5">
<div className="row">
<div className="col-md-12">
<h2>
  Movies Report
</h2>
<p>Explore our collection of movies reports spanning various genres and themes.</p>
<Link className="btn btn-primary" to="/reports">View Reports</Link>
</div>
</div>
</section>
</div>
<Footer/>
</>
)
}