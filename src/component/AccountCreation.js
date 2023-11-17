
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AccountCreation.css';

function AccountCreation() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  form submission logic here, such as sending the data to a server
    console.log('Form submitted with data:', formData);

    const successfulLogin = true;

    if (successfulLogin) {
      // Show a success notification using react-toastify
      toast.success('Your Account is Created!!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Close the notification after 3000 milliseconds (3 seconds)
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AccountCreation;
