const Hospital = require('../models/Hospital');

// Create Hospital
exports.createHospital = async (req, res) => {
  try {
    const hospital = new Hospital(req.body);
    await hospital.save();
    res.status(201).json(hospital);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Hospitals by City
exports.getHospitalsByCity = async (req, res) => {
  try {
    const { city } = req.query;
    const hospitals = await Hospital.find({ city });
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Hospital
exports.deleteHospital = async (req, res) => {
  try {
    const { id } = req.query;
    await Hospital.findByIdAndDelete(id);
    res.status(200).json({ message: 'Hospital deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Hospital
exports.updateHospital = async (req, res) => {
    try {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: 'Hospital ID is required' });
  
      const updatedHospital = await Hospital.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedHospital) return res.status(404).json({ error: 'Hospital not found' });
  
      res.status(200).json(updatedHospital);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  

// Add Hospital Details
exports.addHospitalDetails = async (req, res) => {
    try {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: 'Hospital ID is required' });
  
      const updatedHospital = await Hospital.findByIdAndUpdate(id, { $set: req.body }, { new: true });
      if (!updatedHospital) return res.status(404).json({ error: 'Hospital not found' });
  
      res.status(200).json(updatedHospital);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  

  