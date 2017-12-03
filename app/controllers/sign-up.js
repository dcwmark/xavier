/**
 * /app/controllers/sign-up.js
**/

XAVIER.app.controller('SignUpCtrl', [ 'UsersServices', function( UsersServices ) {

    'use strict';

    const self = this;

    self.user = {
        version: null,
        firstName: null,
        lastName: null,
        emailAddr: null,
        passWord: null,
        userType: null,
        createdDate: null,
        updatedDate: null,
        active: null
    };

    self.validateEmail = function(emailAddr) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailAddr);
    };

    self.submit = function() {
        self.formSignUp.$setUntouched();
        self.formSignUp.$setPristine();
        
        if (!self.validateEmail(self.user.emailAddr)) {
            self.formSignUp.emailAddr.$setValidity('validateErr', false);
            self.formSignUp.$setValidity(false);
        } else {
            self.formSignUp.emailAddr.$setValidity('validateErr', true);
        }
        
        UsersServices.signup(self.user)
        .then( ( response ) => {
            console.log('signup.response::', JSON.stringify(response));

            self.popMsg = response;

            $( "#popUp" ).show(); 
            setTimeout(function() {
               $( "#popUp" ).hide();
             }, 30000);
        }, ( error ) => {
            console.log(JSON.stringify(error));
            self.popMsg = error;
        } );
    };

}]);
