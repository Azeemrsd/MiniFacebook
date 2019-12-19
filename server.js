const http = require("http");

const app = require("./Backend/app");

port = process.env.PORT || 3000;

app.set(port);

const server = http.createServer(app);

server.listen(port);
