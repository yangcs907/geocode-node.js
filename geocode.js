var geocoder = require("geocoder");

var nodeArgs = process.argv;

var address = "";

for (var i = 2; i < nodeArgs.length; i++) {

  address = address + " " + nodeArgs[i];
}

console.log("Searching for" + address);

geocoder.geocode(address, function(err, data) {

  console.log(JSON.stringify(data, null, 2));
});
