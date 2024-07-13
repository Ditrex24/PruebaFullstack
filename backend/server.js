const express = require('express');
const app = express();
const { sequelize } = require('./models');
const userRouter = require('./routes/userRoutes');
require('dotenv').config();

app.use(express.json());

app.use('/api/v1/users', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
