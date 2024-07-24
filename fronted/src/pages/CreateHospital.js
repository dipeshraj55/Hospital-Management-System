import React from 'react';
import HospitalForm from '../components/HospitalForm';
import { createHospital } from '../api';

const CreateHospital = () => {
  const handleSubmit = async (values) => {
    try {
      await createHospital(values);
      alert('Hospital created successfully');
      // Redirect or update state
    } catch (error) {
      console.error('Error creating hospital:', error);
    }
  };

  return (
    <div>
      <h1>Create Hospital</h1>
      <HospitalForm initialValues={{ name: '', city: '', image: '', speciality: [], rating: '' }} onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateHospital;
