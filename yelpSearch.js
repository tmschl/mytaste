var secret = require("./keys");

var yelp = require("yelp").createClient({
  consumer_key: "KNFuEwffmj3X3GRAloFnbQ", 
  consumer_secret: secret.consumer,
  token: "pjRqb-meC9hYI_H25ZUNxZwuzvxh7P68",
  token_secret: secret.token
});


yelp.search({term: "food", location: "Montreal"}, function(error, data) {
  console.log(error);
  console.log(data);
});

yelp.business("yelp-san-francisco", function(error, data) {
  console.log(error);
  console.log(data);
});

