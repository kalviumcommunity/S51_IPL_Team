const express = require('express')
const bodyParser = require('body-parser')
const { startDatabase, isConnected } = require('./db/database');
const {getRouter, postRouter, putRouter, deleteRouter}=require('./routes/CRUDIPL.routes')
const app = express()
app.use(bodyParser.json());
app.use(express.json())
app.use('/',getRouter);
app.use('/', postRouter);
app.use('/', putRouter);
app.use('/', deleteRouter);
app.get('/', (req, res) => {
  res.send({message:'Welcome to the amazing world of cricket'})
})
app.get('/home', (req, res) => {
  res.json({
    message: isConnected() ? 'Database is connected' : 'Disconnected from database'
  })
  })
app.get('/ping',(req,res)=>{
    res.send({message:'pong!, Welcome to the amazing world of cricket'})
})

startDatabase()
.then(()=>{
  app.listen(3000,async()=>{
    console.log('Starting Server ....🚀')
    console.log('Server started running on port 3000 🏃‍♂️')
})
})