const http = require('http');
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  // 设置数据编码格式
  req.setEncoding('utf-8')
  req.on('data', (chunk) => {
    // 默认是二进制格式数据
    console.log('parsed', chunk)
  })

  req.on('end', () => {
    console.log('done parseing')
    res.end()
  })
})

server.listen(port, () => {
  console.log(`Server is running in ${hostname}:${port}` )
})