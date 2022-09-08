import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import moviesData from './movieData.json'
import './styles/movie.scss'

const Movies = ({ basket, updateBasket }) => {
  const genre = ["Sci-Fi",
    "Action",
    "Comedy",
    "Drama",
    "Mystery",
    "Documentary",
    "Thriller",
    "Western",
    "Animation",
    "War",
    "Crime",
    "Fantasy",
    "Children",
    "Romance",
    "Horror"]
  const [activeGenres, updateActiveGenres] = useState([])
  const [moviesArr, updateMoviesArr] = useState(moviesData)

  console.log(moviesData.map(movie => movie.genre));

  const toggleItem = (array, value, updateArray) => {
    const existInArray = array.findIndex(item => item === value);
    if (existInArray >= 0) {
      const updatedArray = [...array]
      updatedArray.splice(existInArray, 1)
      updateArray(updatedArray)
    } else {
      updateArray([...array, value])
    }
  }

  const addToBasket = (movie) => {
    const existInArray = basket.findIndex(item => item.id === movie.id);
    if (existInArray >= 0) {
      const updatedArray = [...basket]
      updatedArray.splice(existInArray, 1)
      updateBasket(updatedArray)
    } else {
      updateBasket([...basket, movie])
    }
  }


  useEffect(() => {
    if (activeGenres.length) {
      updateMoviesArr(moviesData.filter(movie => activeGenres.find(activeGenre => movie.genre.split('|').filter(genre => genre === activeGenre).length)));
    } else {
      updateMoviesArr(moviesData)
    }
  }, [activeGenres])

  if (!moviesArr) {
    return null
  }

  console.log(basket);

  return (
    <main>
      <div className="container mt-5">
        <div className="row">
          <div className="col text-center">
            {genre.map(genre =>
              <button className={`filter__button mb-3${activeGenres.find(list => list === genre) ? ' filter__button--active' : ''} ml-3`} key={genre} onClick={() => toggleItem(activeGenres, genre, updateActiveGenres)}>{genre}</button>
            )}
          </div>
        </div>
        <div className="row justify-content-center justify-content-sm-start mt-5">
          {moviesArr.length ?
            moviesArr.map((movie) => (
              <div className="col-6 col-md-3" key={movie.id}>
                <div className="movie">
                  <div className='movie_inner'>
                    <div className='movie_front'>
                      <img className='movie__img' src={movie.image} alt="" />
                    </div>
                    <div className='movie_back'>
                      <p className='movie__description'>{movie.description}</p>
                    </div>
                  </div>
                  <h4 className='movie__title'>{movie.title}</h4>
                  <p>{`${movie.price} kr`}</p>
                  <button type='button' className={`movie__button ${basket.find(item => item.id === movie.id) ? 'movie__button--active' : ''}`} onClick={() => addToBasket(movie)}>{basket.find(item => item.id === movie.id) ? 'Remove' : 'Add'}</button>
                </div>
              </div>
            ))
            :
            <div className="col">
              <h4>unfortunately we don't have any movies available.</h4>
            </div>}
        </div>
      </div>
    </main>
  )
}
export default Movies;