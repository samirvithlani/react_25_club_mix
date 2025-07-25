import axios from "axios";
import React, { useState } from "react";

export const OmdbApi = () => {
  const [movies, setmovies] = useState([]);

  const searchMovie = async () => {
    //9d57be0b
    //? query param
    //&

    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=9d57be0b&s=Avatar`
    );
    console.log(res.data.Search); //api..respoonse..
    setmovies(res.data.Search);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>OmdbApi</h1>
      <button
        onClick={() => {
          searchMovie();
        }}
      >
        search
      </button>
      <h1>{movies == undefined && "No movie Found..."}</h1>

      <div class="container my-4">
        <div class="row" id="movie-list">
          {movies?.map((movie) => {
            return (
              <div class="col-md-3 mb-4">
                <div class="card h-100">
                  <img
                    src={movie.Poster}
                    class="card-img-top"
                    alt="Movie Poster"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{movie.Title}</h5>
                    <p class="card-text">{movie.imdbID}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
