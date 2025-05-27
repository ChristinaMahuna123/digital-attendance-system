const express = require('express');
const router = express.Router();
const db = require('../db');

// Mark attendance
router.post('/', async (req, res) => {
  const { name, registrationNumber } = req.body;

  if (!name || !registrationNumber) {
    return res.status(400).json({ error: 'Name and registration number are required' });
  }

  try {
    await db.execute(
      'INSERT INTO attendance (name, registration_number) VALUES (?, ?)',
      [name, registrationNumber]
    );
    res.status(200).json({ message: 'Attendance marked successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get history (optional)
router.get('/:registrationNumber', async (req, res) => {
  const { registrationNumber } = req.params;

  try {
    const [rows] = await db.execute(
      'SELECT * FROM attendance WHERE registration_number = ? ORDER BY timestamp DESC',
      [registrationNumber]
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
