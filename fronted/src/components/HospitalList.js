import React from 'react';
import { Link } from 'react-router-dom';

const HospitalList = ({ hospitals, onDelete }) => {
  return (
    <div>
      <h2>Hospitals List</h2>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital._id}>
            <Link to={`/hospitals/${hospital._id}`}>{hospital.name}</Link>
            <button onClick={() => onDelete(hospital._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HospitalList;
