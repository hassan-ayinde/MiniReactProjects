import React from 'react'
import PlantImg from '../../assets/images/profile-plant.jpg'
import RightPlantImg from '../../assets/images/right-plant.jpg'
import LeftPlantImg from '../../assets/images/left-plant.jpg'
import Gardener from '../../assets/images/gardener.jpg'
import { BiSolidQuoteRight } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Home = () => {
  return (
    <section className='sm:flex items-center justify-between'>
      <div>
        <BiSolidQuoteRight />
      </div>
      <div className='relative'>
        <div>
          <img src={PlantImg} alt="" />
        </div>
        <div className='flex flex-col gap-4 bg-gray-300 p-4 rounded-lg shadow-lg w-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex items-center'>
            <div className='w-16 h-auto rounded-lg overflow-hidden'>
              <img src={Gardener} alt=""/>
            </div>
            <div>
              <h3>Debra D. Gilliam</h3>
              <div className='flex items-center'>
                <p>4.8</p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
          <div>
            <p>
              "Absolutely love this plant App! It's like having a green thumb in your pocket. So easy to use, with tons of helpful tips and remainder for plant care"
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1>Make your home beautiful with plants</h1>
        <p>
          Unlock the secret of greenery and infuse every corner with life and serenity. 
          From vibrant blooms to lush foliage, let your home reflect the timeless elegance of nature's bounty
        </p>
        <div className='flex items-center justify-evenly w-full'>
          <img src={LeftPlantImg} alt=""  className='w-30 h-30 sm:w-48 sm:h-56 object-cover'/>
          <img src={RightPlantImg} alt="" className='w-30 h-30 sm:w-48 sm:h-56 object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default Home