const Movies = require('../Models/movies.js')

const getMovies = (req,res) =>{
  Movies.find({},(err,result)=>{
    res.send(result)
  })
}

const createMovie = (req,res) =>{
  Movies.create({
    title: req.body.title,
    overview: req.body.overview,
    poster_path: req.body.poster_path,
    popularity: req.body.popularity,
    tag: req.body.tag,
    status: req.body.status
  },(err,result)=>{
    res.send(`${req.body.title} Created!`)
  })
}

const updateMovie = (req,res) =>{
  Movies.findOne({
    _id: req.params.id
  },(err,result)=>{
    Movies.updateOne({
      _id: req.params.id
    },{
      title: req.body.title || result.title,
      overview: req.body.overview || result.overview,
      poster_path: req.body.poster_path || result.poster_path,
      popularity: req.body.popularity || result.popularity,
      tag: req.body.tag || result.tag,
      status: req.body.status || result.status
    },(err,result)=>{
      res.send(`${req.body.title} Updated!`)
    })
  })
}

const deleteMovie = (req,res) =>{
  Movies.remove({
    _id: req.params.id
  },(err,result)=>{
    res.send(`Delete Success!`)
  })
}

const getOneMovie = (req,res) =>{
  Movies.findOne({
    _id: req.params.id
  },(err,result)=>{
    res.send(result)
  })
}

module.exports = {
  getMovies,getOneMovie,deleteMovie,updateMovie,createMovie
}