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
		customers = JSON.parse(wls);
		for (var i = 0; i < customers.length; i++) {
			var cust = new Customer();
			angular.extend(cust, customers[i]);
			customers[i] = cust;
		}
		$rootScope.$broadcast("CustomerListUpdated", customers);
	}
	
		

});