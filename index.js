
const jsonSever = require("json-server");
const server = jsonServer.create();
const router = jsonSever.router("almacen.json");
const middlewares = jsonSever.defaults();
const port = process.env.PORT || 10000; //web service

server.use(middlewares);
server.use(router);
server.listen(port);

