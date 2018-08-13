import React, {Component} from 'react';
import MovieList from '../components/MovieList';


class MovieBox extends Component{



  render(){
    return(
      <div className = 'movie_box'>
        <h2>UK Opening this week</h2>
          <MovieList data={movies}/>
      </div>
    )
  }
}

const movies = [
  {
   title: 'A Beautiful Plant',
   showtimes: 'https://www.cineworld.co.uk/#/buy-tickets-by-film?in-cinema=glasgow&at=2018-12-25&for-movie=ho00003621&view-mode=list'
 },
 {
   title: 'Christopher Robin',
   showtimes: 'https://www.cineworld.co.uk/#/buy-tickets-by-film?in-cinema=glasgow&at=2018-08-16&for-movie=ho00005376&view-mode=list'
 },
 {
   title: 'Ant-Man And The Wasp',
   showtimes: 'https://www.cineworld.co.uk/#/buy-tickets-by-film?in-cinema=glasgow&at=2018-08-13&for-movie=ho00005096&view-mode=list'
 },
 {
   title: 'Dog Days',
   showtimes: 'https://www.cineworld.co.uk/#/buy-tickets-by-film?in-cinema=glasgow&at=2018-08-14&for-movie=ho00005666&view-mode=list'
 },
 {
   title: 'Hotel Transylvania 3: A Monster Vacation',
   showtimes: 'https://www.cineworld.co.uk/#/buy-tickets-by-film?in-cinema=glasgow&at=2018-08-14&for-movie=ho00005107&view-mode=list'
 },
 {
   title: 'Incredibles',
   showtimes: 'https://www.cineworld.co.uk/#/buy-tickets-by-film?in-cinema=glasgow&at=2018-08-14&for-movie=ho00005098&view-mode=list'
 },
 {
   title: 'The Darkest Minds',
  showtimes: 'https://www.cineworld.co.uk/#/buy-tickets-by-film?in-cinema=glasgow&at=2018-08-13&for-movie=ho00005316&view-mode=list'
 }
  ];

export default MovieBox;
