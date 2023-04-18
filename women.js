const express = require('express');
const router = express.Router();

const app = express();
const port = 3333;

const women = [
    {
        name: 'Déborah Salves',
        img: 'https://avatars.githubusercontent.com/u/79517214?v=4',
        bio: 'Front-end jr dev'
    },
    {
        name: 'Simara Conceição',
        img: 'https://avatars.githubusercontent.com/u/50921892?v=4',
        bio: 'Developer and instructor'
    },
    {
        name: 'Iana Chan',
        img: 'https://avatars.githubusercontent.com/u/13617203?v=4',
        bio: 'Fundadora do PrograMaria'
    },
]

const showWomen = (request, response) => {
    response.json(women)
}

const showPort = () => {
    console.log('Server created and running on port ', port);
}

app.use(router.get('/women', showWomen));
app.listen(port, showPort);