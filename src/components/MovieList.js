import React, {Component} from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  const movieNodes = props.data.map(movie => {
    return(
      <Movie title={movie.title} showtimes={movie.showtimes}/>
    );
  })
  return <tr>{movieNodes}</tr>
}

export default MovieList;
