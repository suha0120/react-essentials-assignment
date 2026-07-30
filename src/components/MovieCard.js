function MovieCard({ movie, favorites, toggleFavorite }) {
  const isFavorite = favorites.includes(movie.id);

  return (
    <div className="movie-card">

      <div className="movie-info">

        <div>

          <h3>
            {movie.title}
            <span className="year">
              {movie.year}
            </span>
          </h3>

          <p className="genre">
            {movie.genre}
          </p>

          <div className="tags">
            <span>⭐ {movie.rating}</span>
            <span>{movie.language}</span>
            <span>{movie.duration}</span>
          </div>

        </div>

        <button
          className={isFavorite ? "fav-btn active" : "fav-btn"}
          onClick={() => toggleFavorite(movie.id)}
        >
          {isFavorite ? "❤️ Favorited" : "🤍 Favorite"}
        </button>

      </div>

    </div>
  );
}

export default MovieCard;