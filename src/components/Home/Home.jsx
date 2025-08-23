import React from 'react'
import MainSlider from '../MainSlider/MainSlider.jsx'
import SlidePopularCategories from '../SlidePopularCategories/SlidePopularCategories.jsx'
import Products from '../Products/Products.jsx'

export default function Home() {
  return (
    <div>
      <MainSlider/>
      <SlidePopularCategories/>
      <Products/>
    </div>
  )
}
