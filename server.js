const fs = require('fs');
const express = require('express')

const app = express()
const port = 3000

// Set up body parsing, status, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// The following HTML routes should be created:

// * `GET /notes` should return the `notes.html` file.
app.get('', (req, res) => {
    res.send('')
})

// * `GET *` should return the `index.html` file.
app.get('', (req, res) => {
    res.send('')
})

// The following API routes should be created:

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
app.get('', (req, res) => {
    res.send('')
})
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
app.get('', (req, res) => {
    res.send('')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})