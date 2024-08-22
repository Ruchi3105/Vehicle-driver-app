import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditDriverForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/drivers/${id}`)
      .then(response => {
        setName(response.data.name);
        setPhone(response.data.phone);
      })
      .catch(error => console.error('Error fetching driver:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedDriver = { name, phone };

    axios.put(`http://localhost:5000/drivers/${id}`, updatedDriver)
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating driver:', error));
  };

  return (
    <div>
      <h1>Edit Driver</h1>
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
        <button type="submit">Update Driver</button>
      </form>
    </div>
  );
};

export default EditDriverForm;
