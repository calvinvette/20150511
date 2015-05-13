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

	


});