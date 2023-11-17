import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import UserDetails from './component/UserDetails';
import AccountCreation from './component/AccountCreation';

function App() {
  const [toggleButton, setToggleButton] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo-container">
          <h2>Greenify..</h2>
        </div>
      </div>

      {/* ToastContainer for displaying notifications */}
      <ToastContainer />

      {/* Buttons Container */}
      <div className='buttonContainer'>
        <div onClick={() => setToggleButton(false)}>
          <img src={process.env.PUBLIC_URL + '/userDetails.png'} alt="User Icon" width="40" height="40" />
          <h4>User Details</h4>
        </div>

        <div onClick={() => setToggleButton(true)}>
          <img src={process.env.PUBLIC_URL + '/accountCreation.png'} alt="Account Icon" width="40" height="40" />
          <h4>Account Creation</h4>
        </div>
      </div>

      {/* Render UserDetails or AccountCreation based on toggleButton state */}
      {toggleButton ? <AccountCreation /> : <UserDetails />}
    </div>
  );
}

export default App;
