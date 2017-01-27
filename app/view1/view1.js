'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
  $scope.data = [{ IsImpact: true, Name: "su madre"},
  { IsImpact: false, Name: "su madre"},
  { IsImpact: false, Name: "su madre"},
  { IsImpact: false, Name: "su madre"},
  { IsImpact: true, Name: "su madre"}];
}]);