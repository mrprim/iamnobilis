const express = require('express')
const app = express()
const compression = require('compression')
const path = require('path')
// const http2 = require('http2')

app.use(compression())
app.use(express.static('./build'))
app.use(express.static('./static'))
app.get('/.well-known/acme-challenge/:content', function (req, res) {
  res.send('fQ7GJvG6pieSx6hbDWnT0Sz0vNT0QFm4nW91ZrtnefA.FDcoEvHYy21hfSj3-5YKjt6HD2Ui3j3hG4M_BpAKByc')
})

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/build/index.html')))

app.listen(process.env.PORT || 3000, () => console.log('iamnobilis listening on port ' + (process.env.PORT || 3000)))
