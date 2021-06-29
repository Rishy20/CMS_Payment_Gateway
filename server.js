//Import Koa
const Koa = require('koa');
//Import body-parser
const bodyParser = require('koa-bodyparser');
//Import the routes
const paymentRoutes = require('./routes/payment.routes');

//Import cors
const cors = require('@koa/cors');

//Start app
const app = new Koa();
//Use BodyParser
app.use(bodyParser());

//Use cors
app.use(cors());

//Registering the Payment routes
app.use(paymentRoutes.routes()).use(paymentRoutes.allowedMethods());

//Setup the port
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3001;
}
app.listen(port);

console.log("Application is running on port 3001");