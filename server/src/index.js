const cors = require('cors')
const express = require('express')
const router = require('../router/routes')

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/todos', router)

app.listen(5000, () => {
  console.log('server started on port 5000')
})
