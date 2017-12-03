/**
 * /app/services/users-services.js
**/

XAVIER.app.service('UsersServices', [ '$http', function( $http ) {
    
    'use strict';

    this.signup = function(newUser) {
        console.log('UserServices.signup ...');

        $http.get('/users/email/' + newUser.emailAddr)
        .then( ( response ) => {
            console.log('****** userService.reject ...')
            return Promise.reject('This email address has already been used');
        }, ( error ) => {
            console.log('****** userService.resolve ...')
            newUser.version = 0;
            newUser.createdDate = newUser.updatedDate = new Date();
            
            return new Promise( (resolve, reject) => {
                $http.post('/users', newUser)
                .then( ( response ) => {
                    resolve(`${response.data.firstName} ${response.data.lastName} was added successfully.`);
                }, ( error ) => {
                    reject(error);
                });
            });
        });
    };

}]);
