const express = require('express') 
// const mongoose = require('mongoose')
const React = require('react')
const jsxEngine = require('jsx-view-engine')
const app = express()
app.use(express.urlencoded({ extended: true }))
// mongoose.connect(process.env.MONGO_URI)
// mongoose.connection.once('open', () => {
//     console.log('connected to MONGO')
// })

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

/* routes */

//GREETING
app.get('/greeting', async (req, res) => {
    res.send(`Hello, stranger`)
})

app.get('/greeting/:name', async (req, res) => {
    res.send(`Hello, ${+req.params.name}!`)

})

//TIP
app.get('/tip/:total/:tipPercentage', async (req, res) => {
    const total = req.params.total * .01
    const tipPercentage = req.params.tipPercentage
    const tip = total * tipPercentage
    res.send(`The tip should be ${tip}!`)
})

app.listen(3000, () => {
    console.log('I\'m listening!')
})

/* 


*/