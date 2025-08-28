// import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Loading/Loading.jsx';
import Product from '../Product/Product.jsx';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';


export default function Products() {

  function getProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }
  let { data, isLoading } = useQuery('getProducts', getProducts)
  // console.log(data?.data.data);


  // const [products, setProducts] = useState([]);
  // const [loading , setLoading] = useState(true)
  // async function getProducts() {
  //   let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
  //   // console.log(data.data); test
  //   setProducts(data.data);
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   getProducts();
  // }, [])



  if (isLoading) return <Loading />
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container my-5">
        <div className="row g-3">
          {data?.data.data.map((product) => {
            return <Product product={product} key={product._id} />
          })}
        </div>
      </div>
    </>
  )
}
