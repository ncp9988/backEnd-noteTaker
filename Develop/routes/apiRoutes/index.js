const fs = require("fs")
const router = require('express').Router();
let db = require("../../db/db.json");


router.get('/api/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync("./db/db.json")) || []
    console.log("GGet Routee",db)
    res.json(db);
});

router.post('/api/notes', (req,res) => {
    var newNote = {
        id : Math.floor(Math.random()) *757,
        title: req.body.title,
        text: req.body.text,
    }
    db.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(db), (error) => {
        if (error) throw error;
    })
    console.log("New note post",db)
    res.json(db)
});



module.exports = router;