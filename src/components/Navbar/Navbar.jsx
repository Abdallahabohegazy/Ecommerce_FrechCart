import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/freshcart-logo.svg';
import { cartContext } from '../../context/cartContext';
import { wishlistContext } from '../../context/wishlistContext';

export default function Navbar() {
  const { counter, setCounter, getCart } = useContext(cartContext);
  const { wishlistItems } = useContext(wishlistContext);

  const [showWishlistBadge, setShowWishlistBadge] = useState(false);

  useEffect(() => {
    (async () => {
      let data = await getCart();
      if (data?.numOfCartItems) {
        setCounter(data.numOfCartItems);
      }
    })();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWishlistBadge(wishlistItems.length > 0);
    }, 500); 
    return () => clearTimeout(timer);
  }, [wishlistItems]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
      <div className="container-fluid mx-3">
        <NavLink className="navbar-brand" to="/home">
          <img src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/categories">Categories</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link" to="/brands">Brands</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Wishlist */}
            <li className="nav-item position-relative mx-2">
              <NavLink to="/wishlist" className="nav-link">
                <i className="fa-solid fa-heart cartIcon"></i>
              </NavLink>
              <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${showWishlistBadge ? "show-badge" : "hide-badge"}`}>
                {wishlistItems.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </li>

            {/* Cart */}
            <li className="nav-item position-relative mx-2">
              <NavLink className="nav-link" to="/cart">
                <i className="fa-solid fa-cart-shopping cartIcon"></i>
              </NavLink>
              <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${counter ? "show-badge" : "hide-badge"}`}>
                {counter}
                <span className="visually-hidden">unread messages</span>
              </span>
            </li>

            {/* Sign Out */}
            <li className="nav-item position-relative mx-2">
              <NavLink
                className="nav-link text-danger fw-bold"
                to="/signin"
                onClick={(e) => {
                  const confirmed = window.confirm("Are you sure you want to sign out?");
                  if (!confirmed) {
                    e.preventDefault();
                  }
                }}
              >
                <i className="fas fa-sign-out-alt cartIcon"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
