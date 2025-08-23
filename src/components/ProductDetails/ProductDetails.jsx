import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading.jsx';
import { cartContext } from '../../context/cartContext.js';


export default function ProductDetails() {
    let {counter , setCounter}=useContext(cartContext);
    let x = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [loading, setLoading] = useState(true);
    async function getProductDetails() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`);
        setProductDetails(data.data)
        setLoading(false)
    }
    useEffect(() => {
        getProductDetails();
    }, []);
    if (loading) return <Loading />
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3 ">
                        <img src={productDetails.imageCover} className='w-100 rounded' alt="" />
                    </div>
                    <div className="col-md-9">
                        <h4>{productDetails.title}</h4>
                        <div className="my-3">{productDetails.description}</div>
                        <div className='d-flex justify-content-between my-4'>
                            <div>
                                <i className="fa-solid fa-star rating-color"></i>
                                {productDetails.ratingsAverage}
                            </div>
                        </div>
                        <button onClick={()=>setCounter(counter +1 )} className='btn bg-main w-100 text-white'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
