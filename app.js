const express = require('express');
const res = require('express/lib/response');
const { dirname } = require('path');
const app = express();
const path= require('path')
app.listen(process.env.PORT || 3000, function() {
    console.log ('servidor corriendo en el puerto 3000');})
app.use (express.static(path.resolve(__dirname,'public')));
app.get ('/', (req , res) => {
let hmtlPath = path.resolve (__dirname,'views/home.html');
res.sendFile(hmtlPath);
})
app.get('/login', (req , res)=> {
res.sendFile(path.resolve(__dirname,'views/login.html'));
})
app.get('/register', (req , res)=> {
    res.sendFile(path.resolve(__dirname,'views/register.html'));
})