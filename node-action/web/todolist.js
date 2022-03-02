const http = require("http")
const { parse } = require('url')

const hostname = "127.0.0.1"
const port = 3000
const items = []

// 数据添加
const handleData = (req, res) => {
  let item = ""
  req.setEncoding("utf-8")
  req.on("data", (chunk) => {
    item += chunk
  })

  req.on("end", () => {
    items.push(item)
    console.log(items)
    res.end("Ok\n")
  })
}

// 数据删除
const handleDelete = (req, res) => {
  const myUrl = new URL(`${req.url}`, `http://${hostname}:${port}`)

  const id = parseInt(myUrl.pathname.slice(1), 10)

  if (isNaN(id)) {
    res.statusCode = 400
    res.end('Invalid item id')
  } else if (!items[id]) {
    res.statusCode = 404
    res.end('Item not found')
  } else {
    items.splice(id, 1)
    res.end('OK\n')
  }
}

// 数据显示
const showData = (res) => {
  // items.forEach((item, index) => {
  //   res.write(index + ' => ' + item + '\n')
  // })
  // res.end()
  // 优化后
  const body = items
    .map((item, index) => {
      return index + " => " + item
    })
    .join("\n")
  res.setHeader("Content-Length", Buffer.byteLength(body, "utf-8"))
  res.setHeader("Content-Type", 'text/plain; charset="utf-8"')
  res.end(body)
}

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "POST":
      handleData(req, res)
      break
    case "DELETE":
      handleDelete(req, res)
      break
    case "GET":
      showData(res)
      break
  }
})

server.listen(port, () => {
  console.log(`Server is running in ${hostname}:${port}`)
})
