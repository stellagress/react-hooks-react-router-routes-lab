import React from "react";
import { directors } from "../data";

function Directors() {

  function allDirectors() {
    return directors.map((director, index) => (
      <div key={index}>
        <h3>Name: {director.name}</h3>
        <p>Movies:</p>
        <ul>
          {director.movies.map((movie, index) => (
            <li key={index}> {movie} </li>
          ))}
        </ul>
        </div>  
    ))
  }






  return (
  <div>
    <h1>Directors Page</h1>
    <div>{allDirectors()}</div>
  </div>
  )
}

export default Directors;


// const directors = [
//   {
//     name: "Scott Derrickson",
//     movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
//   },
//   {
//     name: "Mike Mitchell",
//     movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
//   },
//   {
//     name: "Edward Zwick",
//     movies: ["Jack Reacher: Never Go Back", "Blood Diamon", "The Siege"],
//   },
// ];





// import React from "react";
// import { directors } from "../data";

// function Directors() {
//   return <div>{/*{code here}*/}</div>;
// }

// export default Directors;
