import React, {Component} from 'react';
import Movie from './Movie';


const MovieList = (props) => {
  const movieNodes = props.data.map((movie, i = 0) => {
    return(
      <Movie title={movie.title} showtimes={movie.showtimes} key = {i}/>
    );
    i++;
  })
  return <table><tbody>{movieNodes}</tbody></table>
}

export default MovieList;
