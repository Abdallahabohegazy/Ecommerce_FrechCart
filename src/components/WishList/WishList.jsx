import React, { useContext } from 'react';
import { wishlistContext } from '../../context/wishlistContext';
import Product from '../Product/Product';
import { Helmet } from 'react-helmet';

export default function WishList() {
  const { wishlistItems, removeFromWishlist } = useContext(wishlistContext);



  return (
    <div className="container py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>WishList Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {wishlistItems.length === 0 ? (
        <h2 className='text-center text-main'>Your wishlist is empty.</h2>
      ) : (
        <div className="container">
          <h2>My Wishlist</h2>
          <div className="row">
            {wishlistItems.map(product => (
              <Product product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}