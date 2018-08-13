import React, {Component} from 'react';


const Movie = (props) => {
  return(
    <tr className='movie_entry'>
      <td>{props.title}</td>
      <td>
        <a href={props.showtimes}>Click here for show Times</a>
      </td>
    </tr>
  );
}

export default Movie;
