import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DriverList.css';

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch drivers from the backend
    axios.get('http://localhost:5000/drivers')
      .then(response => setDrivers(response.data))
      .catch(error => console.error('Error fetching drivers:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.phone.includes(searchTerm)
  );

  return (
    <div>
      <h1>Drivers</h1>
      <input
        type="text"
        placeholder="Search by name or phone"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Link to="/add-driver">
        <button>Add New Driver</button>
      </Link>
      <div>
        {filteredDrivers.map((driver) => (
          <Link to={`/drivers/${driver._id}`} key={driver._id}>
            <div className="driver-card">
              <h2>{driver.name}</h2>
              <p>{driver.phone}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DriverList;
