 express = require('express');
 app = express();
 bodyParser = require('body-parser');
app.use(bodyParser());

app.post('/',function(req,res){
    console.log(req.body.command);
    res.end();
})

 server = app.listen(8282, function(){
    console.log('Server is running!');
})