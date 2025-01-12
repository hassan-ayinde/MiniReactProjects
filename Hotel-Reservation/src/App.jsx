import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

import FirstImg from './assets/images/first-img.jpg'
import SecondImg from './assets/images/second-img.jpg'
import ThirdImg from './assets/images/third-img.jpg'
import FourthImg from './assets/images/fourth-img.jpg'


function App() {
  const imgCarousel = [FirstImg,SecondImg,ThirdImg,FourthImg];

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div className="App">
      <div className="slider-container w-full">
        <Slider {...settings}>
          {imgCarousel.map((img, index) => (
            <div key={index} className='relative bg-slate-400'>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className='w-full h-40 object-cover mix-blend-multiply'
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default App
