var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/home', {
      templateUrl: '/views/partials/home.html',
      controller: 'HomeController'
    }).
    when('/dva', {
      templateUrl: '/views/partials/dva.html',
      controller: 'dvaController'
    }).
    when('/lucio', {
      templateUrl: '/views/partials/lucio.html',
      controller: 'lucioController'
    }).
    when('/pharah', {
      templateUrl: '/views/partials/pharah.html',
      controller: 'pharahController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);

myApp.controller('HomeController', ["$scope", function($scope){
  console.log("home")

}]);


myApp.controller('dvaController', ["$scope", function($scope){
  console.log("dva")

}]);

myApp.controller('lucioController', ["$scope", function($scope){
  console.log("Dogs rule!");

}]);

myApp.controller('pharahController', ["$scope", function($scope){
  console.log("Lizards are toxic!");

}]);
