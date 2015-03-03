var db = require('../config');
var Promise = require('bluebird');
var bcrypt  = Promise.promisifyAll(require('bcrypt-nodejs'));

var User = db.Model.extend({
  tableName: 'users',

  initialize: function(obj){
    this.on('creating', function(model, attrs, options){
      return bcrypt.hashAsync(obj.password, null, null).then(function(hash){
        model.set({ 'username': obj.username, 'password': hash });
      });
    });
  }
});

module.exports = User;




