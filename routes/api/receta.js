const express= require('express');
var router = express.Router();
var uuid=require('uuid/v4')

var recetaCollection = [];

var recetaStruct={
    id:0,
    receta:'',
    precio:0,
    tipo:'',
    obs:'',
    estado:''
}

recetaCollection.push(Object.assign({},recetaStruct,{
    id:uuid(),
    receta:'Camarones en salsa',
    precio:150,
    tipo:'Mariscos',
    obs:'Servir termino medio',
    estado:'ACT'
}));

router.get('/',(req, res, next)=>{
    res.status(200).json(recetaCollection)
});

router.post('/',(req, res, next)=>{
    var newReceta = Object.assign({}, recetaStruct, req.body, {id:uuid()});
    recetaCollection.push(newReceta);
    res.status(200).json(newReceta);
});

module.exports=router;