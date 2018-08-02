const express = require('express')
const app = express()
const compression = require('compression')

app.use(compression())
app.use(express.static('./build'))
app.listen(process.env.PORT || 3000, () => console.log('iamnobilis listening on port ' + (process.env.PORT || 3000)))
