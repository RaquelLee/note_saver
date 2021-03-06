const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //heroku

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})

const PATH = require('path')

app.get('/notes', (req, res) => {
    res.sendFile(PATH.join(__dirname, './public/notes.html'))
});

app.get('/', (req, res) => {
    res.sendFile(PATH.join(__dirname, "./public/index.html"))
});

const fs = require('fs');
const data = require('./db/db.json');
const {v4 : uuidv4} = require('uuid');

app.post('/api/notes', (req,res) => {
    req.body.id = uuidv4();
    data.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(data), "utf-8", (err) => {  
        err ? console.error(err) : console.log("Success!");
        res.json(req.body);
})});

app.get('/api/notes', (req, res) => {
    res.json(data);
});