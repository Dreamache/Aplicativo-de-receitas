const express = require('express')
const path = require('path')

const app = express()
const port = 3013

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/static', express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('pages/index')
})

app.get('/about', (req, res) =>{
    res.render('pages/about')
})

app.get('/receita1', (req, res) =>{ 
    res.render('pages/receita1') }) 

app.get('/receita2', (req, res) =>{ 
    res.render('pages/receita2') }) 

app.get('/receita3', (req, res) =>{ 
    res.render('pages/receita3') })

app.post('/user', (req, res) => {
    console.log(req.body.NomeR)
    console.log(req.body.IngrediR)
    console.log(req.body.ModopR)

    res.send('RECEBI!')
})

app.listen(port, ()=> {
    console.log('esta em execucao')
})

