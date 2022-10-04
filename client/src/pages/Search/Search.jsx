import React, { useState } from 'react'
import './search.scss'
import axios from "axios"
const Search = () => {
  const [movieName, setMovieName] = useState("");
  const handleChange = (e) => {
    setMovieName((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const getMovieDetails = () => {
    const key = `http://www.omdbapi.com/?t=dhoom&apikey=428b658c`
    axios
      .get(key)
      .then((response) => {
        setMovieName(response.data)
      })
      .catch((error) => console.log(error))
  }
getMovieDetails()
  return (
    <div className="Search">
      <div className="Search__Tab">
        <span> Search Any movie </span> 
        <input
                  type="texy"
                  placeholder="movieName"
                  id="movieName"
                  onChange={handleChange}
                  className="lInput"
                />
      </div>
      Hello
    </div>
  )
}

export default Search