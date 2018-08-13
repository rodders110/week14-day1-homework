import React, {Component} from 'react';
import MovieList from '../components/MovieList';


class MovieBox extends Component{



  render(){
    return(
      <div className = 'movie_box'>
        <h2>UK Opening this week</h2>
        <table>
          <MovieList data={movies}/>
        </table>
      </div>
    )
  }
}

const movies = [
  {
   title: 'Sausage Party',
   showtimes: 'enter some url here'
 },
 {
   title: 'Cafe Society',
   showtimes: 'enter some url here'
 },
 {
   title: 'Morgan',
   showtimes: 'enter some url here'
 },
 {
   title: 'The 9th life of Louise Drax',
   showtimes: 'enter some url here'
 },
 {
   title: 'Naam Hai Akira',
   showtimes: 'enter some url here'
 },
 {
   title: 'Equity',
   showtimes: 'enter some url here'
 },
 {
   title: 'Things to come',
  showtimes: 'enter some url here'
 }
  ];

export default MovieBox;
