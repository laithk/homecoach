'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
    $scope.data = {
        singleSelect: null,
        multipleSelect: [],
        option1: 'option-1'
    };

    $scope.forceUnknownOption = function() {
        $scope.data.singleSelect = 'nonsense';
    };
}]);
