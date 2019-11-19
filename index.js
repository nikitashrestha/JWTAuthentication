const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');


const app = express();

const APP_PORT = 8009;
const APP_HOST = process.env.APP_HOST || '0.0.0.0';
const APP_KEY = process.env.SECRET_KEY;


app.use(express.urlencoded({
  extended:true
}));

app.use(express.json());


// API Routes
app.use('/api', routes);

// app.use('/api',function(req, res, next){
//   res.end("hello");
// });



app.listen(APP_PORT,function(err, success){
  if(!err){
    console.log("Server running at port" + APP_HOST + ":"+APP_PORT);
  }
});

