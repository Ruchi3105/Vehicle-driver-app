import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DriverList from './components/DriverList';
import DriverForm from './components/DriverForm';
import DriverDetail from './components/DriverDetail';
import EditDriverForm from './components/EditDriverForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DriverList />} />
        <Route path="/add-driver" element={<DriverForm />} />
        <Route path="/drivers/:id" element={<DriverDetail />} />
        <Route path="/edit-driver/:id" element={<EditDriverForm />} />
      </Routes>
    </Router>
  );
};

export default App;
