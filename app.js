(function() {

  'use strict';


var app =  angular.module('plunker', ['ngRoute', 'ngMessages']).config(moduleConfig);

app.run(function($location,$rootScope){
      $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (!current) {
                $location.path('/');
            }
        });
});

  function moduleConfig($routeProvider){
    $routeProvider
   .when('/user', {
        templateUrl: 'views/user-list.html',
        controller:'UserController',
        controllerAs: 'mainVM'
      })
    .when('/addUser', {
        templateUrl: 'views/add-user.html',
        controller:'AddUserController',
        controllerAs:'userVm'
      })
    .when('/displayUser', {
        templateUrl: 'views/display-user.html',
        controller:'DisplayUserController',
        controllerAs:'displayVm'
      })
      .otherwise({
        redirectTo: '/user'
      })
    
  };

 




})();