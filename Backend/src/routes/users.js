const { Router} = require('express');
const router = Router();
const fetch = require('node-fetch')


router.get('/users', async (req,res) => {

    //Al hacer un fetch se recibe un string legible por eso se hace .json() para leerlos como JSON
   const response =  await fetch('https://jsonplaceholder.typicode.com/users');
   const users = await response.json()
    console.log('USERS?', users)
    res.send('users')
})


module.exports = router