var request = require('request');

const CHECK_URL = 'https://twitter.com/';

var TwitterChecker = function() {

};

TwitterChecker.prototype.check = function check(username, callback) {

  var response = {
    exists: false,
    response: null
  };

  if (typeof callback !== 'undefined' && callback instanceof Function) {
    //callback mode
    //do stuff
    _check(username, function(err, res) {
      if (err) {
        return callback(err);
      }
      var response = {
        exists: res
      };
      callback(null, response);
    });
  } else {
    //promise mode
    var checker = this;
    return new Promise(function(resolve, reject) {

      _check(username, function(err, data) {
        if (err) {
          return reject(err);
        }
        var response = {
          exists: data
        };
        return resolve(response);
      });
    });
  }
};

function _check(username, callback) {
  //https://mail.google.com/mail/gxlu?email=<valid_account>

  request(CHECK_URL + encodeURIComponent(username), function(error, response, body) {
    if (!error) {
      return callback(null, response.statusCode === 200);
    } else {
      return callback(error);
    }
  });

}

module.exports = new TwitterChecker();
