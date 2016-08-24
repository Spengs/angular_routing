var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/cats', {
      templateUrl: '/views/partials/cats.html',
      controller: 'catController'
    }).
    when('/dogs', {
      templateUrl: '/views/partials/dogs.html',
      controller: 'dogController'
    }).
    when('/lizards', {
      templateUrl: '/views/partials/lizards.html',
      controller: 'lizardController'
    }).
    otherwise({
      redirectTo: '/cats'
    });
}]);


myApp.controller('catController', ["$scope", function($scope){
  console.log("Super Cats!");

}]);

myApp.controller('dogController', ["$scope", function($scope){
  console.log("Dogs rule!");

}]);

myApp.controller('lizardController', ["$scope", function($scope){
  console.log("Lizards are toxic!");

}]);
