

/*
============================================
; Title:  user.js
; Author: Wendy Portillo
; Date:   25 October 2019
; Description: The user schema and model.
;===========================================
*/

/**
Fields username, password, and email
*/
var mongoose = require('mongoose');

// Create the user schema
var userSchema = new mongoose.Schema({
 username: String,
 password: String,
 email: String
});
// Add new users 
module.exports.add= (user, callback)=> {
    user.save(callback);
};
// getById 
module.exports.getById= (id, callback)=> {
    var query = {_id:id};
    User.findById(query, callback);
};


// Attach the UserSchema to a User Model
module.exports = mongoose.model('User', userSchema);
