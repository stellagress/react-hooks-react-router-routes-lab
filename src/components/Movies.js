import React from "react";
import { movies } from "../data";

function Movies() {

  function allMovies (){
    return movies.map((movie, index) => (
      <div key={index}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map((genre,index)=>(
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>

    )
    )
  }

  // title: "Doctor Strange",
  // time: 115,
  // genres: ["Action", "Adventure", "Fantasy"],



  return (
  <div>
    <h1>Movies Page</h1>
    <div>{allMovies()}</div>

  </div>
  )
}

export default Movies;








// import React from "react";
// import { movies } from "../data";

// function Movies() {
//   return <div>{/*{code here}*/}</div>;
// }

// export default Movies;
