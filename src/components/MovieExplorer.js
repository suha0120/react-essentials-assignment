import { useState } from "react";
import movies from "../data/movie";
import MovieCard from "./MovieCard";

function MovieExplorer() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((movieId) => movieId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const favoriteMovies = movies.filter((movie) =>
    favorites.includes(movie.id)
  );

  return (
    <div className="movie-container">

      <div className="movie-header">
        <div>
          <h1>Movie Explorer</h1>
          <p>
            Search, filter, and favorite movies. Designed for a React
            component assignment.
          </p>
        </div>

        <span className="status">
          Local data • React state ready
        </span>
      </div>

      <div className="search-section">

        <input
          type="text"
          placeholder='Search movies (e.g. "Star")'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-btn"
            onClick={() => setSearch("")}
          >
            ✕
          </button>
        )}

        <button
          className="reset-btn"
          onClick={() => setSearch("")}
        >
          Reset
        </button>

      </div>

      <div className="result-count">
        {search === ""
          ? "Start typing to search movies."
          : `${filteredMovies.length} result(s) for "${search}"`}
      </div>

      <div className="movie-layout">

        <div className="left-section">

          <div className="section-title">
            <h2>Matching Movies</h2>
            <span>Filtered from local movie data</span>
          </div>

          {search === "" ? (
            <p className="empty">
              Start typing to search movies.
            </p>
          ) : filteredMovies.length === 0 ? (
            <p className="empty">
              No movies found.
            </p>
          ) : (
            filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            ))
          )}

        </div>

        <div className="right-section">

          <div className="section-title">
            <h2>Favourite Movies</h2>
            <span>Derived from favourite state</span>
          </div>

          {favoriteMovies.length === 0 ? (
            <p className="empty">
              You haven't added any favourites yet.
            </p>
          ) : (
            favoriteMovies.map((movie) => (
              <div
                key={movie.id}
                className="favorite-item"
              >
                🤍 {movie.title} ({movie.year})
              </div>
            ))
          )}

        </div>

      </div>

    </div>
  );
}

export default MovieExplorer;