var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({

  initialize: function(){
    // Hash the password
    // And then set it in database after the password is hashed?
  },

  salt,

  login: Promise.method(function(username, password) {
    if (User) { //check if user is in database
      return hash(username, password);
    }
  },

  hash: function(username, password) {
    bcrypt.genSalt(10, function(err, salt){
              salt = salt;
              bcrypt.hash(this.password, salt, function(err, hash){
                return hash;
            })
    })
  },

  setInDatabase: function(){
    db.set({
      username: User.username,
      hash: User.hash,
      salt: User.salt
    })
  }

  //Probably sends this information to the database
  //  or at least the encrypted version through bcrypt
  //Promise through bluebird will probably be necessary to only encrypt/store a password to the database once the encryption has completed

});

module.exports = User;




