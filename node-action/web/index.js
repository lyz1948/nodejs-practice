const http = require('http');
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  // res.end('Hello World!')
  const url = 'http://baidu.com'

  let body = '<p>Redirecting to<a href="' + url + '">' + url +'</a></p>'
  res.setHeader('Location', url)
  res.setHeader('Content-Length', body.length)
  res.setHeader('Content-Type', 'text/html')
  // res.statusCode = 302 // 重定向跳转
  res.end(body)
})

server.listen(port, () => {
  console.log(`Server is running in ${hostname}:${port}` )
})