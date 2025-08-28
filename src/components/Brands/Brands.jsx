import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading.jsx';
import Brand from '../Brand/Brand.jsx';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';

export default function Brands() {
  function getBrands() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands/');
  }
  let { data, isLoading } = useQuery('getBrands', getBrands)
  // const [brands, setBrands] = useState([]);
  // const [loading, setLoading] = useState(true);

  // async function getBrands() {
  //   let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/`);
  //   setBrands(data.data); 
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   getBrands();
  // }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="container my-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Brands Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="row">
        {data?.data.data.map((brand) => {
          return <Brand brand={brand} key={brand._id} />
        })}
      </div>
    </div>
  );
}
