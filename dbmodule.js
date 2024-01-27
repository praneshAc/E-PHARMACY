var databaseUrl = "mongodb://127.0.0.1:27017/test";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function(email,password, response) {
db.users.find({  "email": email ,"password":password},
	function(err, users) 
	{
		if (err || !users) {
		response.write("Not authorized user");
		response.end();
            } 
		else if (users.length == 0) {
		response.write("Not authorized user");
		response.end();
            } 
		else {
		response.write("Authorized user");
		response.end();
            }
        });
}

exports.saveUser = function(name,name1, email,date,password,password1, response) {
console.log('Saving user to mongo');
db.users.insert({"name":name,"name1":name1, "email": email,"date":date,"password":password,"password1":password1,},
function(err, saved) 
{
	if (err || !saved)
		console.log(err);
	else
		response.write("User Saved");
		response.end();
         });
}
