'use strict';

(function() {

    window.XAVIER = {
        name: 'Xavier',
        version: '0.0.1'
    };

    XAVIER.injectors = [
        'ngResource',
        'ui.router'
    ];

    XAVIER.app = angular.module('XavierApp', XAVIER.injectors);

    XAVIER.app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
        function($httpProvider, $stateProvider, $urlRouterProvider) {

            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
                      
            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('home', {
                url: '/',
                controller: 'StartPageCtrl as startPageCtrl',
                templateUrl: 'templates/start-page.html'
            })
            .state('signin', {
                url: '/signin',
                controller: 'SignInCtrl as signInCtrl',
                templateUrl: 'templates/sign-in.html'
            })
            .state('signup', {
                url: '/signup',
                controller: 'SignUpCtrl as signUpCtrl',
                templateUrl: 'templates/sign-up.html'
            });
        }
    ]);

})();
