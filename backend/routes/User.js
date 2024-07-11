const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = await User.create({ username, email, password });
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Listado de usuarios
router.get('/users', async (req, res) => {
  const { page = 1, count = 10 } = req.query;
  try {
    const users = await User.findAll({
      offset: (page - 1) * count,
      limit: Number(count)
    });
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Obtener un solo usuario
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Actualizar un usuario
router.put('/users/:id', async (req, res) => {
  const { username, email, password } = req.body;
  const userFields = { username, email };
  if (password) {
    const salt = await bcrypt.genSalt(10);
    userFields.password = await bcrypt.hash(password, salt);
  }
  try {
    let user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    await User.update(userFields, { where: { id: req.params.id } });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Eliminar un usuario
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    await User.destroy({ where: { id: req.params.id } });
    res.json({ msg: 'User removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
