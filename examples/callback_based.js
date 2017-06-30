
var TwitterChecker = require("../index");

//checks for an existing address
TwitterChecker.check('twitter', function(err, data){
  if(err){
    console.error(err);
    return;
  }
  console.log("Username twitter exists:", data.exists);
});

//checks for an, hopefully, unexisting address
TwitterChecker.check('twitter37i4ksfhdskfh7i3knbd', function(err, data){
  if(err){
    console.error(err);
    return;
  }
  console.log("Username twitter37i4ksfhdskfh7i3knbd exists:", data.exists);
});
