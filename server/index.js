const cors = require('cors')
const express = require('express')
const app = express()
const router = require('./routes')

app.use(cors())
app.use(express.json())

// ROUTES //
app.use('/todos', router)

app.listen(5000, () => {
  console.log('server started on port 5000')
})
