const express = require('express');
const Router = express.Router();
const { getAllCategories } = require('../controllers/categoryController');

Router.get('/', getAllCategories);

module.exports = Router;
