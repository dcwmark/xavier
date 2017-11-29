"use strict";

(function() {

    window.XAVIER = {
        name: 'Xavier',
        version: '0.0.1'
    };

    XAVIER.injectors = [
        'ngRoute',
        'ui.router'
    ];

    XAVIER = angular.module('XavierApp', XAVIER.injectors);

    XAVIER.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'StartPageCtrl as startPageCtrl',
                templateUrl: 'app/templates/start-page.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        }
    ]);

})();
