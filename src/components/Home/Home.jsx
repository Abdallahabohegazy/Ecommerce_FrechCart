import React from 'react'
import MainSlider from '../MainSlider/MainSlider.jsx'
import SlidePopularCategories from '../SlidePopularCategories/SlidePopularCategories.jsx'
import Products from '../Products/Products.jsx'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div>


      <MainSlider />
      <SlidePopularCategories />
      <Products />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  )
}
