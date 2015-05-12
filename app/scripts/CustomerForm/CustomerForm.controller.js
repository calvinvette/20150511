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

