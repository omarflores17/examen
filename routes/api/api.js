const express = require('express');
const router = express.Router();
const recetaApi= require('./receta');

router.use('/receta', recetaApi);

module.exports=router;