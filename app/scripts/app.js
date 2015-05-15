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
		.when("/Customers", {
			templateUrl: "scripts/CustomerTable/CustomerTable.html"
		})
		.otherwise({
			redirectTo: "404.html"
		});
}]) 
.run(function($timeout, $rootScope, $location
	// Listing services here to get them instantiated up front
	// Especially if they have to start out by registering event handlers
	, AddCustomerService
	, AddCustomerLocalStorageService
    , AddCustomerRESTService
	){
  console.log('Your angular app is initialized.  Happy hacking!');
})

