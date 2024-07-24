import React, { useState, useEffect } from 'react';
import { getHospitalById, addHospitalDetails } from '../api'; // Ensure the import is correct

const HospitalDetailsPage = ({ match }) => {
  const [hospital, setHospital] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const response = await getHospitalById(id);
        setHospital(response.data);
      } catch (error) {
        console.error('Error fetching hospital details:', error);
      }
    };

    fetchHospital();
  }, [id]);

  const handleAddDetails = async (details) => {
    try {
      await addHospitalDetails(id, details);
      alert('Hospital details added successfully');
      // Redirect or update state
    } catch (error) {
      console.error('Error adding hospital details:', error);
    }
  };

  if (!hospital) return <p>Loading...</p>;

  return (
    <div>
      <h1>Hospital Details</h1>
      {/* Render hospital details and provide a way to add new details */}
    </div>
  );
}

export default HospitalDetailsPage;

