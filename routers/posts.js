const express = require('express');
const router = express.Router();

//index

router.get('/', (req, res) => {
  res.send('Visualizzo la lista dei post')
})

//show
router.get('/:id', (req,res) =>{
  res.send (`Visualizzo il post con id ${req.params.id}`)
})

//store
router.post('/', (req,res) =>{
  res.send('Nuovo post')
})

//update
router.put('/:id', (req,res)=>{
  res.send(`Modifico l'elemento con id ${req.params.id} `)
})

//modify
router.patch('/:id', (req, res)=>{
  res.send(`Modifico alcune proprietà dell'elemento con id ${req.params.id}`)
})

//destroy
router.delete('/:id', (req,res)=>{
  res.send(`Elimino elemento con id ${req.params.id}`)
})
module.exports = router;