import React from 'react'
import error from '../../assets/images/error.svg'
import { Helmet } from 'react-helmet'
export default function NotFound() {
  return (
    <div className='d-flex align-items-center justify-content-center mt-5'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NotFound Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img src={error} alt="" />
    </div>
  )
}
