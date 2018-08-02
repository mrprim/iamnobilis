const express = require('express')
const app = express()
const compression = require('compression')
const http2 = require('http2')

app.use(compression())
app.use(express.static('./build'))
http2.createServer(app).listen(process.env.PORT || 3000, () => console.log('iamnobilis listening on port ' + (process.env.PORT || 3000)))
