import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/cartContext';
import { toast } from 'react-toastify';
import { wishlistContext } from '../../context/wishlistContext';

export default function Product({ product }) {
    let { setCounter, addToCart } = useContext(cartContext);
    const [loadingBtn, setloadingBtn] = useState(true);

    ////////////////////////////////////////////////////////

    const [btnHart, setBtnHart] = useState(false); // زرار القلب

    async function addProductToCart(productId) {
        setloadingBtn(false);
        let data = await addToCart(productId);
        if (data.status === 'success') {
            toast.success("Product added successfully");
            setCounter(data.numOfCartItems);
        }
        setloadingBtn(true);
    }

    // اختيارية: هنا ممكن تبعت request لـ wishlist API بدل الـ toggle المحلي
    function handleWishlistClick(e) {
        e.preventDefault();
        e.stopPropagation(); // عشان ما يفتحش صفحة التفاصيل
        setBtnHart(prev => !prev);
        // TODO: call add/remove wishlist API هنا لو موجود
    }


    /////////////////////////////////////////////////////////////


        const { addToWishlist, isInWishlist } = useContext(wishlistContext);
    const [isWished, setIsWished] = useState(isInWishlist(product._id));

    function handleWishlistClick(e) {
        e.preventDefault();
        e.stopPropagation();
        addToWishlist(product);
        setIsWished(!isWished);
        toast.success(isWished ? "Removed from wishlist" : "Added to wishlist");
    }

    //////////////////////////////////////////////////////////////////////////

    return (
        <div className="col-md-2">
            <div className="product cursor-pointer p-3 rounded-2 position-relative">

                <button
                    type="button"
                    onClick={handleWishlistClick}
                    className={`btn btn-sm rounded-circle position-absolute top-0 end-0 m-2 ${isWished ? 'border-0 bg-transparent no-hover' : 'btn-light'}`}>
                    <i className={`fa-heart ${isWished ? 'fa-solid text-danger' : 'fa-regular text-secondary'}`}></i>
                </button>


                <Link to={'/product-details/' + product._id}>
                    <img src={product.imageCover} className='w-100 rounded' alt="" />
                    <span className='text-main'>{product.category.name}</span>
                    <h5 className='my-2 fw-bold'>{product.title.split(' ').slice(0, 2).join(' ')}</h5>
                    <div className='d-flex justify-content-between my-3'>
                        <div>{product.price} EGP</div>
                        <div>
                            <i className="fa-solid fa-star rating-color"></i>
                            {product.ratingsAverage}
                        </div>
                    </div>
                </Link>

                <button
                    onClick={() => (addProductToCart(product._id))}
                    disabled={!loadingBtn}
                    className='btn bg-main w-100 text-white'
                >
                    {loadingBtn ? 'Add To Cart' : <i className='fa fa-spinner fa-spin'></i>}
                </button>
            </div>
        </div>
    )
}
