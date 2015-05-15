"use strict";

/**
 * Add Customer Local Storage Service
 * Take a customer and store it in local storage
 *
 */
angular.module('ctsng').service("AddCustomerRESTService", function($rootScope, $http) {
	
	$rootScope.$on("CustomerRegisteredEvent", function(evt, data) {
		//console.log(evt);
		addCustomer(data);
	});

	var addCustomer = function(customer) {
		console.log("Updating server with new customer: " + customer);
        $http.post("http://www.nextgeneducation.com/weasley/", customer)
            .success(function(data, status, headers, config) {
                console.log("Kapla! Server updated with customer: " + customer);
            })
            .error(function(error, status, headers, config) {
                console.log("Failed to update server with: " + customer + ": " + error);
            });
	};


	$rootScope.$on("CustomerListRequestEvent", function(evt, data) {
		$http.get("http://www.nextgeneducation.com/weasley/customers.json")
            .success(function(data, status, headers, config) {
                // returns raw {} objects, not customers, so convert the data[] to customers[]
                var customers = data;
                for (var i = 0; i < customers.length; i++) {
                    var cust = new Customer();
                    angular.extend(cust, customers[i]);
                    customers[i] = cust;
                }
                $rootScope.$broadcast("CustomerListUpdated", customers);
            })
            .error(function(error, status, headers, config) {
                console.log("Failed to retrieve Weasley customer data!");
                console.log(error);
            });

    });

		

});