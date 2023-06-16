import React from "react";
import { actors } from "../data";

function Actors() {

  function allActors(){
    return actors.map((actor, index) => (
      <div key={index}>
        <h3>Name: {actor.name}</h3>
        <p>Movies:</p>
        <ul>
          {actor.movies.map((movie, index) => (
            <li key={index}> {movie} </li>
          ))}
        </ul>
      </div>
    ))
  }



  return (
  <div>
    <h1>Actors Page</h1>
    <div>{allActors()}</div>
  </div>
  )
}

export default Actors;

// const actors = [
//   {
//     name: "Benedict Cumberbatch",
//     movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
//   },
//   {
//     name: "Justin Timberlake",
//     movies: ["Trolls", "Friends with Benefits", "The Social Network"],
//   },
//   {
//     name: "Anna Kendrick",
//     movies: ["Pitch Perfect", "Into The Wood"],
//   },
//   {
//     name: "Tom Cruise",
//     movies: [
//       "Jack Reacher: Never Go Back",
//       "Mission Impossible 4",
//       "War of the Worlds",
//     ],
//   },
// ];




// import React from "react";
// import { actors } from "../data";

// function Actors() {
//   return <div>{/*{code here}*/}</div>;
// }

// export default Actors;

