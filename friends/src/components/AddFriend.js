import React from 'react';
import { withFormik, Form, Field } from 'formik';

const AddFriend = () => {
  return (
    <Form>
      <div>
        <label htmlFor='name'>Name: </label>
        <Field type='text' name='name' autoComplete='off' placeholder='Name' />
      </div>
      <div>
        <label htmlFor='Age'>Age: </label>
        <Field type='text' name='age' autoComplete='off' placeholder='Age' />
      </div>
      <div>
        <label htmlFor='email'>Email: </label>
        <Field
          type='text'
          name='email'
          autoComplete='off'
          placeholder='Email'
        />
      </div>
      <button>Add Friend</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      name: '',
      age: '',
      email: '',
    };
  },
})(AddFriend);
