import React, { useEffect } from "react";
import "./App.css";
import Card from "./Card";

const API_URL = "https://www.omdbapi.com?apikey=20849a0e";

const movie1 = {
  Title: "Hope Springs Eternal: A Look Back at 'The Shawshank Redemption'",
  Year: "2004",
  imdbID: "tt0443041",
  Type: "movie",
  Poster: "N/A",
};



const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("The Shawshank Redemption");
  }, []);

  return (
    <div className="App">
        <h1>Movies We Love</h1>

        <div className="search">
          <input type="text"
          placeholder="search movie "
           />
           <button>Search</button>
        </div>

        <div className="container" >
          <Card movie={movie1}/>
        </div>
    </div>
  );
};

export default App;
