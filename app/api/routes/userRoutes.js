/**
 * /app/api/routes/userRoutes.js
**/

module.exports = function(app) {
    
    'use strict';

    let userController = require('../controllers/userController');

    app.route('/users')
        .post(userController.signUp);

    app.route('/users/:emailAddr')
        .get(userController.selectByEmail);
};
