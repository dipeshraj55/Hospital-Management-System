import React from 'react';

const HospitalDetails = ({ hospital }) => {
  return (
    <div>
      <h2>{hospital.name}</h2>
      <img src={hospital.image} alt={hospital.name} />
      <p>City: {hospital.city}</p>
      <p>Specialities: {hospital.speciality.join(', ')}</p>
      <p>Rating: {hospital.rating}</p>
      <p>Description: {hospital.description}</p>
      <p>Number of Doctors: {hospital.numberOfDoctors}</p>
      <p>Number of Departments: {hospital.numberOfDepartments}</p>
      {/* Additional hospital details */}
    </div>
  );
}

export default HospitalDetails;
