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


angular.module("ctsng.config", [])

.constant("ENV", {})

;
"use strict";

/**
 * Add Customer Local Storage Service
 * Take a customer and store it in local storage
 *
 */
angular.module('ctsng').service("AddCustomerLocalStorageService", function($rootScope) {
	
	$rootScope.$on("CustomerRegisteredEvent", function(evt, data) {
		//console.log(evt);
		addCustomer(data);
	});

	var addCustomer = function(customer) {
		var customers = [];
		var wls = window.localStorage.getItem("customers");
		if (wls) {
			customers = JSON.parse(wls);
		}
		customers.push(customer);
		window.localStorage.setItem("customers", JSON.stringify(customers));
		//console.log(customers);
	};

});
"use strict";

/**
 * Add Customer Service
 * Take a customer and store it in memory
 *
 */
angular.module('ctsng').service("AddCustomerService", function($rootScope) {
	var customers = [];
	
	$rootScope.$on("CustomerRegisteredEvent", function(evt, data) {
		//console.log(evt);
		addCustomer(data);
	});

	var addCustomer = function(customer) {
		customers.push(customer);
		console.log(customers);
	};

});
/**
  * Customer.js
  *
  */
var Customer = function(customerId, firstName, lastName, phoneNumber, email) { // Customer CTOR
	this.customerId =  customerId || -1; // "-1"
	this.firstName = firstName || "";
	this.lastName = lastName ||  "";
	this.phoneNumber = phoneNumber || "";
	this.email = email || "";

};

Customer.prototype.getFirstName = function() {
	return this.firstName;
};

Customer.prototype.setFirstName = function(firstName) {
	this.firstName = firstName;
};


"use strict"; // require us to pre-declare our vars

/**
 * CustomerForm.controller.js
 * Supports the CustomerForm.html for registering a new Customer
 */
angular.module('ctsng').controller('CustomerFormController', function($scope, $rootScope) {
	$scope.customer = new Customer(); // { }
	$scope.register = function() {
		
		// Loosely coupled systems use Event-Driven approaches
		$rootScope.$broadcast("CustomerRegisteredEvent", $scope.customer);
		// Tightly coupled - avoid this
		//AddCustomerService.addCustomer($scope.customer); 
		
		$scope.customer = new Customer();
	};

});


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