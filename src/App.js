import React from 'react'
import Home from './components/Home/Home.jsx'
import Products from './components/Products/Products.jsx'
import Brands from './components/Brands/Brands.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx'
import Cart from './components/Cart/Cart.jsx'
import WishList from './components/WishList/WishList.jsx'
import Signin from './components/Signin/Signin.jsx'
import Signup from './components/Signup/Signup.jsx'
import AuthLayout from './Layouts/AuthLayout.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import { Offline } from "react-detect-offline";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import Categories from './components/Categories/Categories.jsx'
import CartContextProvider from './context/cartContext.js'
import { ToastContainer} from 'react-toastify';
import Address from './components/Adrdess/Adrdess.jsx'
import WishlistContextProvider from './context/wishlistContext.js'



export default function App() {

  let routes = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { index: true, element: <ProtectedRoutes><Home /></ProtectedRoutes> },
        { path: 'home', element: <ProtectedRoutes><Home /></ProtectedRoutes> },
        { path: 'products', element: <ProtectedRoutes><Products /> </ProtectedRoutes> },
        { path: 'categories', element: <ProtectedRoutes><Categories /> </ProtectedRoutes> },
        { path: 'brands', element: <ProtectedRoutes><Brands /> </ProtectedRoutes> },
        { path: 'cart', element: <ProtectedRoutes><Cart /> </ProtectedRoutes> },
        { path: 'wishlist', element: <ProtectedRoutes><WishList /> </ProtectedRoutes> },
        { path: 'product-details/:id', element: <ProtectedRoutes><ProductDetails /> </ProtectedRoutes> },
        { path: 'address/:id', element: <ProtectedRoutes><Address /> </ProtectedRoutes> },
        { path: '*', element: <NotFound /> },
      ]
    },
    {
      path: '/', element: <AuthLayout />, children: [
        { path: 'signup', element: <Signup /> },
        { path: 'signin', element: <Signin /> }
      ]
    }
  ])

  return (
    <>
    <WishlistContextProvider>
      <Offline>
        <div className='offline'>You are offline Now!</div>
      </Offline>
      <ToastContainer  theme='colored' autoClose={1000}/>
      <CartContextProvider>
        <RouterProvider router={routes} />
      </CartContextProvider>
    </WishlistContextProvider>
    </>
  )
}
