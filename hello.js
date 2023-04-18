const express = require('express');
const router = express.Router();

const app = express();
const port = 3333;

const showHelloWorld = (resquest, response) => {
    response.send('<h1>Hello, world!</h1>');
}

const showPort = () => {
    console.log('Server created and running on port ', port);
}

app.use(router.get('/ola', showHelloWorld));
app.listen(port, showPort);