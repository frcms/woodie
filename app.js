const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/', (res, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log('Express is now listening.')
})