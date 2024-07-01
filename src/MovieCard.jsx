import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
        <div className='movie-year'>
            <p>{movie.Year}</p>
        </div>

        <div>
            <a href="https://www.youtube.com/results?search_query=one+piece"><img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} style={{height: "400px", width: "300px"}}/></a>
        </div>

        <div className='movie-type'>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard