const http = require('http')
const { join } = require('path')
const { createReadStream } = require('fs')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  const param = new URL(`${req.url}`, `http://${hostname}:${port}`)
})

server.on(port, () => {
  console.log('Server is running on http://' + host + ':' + port)
})