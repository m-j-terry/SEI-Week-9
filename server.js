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

//MAGIC 8 BALL
app.get('/magic/:question', async (req, res) => {
    const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let question = req.params.question
    let response = Math.floor(Math.random() * eightBall.length) + 1
    res.send(`${question}? Magic 8 Ball says... ${eightBall[response]}!`)
})

app.listen(3000, () => {
    console.log('I\'m listening!')
})

/* 


*/