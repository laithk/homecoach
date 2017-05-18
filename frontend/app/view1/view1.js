'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.test = true;
        $scope.show = {
            v1: true,
            v2: false,
            v3: false
        }
        $scope.keuze = {
            v1: '',
            v2: '',
            v3: ''
        };

        $scope.v1Changed = function (value) {
            $scope.show.v2 = true;
            console.log($scope.keuze.v1);
        }

        $scope.v2Changed = function (value) {
            $scope.show.v3 = true;
            console.log($scope.keuze.v2);
        }
        $scope.v3Changed = function (value) {
            $scope.test=false;
            console.log($scope.keuze.v3);
        }
    }]);
