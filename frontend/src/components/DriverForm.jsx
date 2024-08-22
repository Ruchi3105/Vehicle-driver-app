import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DriverForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDriver = { name, phone };

    axios.post('http://localhost:5000/drivers', newDriver)
      .then(() => navigate('/'))
      .catch(error => console.error('Error adding driver:', error));
  };

  return (
    <div>
      <h1>Add New Driver</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Add Driver</button>
      </form>
    </div>
  );
};

export default DriverForm;
