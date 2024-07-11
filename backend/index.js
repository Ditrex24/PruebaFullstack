const express = require('express');
const sequelize = require('./config/database');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Importacion y rutas
const userRoutes = require('./routes/User');
app.use('/api/v1', userRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
