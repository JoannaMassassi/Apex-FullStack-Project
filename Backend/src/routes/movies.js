const { Router} = require('express');
const router = Router();
const _ = require('underscore');


 const movies = require("../sample.json");

router.get('/movies', (req,res)=> {
    res.json(movies)
})

router.put('/movies/:id', (req,res) => {
    const {id} = req.params;
    const { title, year, rating } = req.body;
    _.each(movies, (movie, i) => {
        if(movie.id == id){
            movie.title = title;
            movie.year = year,
            movie.rating = rating
        }
        res.json(movies)
    })
})

router.post('/movies', (req,res)=> {
    // const { title, year , rating } = req.body
    const id = movies.length + 1
    const newMovie = {id, ...req.body}
    movies.push(newMovie)
    console.log('POST', newMovie)
    res.json( movies)
})

router.delete('/movies/:id', (req,res) => {
    const { id }  = req.params
    //underscore es una biblioteca que permite majear datos en Node. (filtrar arrays etc
    //En el codigo de abajo estamos recorriendo el arrelgoo de peloculas y comparandolo con el Id para borrar
    _.each(movies, (movie, i) => {
        if(movie.id == id){
            movies.splice(i,1)
            res.json(movies)
        }
    })
})

module.exports = router