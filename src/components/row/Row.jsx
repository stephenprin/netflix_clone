import axios from  '../../axios'
import React from 'react'
import request from '../../Request';
import './Row.css'

const Row = ({ title, fetchUrl, isLarge = false }) => {
    const [movies, setMovies] = React.useState([]);
    const base_url = 'https://image.tmdb.org/t/p/original/';
     
    React.useEffect(() => { 
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl])

    console.log(movies)

  return (
      <div className='row'>
          <h2>{title}</h2>
          <div className='row_posters'>
              {movies.map((movie) => (
                 ( (isLarge && movie.poster_path )|| (!isLarge && movie.backdrop_path)) && (
                    <img className={`row__poster ${isLarge && "row__posterLarge"}`}
                    src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} /> 
              )
             
          ))}
          </div>
          
      </div>
    
    
   
    )
}

export default  Row 