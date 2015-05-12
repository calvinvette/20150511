(function(module) {
try { module = angular.module("ctsng.templates"); }
catch(err) { module = angular.module("ctsng.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("foo/foo.tpl.html",
    "<div>foo</div>");
}]);
})();

angular.module('ctsng', [
  
  'ui.router',
  
  'ngCookies',
  'ngAnimate',
  'ctsng.templates',
  'ctsng.config',
  'ctsng.foo'
])
.config(function ($locationProvider, $httpProvider) {

}) 
.run(function($timeout, $rootScope, $location){
  alert('Your angular app is initialized.  Happy hacking!')
})


angular.module("ctsng.config", [])

.constant("ENV", {})

;
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