const express = require('express')
const cors = require('cors');

//setup app & its routes
const app = express();
const port = 8080;
app.use(cors());
const routes = require('./routes/index.route');
app.use(routes);

//start http server
const httpServer = http.createServer(app);
httpServer.listen(port);
console.log(`[${serviceName}] http server listening at port ${port}`);

module.exports = { app };
