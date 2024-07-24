const express = require('express');
const {
  createHospital,
  getHospitalsByCity,
  deleteHospital,
  updateHospital,
  addHospitalDetails
} = require('../controllers/hospitalController');
const router = express.Router();

router.post('/create', createHospital);
router.get('/', getHospitalsByCity);
router.delete('/delete', deleteHospital);
router.put('/update', updateHospital);
router.post('/details', addHospitalDetails);

module.exports = router;
