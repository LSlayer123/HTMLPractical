const express = require('express')
const app = express()
app.use(express.static('Client'));

const instruments = ["piano", "trumpet", "guitar"]

app.get('/list', function (req, resp){
    resp.send(instruments);
});



console.log("starting server")
app.listen(1700)


