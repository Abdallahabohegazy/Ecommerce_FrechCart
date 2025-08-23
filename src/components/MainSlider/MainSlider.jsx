import React from 'react'
import Slider from 'react-slick';
import slide1 from '../../assets/images/slide-1.gif'
import slide2 from '../../assets/images/slide-2.avif'
import slide3 from '../../assets/images/slide-3.avif'
import slide4 from '../../assets/images/slide-4.avif'
export default function MainSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows : false,
  };
  return (
    <div className='w-100'>
      <Slider {...settings}>
        <img src={slide1} alt="" />
        <img src={slide2} alt="" />
        <img src={slide3} alt="" />
        <img src={slide4} alt="" />
      </Slider>
    </div>
  )
}
