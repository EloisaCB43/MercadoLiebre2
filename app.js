const express = require('express');
const app = express();
const path= require('path')
app.listen(3000,() => console.log ('servidor corriendo en el puerto 3000'));
app.use (express.static(path.resolve(__dirname,'public')));
app.get ('/', (req , res) => {
let hmtlPath = path.resolve (__dirname,'views/home.html');
res.sendFile(hmtlPath);
})