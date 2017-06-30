var TwitterChecker = require("../index");

//checks for an existing address
TwitterChecker.check('twitter').then(function(data){
  console.log("Username twitter exists:", data.exists);
}).catch(function(err){
  console.error(err);
});

//checks for an, hopefully, unexisting address
TwitterChecker.check('twitterlkjdhskdjsdf83ekweycsknm').then(function(data){
  console.log("Username twitterlkjdhskdjsdf83ekweycsknm exists:", data.exists);
}).catch(function(err){
  console.error(err);
});
