const express = require('express');
const app = express();

var mustacheExpress = require('mustache-express');
app.engine('html',mustacheExpress());
app.set('view engine','html');
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 3000;



app.get('/idea',(req,res)=>{
res.render('idea.mustache');
});

app.listen(port,()=>{
    console.log('Hey Boss')
});