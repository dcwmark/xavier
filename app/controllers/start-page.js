/**
 * /app/controllers/start-page.js
**/

XAVIER.app.controller('StartPageCtrl', [ '$scope', function( $scope ) {

    'use strict';

    console.log('/controllers/start-page.js');

    var self = this;
    self.pageTitle = "Xavier";
    self.thisDate = new Date();

}]);
