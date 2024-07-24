import React, { useState, useEffect } from 'react';
import { getHospitalById, updateHospital } from '../api';
import EditHospitalForm from '../components/EditHospitalForm';

const EditHospitalPage = ({ match }) => {
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

  const handleSubmit = async (values) => {
    try {
      await updateHospital(id, values);
      alert('Hospital updated successfully');
      // Redirect or update state
    } catch (error) {
      console.error('Error updating hospital:', error);
    }
  };

  if (!hospital) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Hospital</h1>
      <EditHospitalForm hospital={hospital} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditHospitalPage;
