const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./routes/userRoutes');
const { sequelize } = require('./models');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin:'http://localhost:3001'
}))


app.use(bodyParser.json());
app.use('/api/v1/users', userRouter);


app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  sequelize.authenticate().then(() => {
    console.log('Database connected!');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
});