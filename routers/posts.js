const express = require("express")
const router = express.Router()

//CRUD 

//! Index
router.get("/cakes", (req,res) =>{
    console.log('Lista dei post:')
    res.json(Router)
})

//! Show 

router.get("/cakes/:id", (req,res) => {
    const id = req.params.id
    res.send(`Ecco i post con id ${id}`)
 })

//! Store 

router.post("/cakes", (req,res) => {
    res.send(`Creazione del nuovo post`)
})

//! Update 

router.put("/cakes/:id", (req,res) => {
    const id = req.params.id
    res.send(`Modifico interamente il post con Id: ${id}`)
})

//! Patch

router.patch("/cakes/:id", (req,res) => {
    const id = req.params.id
    res.send(`Modifico parzialmente il post con Id: ${id}`)
})

//! Patch

router.delete("/cakes/:id", (req,res) => {
    const id = req.params.id
    res.send(`Elimino il post con Id: ${id}`)
})

module.exports = router