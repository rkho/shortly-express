var db = require('../config');
var Promise = require('bluebird');
var bcrypt  = Promise.promisifyAll(require('bcrypt-nodejs'));

var User = db.Model.extend({
  tableName: 'users',

  initialize: function(username, password){
    // return { 'username': username, 'password': password };
    // bcrypt.genSalt(10, function(err, salt){
      return bcrypt.hashAsync(password, null, null).then(function(hash){
          //( { 'username': username, 'password': hash } );
      });
    // });

  }
});

module.exports = User;




