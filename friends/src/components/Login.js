import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function Login({ touched, errors }) {
  const token = localStorage.getItem('token');

  if (token) {
    return <Redirect to='/Homepage' />;
  }

  return (
    <Form className='form'>
      <div className='form-group'>
        <label className='label'>Username</label>
        <Field className='input' name='username' type='text' />
        <p>{touched.username && errors.username}</p>
      </div>
      <div className='form-group'>
        <label className='label'>Password</label>
        <Field
          className='input'
          name='password'
          type='password'
          autoComplete='off'
        />
      </div>
      <p>{touched.password && errors.password}</p>
      <button className='btn'>LogIn</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: '',
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .max(15)
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
  }),
  handleSubmit(values, formikBag) {
    const url = 'http://localhost:5000/api/login';
    axios
      .post(url, values)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        formikBag.props.history.push('/Homepage');
      })
      .catch(e => {
        console.log(e.response.data);
      });
  },
})(Login);
