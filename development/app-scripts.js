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
	){
  console.log('Your angular app is initialized.  Happy hacking!');
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
			// TODO - Use "extend" to convert regular generic object into customer
			// jQuery, Underscore, or Angular
		}
		for (var i = 0; i < customers.length; i++) {
			var cust = new Customer();
			angular.extend(cust, customers[i]);
			customers[i] = cust;
		}
		customers.push(customer);
		window.localStorage.setItem("customers", JSON.stringify(customers));
		//console.log(customers);
	};
	
	var wls = window.localStorage.getItem("customers");
	if (wls) {
		var customers = JSON.parse(wls);
		for (var i = 0; i < customers.length; i++) {
			var cust = new Customer();
			angular.extend(cust, customers[i]);
			customers[i] = cust;
		}
		$rootScope.$broadcast("CustomerListUpdated", customers);
	}
	
		

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
	
	$rootScope.$on("CustomerListUpdated", function(evt, data) {
			if (customers != data) {
				console.log("Changing customers!");
				customers = data;
			} 
	});
	
	$rootScope.$on("CustomerListRequestEvent", function(evt, data) {
		$rootScope.$broadcast("CustomerListUpdated", getCustomers());
	});

	var getCustomers = function() {
		return customers;
	};

	/*
	Only use this version if you are using
	direct dependency injection of the AddCustomerService
	(This creates "tight coupling")

	this.getCustomers = function() {
		return customers;
	}
	*/
	


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

Customer.prototype.getLastName = function() {
	return this.lastName;
};


Customer.prototype.setFirstName = function(firstName) {
	this.firstName = firstName;
};

Customer.prototype.toString = function() {
	return "Customer #" + this.customerId 
			+ ": " + this.getFirstName()
			+ " " + this.getLastName()
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


/*
This is the tightly-coupled direct version of getting the customer list from the AddCustomerService:

angular.module("ctsng").controller("CustomerTableController", function($scope, $rootScope, AddCustomerService) {
 $scope.customers = AddCustomerService.getCustomers();

 */
angular.module("ctsng").controller("CustomerTableController", function($scope, $rootScope) {
	$scope.customers = [ ];
	$scope.selectedCustomer = new Customer();


	$rootScope.$on("CustomerListUpdated", function(evt, data) {
		$scope.customers = data;
	});

	// At startup, this will request the list of customers
	$scope.$emit("CustomerListRequestEvent");

	$scope.selectCustomer = function(cust) {
		$scope.selectedCustomer = cust;
		console.log("Just selected: " + $scope.selectedCustomer);
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