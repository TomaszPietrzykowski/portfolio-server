const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
// custom
const emailRouter = require('./router/emailRouter')

// init
const app = express()
dotenv.config({ path: './config.env' })

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routing
app.use('/email', emailRouter)
app.use(express.static(path.join(__dirname, '/view')))
app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'view', 'index.html'))
)

// start server
const PORT = process.env.PORT || 5000

app.listen()
