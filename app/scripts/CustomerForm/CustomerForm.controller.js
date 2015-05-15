"use strict"; // require us to pre-declare our vars

/**
 * CustomerForm.controller.js
 * Supports the CustomerForm.html for registering a new Customer
 */
angular.module('ctsng').controller('CustomerFormController', function($scope, $rootScope) {
	$scope.namePattern = "^[- A-Za-z]*$";

	/*
	$scope.namePattern = function() {
		if ($locale == "en_us") {
			return "^[- A-Za-z]*$";
		} else if ($locale == "zh") {
			return "...";
		}
	};
	*/

	$scope.customer = new Customer(); // { }
	$scope.register = function() {
		
		// Loosely coupled systems use Event-Driven approaches
		$rootScope.$broadcast("CustomerRegisteredEvent", $scope.customer);
		// Tightly coupled - avoid this
		//AddCustomerService.addCustomer($scope.customer); 
		
		$scope.customer = new Customer();
	};

});

