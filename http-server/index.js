const http = require('http')
const fs = require('fs')

const argv = require('yargs').argv
const port = argv.port
// const portI = args.indexOf('--port')
// const default_port = 5000
// const port = parseInt(args)

let homeContent
let projectContent
let registrationContent

fs.readFile('home.html', (err, home) => {
  if (err) {
    throw err
  }
  homeContent = home
})

fs.readFile('project.html', (err, project) => {
  if (err) {
    throw err
  }
  projectContent = project
})

fs.readFile('registration.html', (err, registration) => {
  if (err) {
    throw err
  }
  registrationContent = registration
})

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(homeContent)
  } else if (request.url === '/project') {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(projectContent)
  } else if (request.url === '/registration') {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(registrationContent)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end('<h1>404 Not Found</h1>')
  }
  // response.writeHeader(200, { 'Content-Type': 'text/html' })
  // const url = request.url
  // switch (url) {
  //   case '/project':
  //     response.write(projectContent)
  //     response.end()
  //     break
  //   case '/registration':
  //     response.write(registrationContent)
  //     response.end()
  //     break
  //   default:
  //     response.write(homeContent)
  //     response.end()
  //     break
  // }
})
server.listen(port)
