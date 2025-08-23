import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/cartContext';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Cart() {
  let { setCounter, getCart, deleteItem , updateQTY } = useContext(cartContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(null);


  useEffect(() => {
    (async () => {
      let data = await getCart();
      if(data?.response?.data.statusMsg === 'fail'){
      setData(null);

      }else{
      setData(data);
      }
      setLoading(false);
    })()
  }, []);

  async function deleteProductInCart(productId) {
    setLoadingBtn(productId);
    let data = await deleteItem(productId);
    console.log(data);
    if (data.status === 'success') {
      toast.error("Product delete successfully");
      setCounter(data.numOfCartItems);
      setData(data)
    }
    setLoadingBtn(null);
  }

    async function updateProductQuantity(productId , count) {
    let data = await updateQTY(productId , count);
    if (data.status === 'success') {
      toast.success("Product update successfully");
      setCounter(data.numOfCartItems);
      setData(data)
    }
  }

  if (loading) return <Loading />
  if(data == null || data.numOfCartItems === 0 ) return <h2 className='text-center my-5 text-main'>No items in cart.</h2>
  return (
    <div className='container my-2 bg-main-light p-3 rounded-1'>
      <h2>Shope Cart:</h2>
      <p className='text-main'>Total Cart Price : {data?.data.totalCartPrice} EGP</p>
      {data?.data.products.map((item) => {
        return <div key={item._id} className="row py-2 border-bottem">
          <div className="col-md-1">
            <img src={item.product.imageCover} className='w-100' alt="" />
          </div>
          <div className="col-md-11 d-flex justify-content-between">
            <div>
              <div className="m-1">{item.product.title.split(' ').slice(0, 3).join(' ')}</div>
              <div className="text-main m-1 p-0">Price: {item.price}</div>
              <button onClick={() => deleteProductInCart(item.product._id)} className='btn m-0 p-0 border-0 '  disabled={loadingBtn === item.product._id} >
                {loadingBtn === item.product._id
                  ? <i className='fa fa-spinner fa-spin text-center'></i>
                  : <> <i className='fa-solid fa-trash-can text-main'></i> Remove </>}
              </button>
            </div>
            <div>
              <button disabled={item.count >= item.product.quantity} onClick={()=>updateProductQuantity(item.product._id , item.count + 1)} className='btn border-btn'>+</button>
              <span className='p-2'>{item.count}</span>
              <button disabled={item.count <= 1} onClick={()=>updateProductQuantity(item.product._id , item.count - 1)}  className='btn border-btn'>-</button>
            </div>
          </div>
        </div>
      })}
      <Link to={`/address/${data.data._id}`} className='btn bg-main text-white my-3'>Place Order</Link>
    </div>
  )
}
