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
		var customers = getCustomers();
		customers.push(customer);
		saveCustomers(customers);
	};

    var saveCustomers = function(customers) {
        window.localStorage.setItem("customers", JSON.stringify(customers));
    }

	$rootScope.$on("CustomerListUpdated", function(evt, data) {
        var customers = getCustomers();
		if (customers != data) { // TODO Weak comparison here  - go deeper later
			console.log("Saving customers!");
            saveCustomers(data);
		}
	});
	
	var getCustomers = function() {
		var wls = window.localStorage.getItem("customers");
		if (wls) {
			var customers = JSON.parse(wls);
			for (var i = 0; i < customers.length; i++) {
				var cust = new Customer();
				angular.extend(cust, customers[i]);
				customers[i] = cust;
			}
			return customers;
		}
		return [];
	};

	// Do this on init
	var init = function() {
		var customers = getCustomers();
		if (customers && customers.length > 0) {
			$rootScope.$broadcast("CustomerListUpdated", getCustomers());
		}
	}

    init();

	
		

});