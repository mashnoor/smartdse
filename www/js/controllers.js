angular.module('starter.controllers', [])
.controller('btnCtrl', function($scope) {
    $scope.world = function()
    {
        alert("hello world");
    }
});