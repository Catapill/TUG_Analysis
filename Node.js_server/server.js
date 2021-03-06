const express = require('express');
const app = express();

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
global.__basedir = __dirname;

const db = require('./app/config/db.config.js');
db.sequelize.authenticate().then(function() {console.log("~connected~")});

//force: true will drop the table if it already exists
//alter: true will alter the table if it already exists
db.files.sync({alter: true}).then(() => {
  console.log('sync executed');
}); 

let router = require('./app/routers/file.router.js');
app.use('/', router);

// Create a Server
const server = app.listen(8080, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})