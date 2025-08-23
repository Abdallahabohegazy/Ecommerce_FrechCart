import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function Signup() {
  // function validate(values) {
  //   const myError = {}
  //   if (!values.name) {
  //     myError.name = "Name is required.";
  //   }
  //   if (!values.email) {
  //     myError.email = "Email is required.";
  //   }
  //   if (!/^[A-Z][A-Za-z0-9]{6,}$/.test(values.password)) {
  //     myError.password = 'Password must be 7 characters or more and start with a capital letter';
  //   }
  //   if (values.rePassword !== values.password) {
  //     myError.rePassword = 'Password and rePasswords do not match.';
  //   }


  //   return myError;
  // }
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(true);

  function sendDataToApi(values) {
    setLoading(false);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
      .then(({ data }) => {
        if(data.message === 'success'){
          navigate('/signin')
        }
      }).catch((err) => {
        setErrorMsg(err.response.data.message);
        setLoading(true);
      });
  }

  function validationSchema(values) {
    const schema = new Yup.object({
      name: Yup.string().min(3).max(50).required(),
      email: Yup.string().email('Invalid email format').required(),
      password: Yup.string().matches(/^[A-Z][A-Za-z0-9]{6,}$/, 'Invalid password format').required('Password must be 7 characters or more and start with a capital letter'),
      rePassword: Yup.string().oneOf([Yup.ref('password')], 'Password and rePasswords do not match.').required(),
    })
    return schema;
  }
  let register = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: ''
    },
    // validate,
    validationSchema,
    onSubmit: (values) => {
      //send to api 
      sendDataToApi(values)
    }
  })
  // console.log(register.errors);
  return (
    <>
      <div>
        <div className="w-75 m-auto my-4">
          <h2>Register Now:</h2>
          <form onSubmit={register.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              value={register.values.name}
              onChange={register.handleChange}
              type="text"
              name="name"
              className="form-control mb-3"
              id="name"
              onBlur={register.handleBlur}
            />
            {register.errors.name && register.touched.name ? <div className="alert alert-danger">{register.errors.name}</div> : ''}
            <label htmlFor="email">Email:</label>
            <input
              value={register.values.email}
              onChange={register.handleChange}
              type="email"
              name="email"
              className="form-control mb-3"
              id="email"
              onBlur={register.handleBlur}
            />
            {register.errors.email && register.touched.email ? <div className="alert alert-danger">{register.errors.email}</div> : ''}
            <label htmlFor="password">Password:</label>
            <input
              value={register.values.password}
              onChange={register.handleChange}
              type="password"
              name="password"
              className="form-control mb-3"
              id="password"
              onBlur={register.handleBlur}
            />
            {register.errors.password && register.touched.password ? <div className="alert alert-danger">{register.errors.password}</div> : ''}
            <label htmlFor="rePassword">rePassword:</label>
            <input
              value={register.values.rePassword}
              onChange={register.handleChange}
              type="password"
              name="rePassword"
              className="form-control mb-3"
              id="rePassword"
              onBlur={register.handleBlur}
            />
            {register.errors.rePassword && register.touched.rePassword ? <div className="alert alert-danger">{register.errors.rePassword}</div> : ''}
            {errorMsg ? <div className="alert alert-danger">{errorMsg}</div> : ''}
            <button disabled={!(register.dirty && register.isValid)} type='submit' className="btn bg-main text-white">{
                loading ? 'Sign UP' : <i className='fa fa-spinner fa-spin'></i>
              }</button>
          </form>
        </div>
      </div>
    </>
  )
}
