const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

var rootRouter = require('./routes/root')

app.use("/", rootRouter)

app.listen(port, () => {
  console.log('Express is now listening.')
})