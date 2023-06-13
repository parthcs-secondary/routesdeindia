import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className="banner_image_container">
    <div className='banner__container'>
    {/* <div className='banner_company__name'>Routes De India</div> */}
      <div className='tag__line'>Explore. <b id='banner__word__dream'>Dream</b>. Discover.</div>
      <p className='banner__quote'>Life is too short for boring routines. Let's explore, laugh, and create unforgettable stories</p>
      <button className="find__your__trip__button">
        Find Your trip
      </button>
    </div>
    </div>
  )
}

export default Banner