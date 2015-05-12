angular.module('ctsng.foo', [

])
.config(function ($locationProvider, $httpProvider) {

})

.controller('CtsngController', function($scope) {
  $scope.foo;
  $scope.fooBar = function(){
    $scope.foo = 'bar';
  }
})  