const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to the amazing world of cricket')
})
app.get('/home', (req, res) => {
    res.send('Welcome to the amazing world of cricket')
  })
app.get('/ping',(req,res)=>{
    res.send('pong!, Welcome to the amazing world of cricket')
})

app.listen(3000,(req,res)=>{
    console.log('Starting Server ....🚀')
    console.log('Server started running on port 3000 🏃‍♂️')
})