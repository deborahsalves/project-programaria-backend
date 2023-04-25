const express = require('express'); // initialize express
const router = express.Router(); 
// const { v4: uuidv4 } = require('uuid'); // initialize uuid; NO NEED w mongoDB
const cors = require('cors') // initialize cors

const dbConnection = require('./database'); // importing module database.js
dbConnection();

const Woman = require('./womanModel');

const app = express(); 
app.use(express.json()); // for json requests
app.use(cors()); // to allow cors
const port = 3333;

// GET
const showWomen = async (request, response) => {
    try {
        const womenFromDb = await Woman.find();
        response.json(womenFromDb);
    } catch (err) {
        console.log(err);
    }
}

// POST
const createWoman = async (request, response) => {
    const newWoman = new Woman({    // here's were we're using the schema and connecting to the db
        name: request.body.name,
        img: request.body.img,
        bio: request.body.bio,
        quote: request.body.quote
    })
    try {
        const newlyCreatedWoman = await newWoman.save(); // await for the DB
        // add status(201) as a response
        response.status(201).json(newlyCreatedWoman);
    } catch(err) {
        console.log(err)
    }
}

// PATCH
const editWoman = async (request, response) => {
    try {
        const foundWoman = await Woman.findById(request.params.id);
    
        if (request.body.name) {
            foundWoman.name = request.body.name;
        }
        if (request.body.img) {
            foundWoman.img = request.body.img;
        }
        if (request.body.bio) {
            foundWoman.bio = request.body.bio;
        }
        if (request.body.quote) {
            foundWoman.quote = request.body.quote;
        }
    
        const updatedWomanOnDb = await foundWoman.save(); // save to DB
        response.json(updatedWomanOnDb);
    } catch(err) {
        console.log(err)
    }
}

// DELETE
const deleteWoman = async (request, response) => {
    try {
        await Woman.findByIdAndDelete(request.params.id);
        response.json({ message: 'Woman deleted successfully from database'});
    } catch(err) {
        console.log(err)
    }
}

// PORT
const showPort = () => {
    console.log('Server created and running on port ', port);
}

app.use(router.get('/women', showWomen)); // GET /women route
app.use(router.post('/women', createWoman)); // POST /women route
app.use(router.patch('/women/:id', editWoman)) // PATCH /women/:id route
app.use(router.delete('/women/:id', deleteWoman)) // DELETE /women/:id route
app.listen(port, showPort);