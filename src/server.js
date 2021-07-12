const porta = 3003;

const express = require('express')
const database = require('./database.js')
const  bodyParser = require('body-parser');
const app = express()


app.use(express.urlencoded({extended:true}))

app.get('/products', (req,res,next) => {
    res.send( database.getProducts() ); // converte para Json automaticamente
});

app.get('/products/:id', (req,res,next) => {
    res.send(database.getProduct(req.params.id))
})

app.post('/products', (req,res,next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price

    })
    res.send(product); // JSON
})

app.put('/products/:id', (req,res,next) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price

    })
    res.send(product); // JSON
})

app.delete('/products/:id', (req,res,next) => {
    const product = database.deleteProduct(req.params.id)
    res.send(product); // JSON
})

app.listen(porta, () =>{
    console.log(`Servidor excutando na porta ${porta}.`)
})