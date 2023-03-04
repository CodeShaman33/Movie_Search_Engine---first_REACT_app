import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

const API_URL = "https://www.omdbapi.com?apikey=20849a0e";

const App = () => {
  //STATES (there is no limit of states  in component)
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("SEX");
  }, []);

  return (
    <div className="App">
      <h1>Movies We Love</h1>

      <div className="search">
        <input type="text"
         placeholder="search movie "
         value={searchTerm}
         onChange = {(e) => setSearchTerm(e.target.value)} />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>

      <div className="container">
        {movies?.length > 0 ? (
          <div className="movies">
            {movies.map((movie) => (
              <Card movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>no movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
