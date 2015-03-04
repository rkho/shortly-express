var db = require('../config');
var Promise = require('bluebird');
var bcrypt  = require('bcrypt-nodejs');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function(){
    this.hash();
  },

  hash: function(){
    var encrypt = Promise.promisify(bcrypt.hash);

    return cipher(this.get('password'), null, null)
      .bind(this)
      .then(function(hash){
        this.set('password', hash);
      });
  },

  comparePass: function(password, callback){
    bcrypt.compare(password, this.get('password'), function(err, match){
      callback(match);
    });
  }

});

module.exports = User;




