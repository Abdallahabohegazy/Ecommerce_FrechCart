import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';


export default function Address() {
    const [loadingBtn, setloadingBtn] = useState(true);
    let { pay } = useContext(cartContext);
    let{id}=useParams()

    async function sendDataToApi( values) {
        setloadingBtn(false);
        let data = await pay(id , values);
        if(data.status === 'success'){
            window.location.href =data.session.url 
        }
    }

    let address = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: ''
        },
        onSubmit: (values) => {
            //send to api 
            sendDataToApi(values)
        }
    })
    // console.log(address.errors);

    return (
        <>
            <div>
                <div className="w-75 m-auto my-4">
                    <h2>Address Now:</h2>
                    <form onSubmit={address.handleSubmit}>

                        <label htmlFor="details">Details:</label>
                        <textarea
                            value={address.values.email}
                            onChange={address.handleChange}
                            type="text"
                            name="details"
                            className="form-control mb-3"
                            id="details"
                            onBlur={address.handleBlur}
                        ></textarea>

                        <label htmlFor="phone">Phone:</label>
                        <input
                            value={address.values.password}
                            onChange={address.handleChange}
                            type="text"
                            name="phone"
                            className="form-control mb-3"
                            id="phone"
                            onBlur={address.handleBlur}
                        />

                        <label htmlFor="city">City:</label>
                        <input
                            value={address.values.password}
                            onChange={address.handleChange}
                            type="text"
                            name="city"
                            className="form-control mb-3"
                            id="city"
                            onBlur={address.handleBlur}
                        />


                        <button disabled={!(address.dirty && address.isValid)} type='submit' className="btn bg-main text-white">{
                            loadingBtn ? 'Pay' : <i className='fa fa-spinner fa-spin'></i>
                        }</button>
                    </form>
                </div>
            </div>
        </>
    )
}
