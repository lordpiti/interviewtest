'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','mainInfo',function($scope, mainInfo) {

  $scope.data = [];
  $scope.search = {
    ItemType: ""
  }

  mainInfo.getItems(function(response){
    $scope.data = response.data;
  })

  // $scope.data = [
  //   { IsSpecial: true, Name: "item 1", ItemType: "category1"},
  // { IsSpecial: false, Name: "item 2", ItemType: "category1"},
  // { IsSpecial: false, Name: "item 3", ItemType: "category2"},
  // { IsSpecial: false, Name: "item 4", ItemType: "category3"},
  // { IsSpecial: true, Name: "item 5", ItemType: "category2"},
  // { IsSpecial: true, Name: "item 6", ItemType: "category1"},
  // { IsSpecial: false, Name: "item 7", ItemType: "category1"},
  // { IsSpecial: false, Name: "item 8", ItemType: "category2"},
  // { IsSpecial: false, Name: "item 9", ItemType: "category3"},
  // { IsSpecial: true, Name: "item 10", ItemType: "category3"},
  // { IsSpecial: true, Name: "item 11", ItemType: "category2"},
  // { IsSpecial: false, Name: "item 12", ItemType: "category1"},
  // { IsSpecial: false, Name: "item 13", ItemType: "category2"},
  // { IsSpecial: false, Name: "item 14", ItemType: "category3"},
  // { IsSpecial: true, Name: "item 15", ItemType: "category2"}
  // ];

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