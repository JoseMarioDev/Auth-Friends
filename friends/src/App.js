import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className='App'>
      <div>
        <Link to='/'>Login</Link>
        <Link to='/Homepage'>Homepage</Link>
      </div>
      <Route exact path='/' component={Login} />
      <Route
        exact
        path='/Homepage'
        render={props => {
          const token = localStorage.getItem('token');

          if (!token) {
            return <Redirect to='/' />;
          }
          return <Homepage {...props} />;
        }}
      />
    </div>
  );
}

export default App;
