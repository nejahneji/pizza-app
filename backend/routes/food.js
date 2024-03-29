const express = require('express');
const { addFood, getFood, deleteFood, editFood, getFoodById } = require('../controllers/food.controller');
const isAuth = require('../middlewares/isAuth');
const router = express.Router();
const upload = require('../middlewares/upload')


router.post('/add',upload.single('avatar'),addFood);
router.get('/get',getFood);
router.get('/:id',getFoodById)
router.delete('/delete/:id', deleteFood);
router.put('/update/:id', upload.single('avatar'),editFood);
module.exports= router;
