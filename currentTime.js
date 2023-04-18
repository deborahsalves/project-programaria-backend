const express = require('express');
const router = express.Router();

const app = express();
const port = 3333;

const showCurrentTime = (request, response) => {
    const today = new Date();
    const currentTime = today.toLocaleTimeString('pt-BR')
    response.send(currentTime);
}

const showPort = () => {
    console.log('Server created and reunning on port', port);
}

app.use(router.get('/currenttime', showCurrentTime));
app.listen(port, showPort);