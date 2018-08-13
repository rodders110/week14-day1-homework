import React, {Component} from 'react';


const Movie = (props) => {
  return(
    <div>
      <td>{props.title}</td>
      <td>{props.showtimes}</td>
    </div>
  );
}

export default Movie;
