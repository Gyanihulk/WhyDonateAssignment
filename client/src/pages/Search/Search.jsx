import React, { useState } from "react";
import "./search.scss";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
const Search = () => {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState();
  const [showMovieCard, setShowMovieCard] = useState(false);
  const handleChange = (e) => {
    setMovieName((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("button");

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.post(
        "http://localhost:5000/api/movie/byname",
        { name: movieName.movieName },
        {
          headers: {
            "content-type": "application/json",
            authorization: token?.token,
          },
        }
      );
      setMovie(res.data);
      setShowMovieCard(true);
    } catch (err) {}
  };

  return (
    <div className="Search">
      <div className="Search__Tab">
        <span> Search Any movie </span>
        <input
          type="text"
          placeholder="Movie Name"
          id="movieName"
          onChange={handleChange}
          className="lInput"
        />
        <button
          type="button"
          onClick={handleClick}
          className="custom-btn btn-14"
        >
          {" "}
          Search
        </button>
      </div>
      {showMovieCard && <MovieCard movie={movie} />}
    </div>
  );
};

export default Search;
