const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser());

app.post('/',function(req,res){
    console.log(req.body.command);
    res.end();
})

const server = app.listen(8282, function(){
    console.log('Server is running!');
})