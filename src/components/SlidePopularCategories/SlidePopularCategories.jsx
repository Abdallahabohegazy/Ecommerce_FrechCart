
// import React from 'react'

// export default function Categories() {
//   return (
//     <div>
//       Categories
//     </div>
//   )
// }

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import Slider from 'react-slick';

export default function SlidePopularCategories() {
  function getCategories() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories/');
  }
  let { data } = useQuery('getCategories', getCategories)
  // const [categories, setCategories] = useState([]);
  // async function getCategories() {
  //   let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  //   setCategories(data.data);
  // }
  // useEffect(() => {
  //   getCategories();
  // }, []);
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      }
    ]
  };
  return (
    <>
      <div className='my-4 container '>
        <h3 className='mb-3'>Shop Popular Categories</h3>
        <Slider  {...settings}>
          {data?.data.data.map((categorie) => (
            <div className="px-2" key={categorie._id}>
              <img src={categorie.image} height={200} className='w-100 d-block rounded' alt={categorie.name} />
              <h6 className='text-center mt-2'>{categorie.name}</h6>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

