angular.module('ctsng', [
  'ngRoute',
  //'ui.router',
  
  'ngCookies',
  'ngAnimate',
  'ctsng.templates',
  'ctsng.config',
  'ctsng.foo'
])
.config(['$routeProvider', function (
	$routeProvider 
	
	// , $locationProvider // We'll use this later for ui-router
	// , $httpProvider
	) {
	$routeProvider
		.when("/CustomerRegistration", {
			templateUrl: "scripts/CustomerForm/CustomerForm.html", // An HTML "Partial"
			controller: 'CustomerFormController' // A JS Angular Controller with this name, 
				// typically in a file called CustomerForm.controller.js
		})
		.otherwise({
			redirectTo: "404.html"
		});
}]) 
.run(function($timeout, $rootScope, $location
	, AddCustomerService
	, AddCustomerLocalStorageService
	){
  console.log('Your angular app is initialized.  Happy hacking!')
})

