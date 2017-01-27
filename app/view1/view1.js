'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
  $scope.data = [
    { IsImpact: true, Name: "item 1"},
  { IsImpact: false, Name: "item 2", ItemType: "category1"},
  { IsImpact: false, Name: "item 3", ItemType: "category2"},
  { IsImpact: false, Name: "item 4", ItemType: "category3"},
  { IsImpact: true, Name: "item 5", ItemType: "category4"}
  ];

  $scope.colours = ['yellowItem','redItem','blueItem','pinkItem','greenItem','purpleItem','whiteItem','brownItem'];


  $scope.newItem = {};

  $scope.addItem = function(item){
    $scope.data.push(item);
  }

  $scope.deleteItem = function(item)
  {
    console.log("item will be removed");
  }
}]);