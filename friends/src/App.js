import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
  const PrivateRoute = ({ component: Homepage, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Homepage {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
  return (
    <div className='App'>
      <div>
        <p>
          <Link to='/'>Login</Link>
        </p>
        <p>
          <Link to='/Homepage'>Homepage</Link>
        </p>
      </div>
      <Route exact path='/' component={Login} />
      <PrivateRoute exact path='/Homepage' component={Homepage} />
    </div>
  );
}

export default App;
