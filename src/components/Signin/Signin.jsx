import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function Signin() {
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [loadingBtn, setloadingBtn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  function sendDataToApi(values) {
    setloadingBtn(false);
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values)
      .then(({ data }) => {
        if (data.message === 'success') {
          localStorage.setItem('token', data.token);
          navigate('/home')
        }
      }).catch((err) => {
        setErrorMsg(err.response.data.message);
        setloadingBtn(true);
      });
  }

  function validationSchema(values) {
    const schema = new Yup.object({
      email: Yup.string().email('Invalid email format').required(),
      password: Yup.string().matches(/^[A-Z][A-Za-z0-9]{6,}$/, 'Invalid password format').required('Password must be 7 characters or more and start with a capital letter'),
    })
    return schema;
  }
  let login = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validate,
    validationSchema,
    onSubmit: (values) => {
      //send to api 
      sendDataToApi(values)
    }
  })
  // console.log(login.errors);
  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Signin Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <div className="w-75 m-auto my-4">
          <h2>Login Now:</h2>
          <form onSubmit={login.handleSubmit}>

            <label htmlFor="email">Email:</label>
            <input
              value={login.values.email}
              onChange={login.handleChange}
              type="email"
              name="email"
              className="form-control mb-3"
              id="email"
              onBlur={login.handleBlur}
            />
            {login.errors.email && login.touched.email ? <div className="alert alert-danger">{login.errors.email}</div> : ''}

            <label htmlFor="password">Password:</label>
            <div style={{ position: 'relative' }}>
            <input
              value={login.values.password}
              onChange={login.handleChange}
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="form-control mb-3"
              id="password"
              onBlur={login.handleBlur}
              style={{ paddingRight: '40px' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
            </div>

            {login.errors.password && login.touched.password ? <div className="alert alert-danger">{login.errors.password}</div> : ''}

            {errorMsg ? <div className="alert alert-danger">{errorMsg}</div> : ''}

            <button disabled={!(login.dirty && login.isValid)} type='submit' className="btn bg-main text-white">{
              loadingBtn ? 'Sign In' : <i className='fa fa-spinner fa-spin'></i>
            }</button>
          </form>
        </div>
      </div>
    </>
  )
}
