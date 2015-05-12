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