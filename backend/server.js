const express = require('express');
const cors = require('cors');
const attendanceRoutes = require('./routes/attendance');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/attendance', attendanceRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
