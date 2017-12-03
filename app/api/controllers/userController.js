/**
 * /app/api/controllers/userController.js
**/

'use strict';

var mongoose = require('mongoose'),
    users = mongoose.model('users');

exports.selectByEmail = function(req, res) {
    console.log('*********** selectByEmail ...');

    users.findById(req.params.emailAddr, function(err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

exports.signUp = function(req, res) {
    console.log('*********** signUp ...');

    let newUser = new users(req.body);

    newUser.save(function(err,newUser) {
        if (err) {
            res.send(err);
        }
        res.json(newUser);
    });
};
