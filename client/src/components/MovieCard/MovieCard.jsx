import React from "react";
import "./movieCard.scss";

//Movie Card to show the movie on the Search page
const MovieCard = ({ movie }) => {
  console.log("movie", movie);
  return (
    <>
      <div className="movie-card">
        <div className="image-container">
          {/* Movie image */}
          <div className="cover-image movie-image">
            <img src={movie.poster} alt="" />
          </div>
        </div>
          {/* Movie Name */}
        <div className="movie-info">
          <h3 className="movie-name">{movie.title}</h3>
          {/* Movie year */}
          <p className="year">
            <span>Realesed Year </span> {movie.year}
          </p>
          <p className="Description">{movie.awards}</p>

          {/* Actors  */}
          <div className="actors">
            <span>Actors</span>
            {Object.values(movie?.actors).map((value, index) => {
              return (
                <div key={index}>
                  {" "}
                  <h4>{value}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
