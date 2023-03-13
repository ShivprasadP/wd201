const http = require("http");
const fs = require("fs");

const args = process.argv.slice(2);
const portI = args.indexOf('--port');
const port = parseInt(args[portI + 1], 10);

let homeContent;
let projectContent;
let registrationContent;

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

http.createServer((request, response) => {
    response.writeHeader(200, { "Content-Type": "text/html" });
    let url = request.url;
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
        case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(port);