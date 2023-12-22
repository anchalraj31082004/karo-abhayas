import React, { useEffect, useState } from 'react'
import { Carousel, Review, TopStudent} from '../components'
import {images} from "../utils/Images"
import {Link} from 'react-router-dom'

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const visibleMessage = () => {
    setTimeout(()=>{
      setIsVisible(true);
    },5000);
    setIsVisible(false);
  }

  useEffect(()=>{
    visibleMessage();
  },[])


  return (
    <div className='md:px-9 pb-8 md:py-8 flex flex-col gap-7'>
      <p
        className={`${
          isVisible ? 'hidden' : 'block'
        } animate-pulse absolute z-50 bg-stone-500/90 h-64 w-[90%] md:w-[450px] shadow-black/70 backdrop-filter backdrop-blur-sm shadow-xl text-white flex items-center justify-center rounded-lg left-1/2 transform -translate-x-1/2 mt-5 md:mt-[8%]`}
      >
        Please visit{' '}
        <Link className='text-sky-400 text-base md:text-lg font-bold mx-2' to='/products'>
          Product
        </Link>{' '}
        and{' '}
        <Link to='/cart' className='text-sky-400 text-base md:text-lg font-bold mx-2'>
          cart
        </Link>{' '}
        page
      </p>
      <Carousel images={images}/>
      <TopStudent/>
      <Review/>
    </div>
  )
}

export default HomePage