import React,{useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faHeart as faSolidHeart, faStar} from '@fortawesome/free-solid-svg-icons'
import './App.css'

import FirstImg from './assets/images/first-img.jpg'
import SecondImg from './assets/images/second-img.jpg'
import ThirdImg from './assets/images/third-img.jpg'
import FourthImg from './assets/images/fourth-img.jpg'


function App() {
  const [isFavourite, setIsFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const imgCarousel = [FirstImg,SecondImg,ThirdImg,FourthImg];
  const ratingArr = [1,2,3,4,5];

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
    autoplaySpeed: 1300,
  };
  return (
    <div className="App w-11/12 max-w-sm rounded-lg overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg">
      <div className="slider-container w-full">
        <Slider {...settings}>
          {imgCarousel.map((img, index) => (
            <div key={index} className='relative bg-slate-400'>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className='w-full h-44 object-cover mix-blend-multiply'
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='reservation-info py-4 px-6'>
        <div className='flex justify-between items-center'>
          <div className='text-sm'>
            <h1 className='font-bold'>Gramercy Taven</h1>
            <p>20th St, New York</p>
          </div>
          <div>
            <FontAwesomeIcon icon={isFavourite ? faSolidHeart : faHeart} 
            className='cursor-pointer'
              onClick={() => setIsFavourite(!isFavourite)}
              style={{color: isFavourite ? 'rgb(234 88 12)' : 'black'}}
            />
          </div>
        </div>
        <div className='rating-price'>
          <div>
            {ratingArr.map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar}  
                className='rating-icon cursor-pointer text-orange-600 text-xs'
                style={{
                  color:
                    hoverRating > index || rating > index
                      ? hoverRating > index
                        ? '#FFCC00' // Bright yellow when hovered
                        : 'orange' // Default selected star color
                      : 'lightgray', // Unselected stars
                }}

                onMouseEnter={() => setHoverRating(index + 1)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(index + 1)}
              />
            ))}
            <span className='text-xs ml-2'>(231 reviews)</span>
          </div>
        </div>
        <div className='my-5'>
          <p className='text-sm leading-6'>A quintessential New York City gem among the city's iconic establishments, 
            Gramercy Tavern serves as an extraordinary destination for special occasions and an elevated version of an everyday retreat. 
            It's the unique kind of place you choose for a celebration after a joyful engagement, 
            or casually wander into to seek refuge from an unexpected downpour.</p>
        </div>
      </div>
      <div className='bg-black text-white text-center py-2 hover:bg-orange-600 cursor-pointer transition-all'>
          <button>Reserve a table</button>
      </div>
    </div>
  )
}

export default App
