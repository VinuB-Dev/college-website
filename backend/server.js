import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import hostels from './data/hostels.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/hostels', (req, res) => {
  res.json(hostels)
})

app.get('/api/hostels/:id', (req, res) => {
  const hostel = hostels.find((p) => p._id === req.params.id)
  res.json(hostel)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
