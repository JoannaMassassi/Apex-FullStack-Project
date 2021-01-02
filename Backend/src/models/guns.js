//Definir esquema de los campos que va a requerir cada objeto guardado en la DB
const mongoose = require('mongoose')
//schema es una funcion que permite definir como luciran los datos
const Schema = mongoose.Schema

const GunSchema = new Schema ({
    name: String,
    ammo: String,
    shot: String,
    damageHead: Number,
    damageBody: Number,
    available: String

})

//si se quisiera guardar una propiedad con un valor inicial seria asi:
//status: {
//     type: Boolean,
//     default: false
// }

//model es un metodo que toma el schema y lo  utiliza para guardar datos
//dentro de una coleccion de mongo
module.exports = mongoose.model('guns', GunSchema)