// Write your code here
import Slider from 'react-slick'
import MoviesSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovieList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMovieList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  return (
    <div className="slider-main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video"
      />

      <div className="slider-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovieList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
