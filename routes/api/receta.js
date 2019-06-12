const express= require('express');
var router = express.Router();
var uuid=require('uuid/v4');

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

router.put('/:id', (req, res, next)=>{
    var id = req.params.id;
    var recetamod = {};
    var recetaorg = {};
    recetaCollection = recetaCollection.map((e, i)=>{
        if(e.id === id){
            recetaorg = Object.assign({}, e);
            return recetamod = Object.assign({}, e, req.body);
        }
        return e;
    });
    res.status(200).json({Original: recetaorg, Modificada: recetamod});
});

router.delete('/:id',(req, res, next)=>{
    var id = req.params.id;
    var recetaEliminada = {};
    recetaCollection = recetaCollection.filter((e, i)=>{
        if(e.id===id){
            recetaEliminada = Object.assign({}, e)
            return false;
        }
        return true;
    });
    res.status(200).json({Eliminada: recetaEliminada, Coleccion: recetaCollection});
});


module.exports=router;