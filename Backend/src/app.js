const express = require('express')
const app = express();
const morgan = require('morgan')
const path = require('path');
const mongoose = require('mongoose')

// connecting to Db
mongoose.connect('mongodb://localhost/apex-mongo', { useNewUrlParser: true, useUnifiedTopology: true})
.then( db => console.log('db Connected'))
.catch( err => console.log(err))



//settings seteando el puerto
app.set('port', process.env.port || 3000)
//indicar donde estan las views usando 'path¿ que da rutas absolutas sin importar el SO
app.set('views',path.join( __dirname + '/views'));
//usando EJS como view engine (motor de plantillas)
app.set('view engine', 'ejs');

//middlewares --->
app.use(morgan('dev'));
//<-- Entender datos que vienen desde formularios (extended false es para recibir solod atos, no imagenes etc)
app.use(express.urlencoded({extended:false}))
//<-- Permite al servidor recibir datos en JSON
app.use(express.json());
app.use(express.static(__dirname + "/publics"))
//routes

app.use(require('./routes/index'));
app.use('/api', require ('./routes/movies'));
app.use('/api', require('./routes/users'));

//empezando servidor
app.listen(app.get('port'), () => {
    console.log('Server on port')
});