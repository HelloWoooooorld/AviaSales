import './login.css';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory() || [];
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    let status = auth.signin(data.login, data.password);
    if (status) {
      history.push("/home");
    }
  };

  return (
    <div className='login-page'>
      <div className='form'>
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('login', { required: true })}
            type='text'
            placeholder='username'
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            {...register('password', { required: true })}
            type='password'
            placeholder='password'
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <button type='submit'>login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
