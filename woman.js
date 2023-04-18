const express = require('express');
const router = express.Router();

const app = express();
const port = 3333;

const showWoman = (request, response) => {
    response.json({
        "name": "Déborah Salves",
        "img": "https://avatars.githubusercontent.com/u/79517214?v=4",
        "bio": "Front-end jr dev" 
    })
}

const showPort = () => {
    console.log('Server created and running on port ', port);
}

app.use(router.get('/woman', showWoman));
app.listen(port, showPort);