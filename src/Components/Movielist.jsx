import React from 'react'
import './Movielist.css'
import Card from './Card'
import moviesdata from '../movie.json'

function Movielist() {
  return (
    <div className='movielist'>
      {moviesdata.map((element) => {
       return <Card
          key={element.imdbID}
          Poster={element.Poster}
          Title={element.Title}
          Year={element.Year}
        />
      })}
    </div>
  );
}

export default Movielist;