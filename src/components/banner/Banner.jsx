import React, { useEffect } from 'react'
import './banner.css'
import axios from '../../axios'
import request from '../../Request'

const Banner = () => {
  const [movie, setMovie] = React.useState([]);
  
  function truncate(str, n) { 
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  }
 

  useEffect(() => { 
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie(requests.data.results[Math.floor(Math.random() * requests.data.results.length-1)]);
      return request;
    }

    fetchData();

  }, [])
  console.log(movie);

  return (
      <header className='banner' style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
         backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
      }}>
      <div className='banner__content'>
        <h1 className='banner__title'>{movie.title || movie.name ||movie.original_title }</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>{ truncate(movie.overview, 150)}</h1>


      </div>
      <div className='banner__fadeBottom' />
   </header>
  )
}

export default Banner