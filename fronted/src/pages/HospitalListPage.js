import React, { useState, useEffect } from 'react';
import { getHospitalsByCity, deleteHospital } from '../api';
import HospitalList from '../components/HospitalList';

const HospitalListPage = () => {
  const [hospitals, setHospitals] = useState([]);
  const [city, setCity] = useState('');

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await getHospitalsByCity(city);
        setHospitals(response.data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
  }, [city]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this hospital?')) {
      try {
        await deleteHospital(id);
        setHospitals(hospitals.filter(hospital => hospital._id !== id));
      } catch (error) {
        console.error('Error deleting hospital:', error);
      }
    }
  };

  return (
    <div>
      <h1>Hospitals List</h1>
      <input
        type="text"
        placeholder="Filter by city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <HospitalList hospitals={hospitals} onDelete={handleDelete} />
    </div>
  );
}

export default HospitalListPage;
