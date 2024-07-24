import React from 'react';
import HospitalForm from './HospitalForm';

const EditHospitalForm = ({ hospital, onSubmit }) => {
  const initialValues = {
    name: hospital.name || '',
    city: hospital.city || '',
    image: hospital.image || '',
    speciality: hospital.speciality || [],
    rating: hospital.rating || ''
  };

  return (
    <HospitalForm initialValues={initialValues} onSubmit={onSubmit} />
  );
}

export default EditHospitalForm;
