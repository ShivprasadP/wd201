const http = require('http')
const fs = require('fs')

const port = require('minimist')(process.argv.slice(2))

let homeContent
let projectContent
let registrationContent

fs.readFile('home.html', (err, data) => {
  if (err) {
    throw err
  }
  homeContent = data.toString()
})

fs.readFile('project.html', (err, data) => {
  if (err) {
    throw err
  }
  projectContent = data.toString()
})

fs.readFile('registration.html', (err, data) => {
  if (err) {
    throw err
  }
  registrationContent = data.toString()
})

const server = http.createServer((request, response) => {
  response.writeHeader(200, { 'Content-Type': 'text/html' })
  const url = request.url
  switch (url) {
    case '/project':
      response.write(projectContent)
      response.end()
      break
    case '/registration':
      response.write(registrationContent)
      response.end()
      break
    default:
      response.write(homeContent)
      response.end()
      break
  }
})
server.listen(port)
