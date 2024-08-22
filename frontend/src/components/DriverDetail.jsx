import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DriverDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/drivers/${id}`)
      .then(response => setDriver(response.data))
      .catch(error => console.error('Error fetching driver:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/drivers/${id}`)
      .then(() => navigate('/'))
      .catch(error => console.error('Error deleting driver:', error));
  };

  const handleEdit = () => {
    navigate(`/edit-driver/${id}`);
  };

  if (!driver) return <div>Driver not found</div>;

  return (
    <div>
      <h1>{driver.name}</h1>
      <p>Phone: {driver.phone}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DriverDetail;
