const router = require('express').Router();
let User = require('../models/user.model');//model we created

//Handle incoming HTTP GET requests under /user url
router.route('/').get((req, res) => {
 //(find)mongoose method that get the list of all  the users from themongodb atlas databse
  User.find() 
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Handle incoming HTTP POST requests 
router.route('/add').post((req, res) => {

  const username = req.body.username;

  const newUser = new User({username});

  //Save the data into the mongo database
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;