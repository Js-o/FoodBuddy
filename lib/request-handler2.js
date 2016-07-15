var db = require('../app/dbConnection');
var Movie = require('../app/models/movie');
var Rating = require('../app/models/rating');
var Relation = require('../app/models/relation');
var User = require('../app/models/user');

var Movies = require('../app/collections/movies');
var Ratings = require('../app/collections/ratings');
var Relations = require('../app/collections/relations');
var Users = require('../app/collections/users');


//a handeler that takes a rating from user and add it to the database
exports.rateMovie = function(req, res) {
  new Movie({ name: req.body.moviename }).fetch().then(function(foundMoive) {
  	if (foundMoive) {
  		new User({ name: req.body.username }).fetch().then(function(foundUser) {
  			new Rating({ movieid: foundMoive.id, userid: foundUser.id }).fetch().then(function(foundRating) {
  				if (foundRating) {
	  				new Ratings({'id': foundRating.id}).save({
						    rating: req.body.rating
						}).then(function(newRating) {
						    res.json(newRating);
						});
  				} else {
				    Ratings.create({
				    	rating: req.body.rating,
				      userid: foundUser.id,
				      password: foundMoive.id
				    });					
  				}
  			})
			});
  	} else {
  		res.status(500).send('movie not found');
  	}
  });
};

//get all movie ratings that a user rated
//should return an array that look like the following:
// [ {movieName: 'name', rating: 'rating'}, {movieName2: 'name', rating2: 'rating'} ... ]
exports.getMovieRating = function(req, res) {
  new User({ name: req.body.username }).fetch().then(function(foundUser) {
    new Rating({ userid: foundUser.id })
    // HAVE NOT TESTED THIS, NOT SURE THIS IS WORKING YET
    .fetchAll({ withRelated: ['movies'] })
    .then(function(foundRatings) {
      console.log(foundRatings);
    });
  });
};

//this would connect to external API to get basic movie info and store into database
exports.addMovie = function(req, res) {
  new Movie({ name: req.body.moviename }).fetch().then(function(foundMoive) {
    if (foundMoive) {
      console.log('movie already exist', foundMoive);
      res.status(500).send('movie already exists');
    } else {
      Movies.create({
        name: req.body.movieName,
        genre: req.body.genre,
        release_date: req.body.release_date
      }).then(function(create) {
        console.log('movie created');
        res.end();
      })
    }
  })
};



//this would send a notice to the user who receive the friend request, prompting them to accept or deny the request
exports.addFriend = function(req, res) {

};


//this would confirm the friendship and establish the relationship in the database
exports.confirmFriendship = function(req, res) {

};


//this would retrieve all of user's friends
//data would look like the following:
//[{name: 'name'}, {name: 'name'} ... ]
exports.getFriends = function(req, res) {

};


//TBD
exports.getHighCompatibilityUsers = function(req, res) {
  
};


//TBD
exports.getRecommendedMovies = function(req, res) {

};