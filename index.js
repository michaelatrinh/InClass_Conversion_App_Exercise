const express = require('express')
const app = express()
const todoRouter = require('./Routes/todo')


app.use(express.json())

app.use(todoRouter)
app.listen(3000,()=>console.log('server running on 3000'))