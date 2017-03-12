const express = require('express'),
      app = express(),
      port = process.env.PORT || 8080;

app.use(require('./app/routes'));

const db = require('./app/db');
      
app.listen(port, function(){
    console.log("App listening to the port " + port + "!");
})