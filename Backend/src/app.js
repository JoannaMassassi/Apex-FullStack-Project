const express = require('express')
const app = express();
const morgan = require('morgan')


//settings
app.set('port', process.env.port || 3000)


//middleware
app.use(morgan('dev'));
//<-- Entender datos que vienen desde formularios
app.use(express.urlencoded({extended:false}))
//<-- Permite al servidor recibir datos en JSON
app.use(express.json());

//routes

app.use(require('./routes/index'));
app.use('/api', require ('./routes/movies'));
app.use('/api', require('./routes/users'));

//empezando servidor
app.listen(app.get('port'), () => {
    console.log('Server on port')
});