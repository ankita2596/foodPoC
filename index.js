const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json);

//server connection
const server = app.listen(3000,(req,res) => {
    console.log('Server is listening on port 3000');
});

//Defining routes
const gitHubRouter = require('./gitHubModule/gitRoutes');
app.get('/git',gitHubRouter());
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

