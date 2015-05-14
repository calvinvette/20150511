angular.module("ctsng").controller("CustomerTableController", function($scope, $rootScope, AddCustomerService) {
	$scope.customers = AddCustomerService.getCustomers();
	$scope.selectedCustomer = new Customer();

	/*
	$rootScope.$on("CustomerListUpdated", function(evt, data) {
		$scope.customers = data;
	});

	// At startup, this will request the list of customers
	$scope.$emit("CustomerListRequestEvent");
	*/
	
	$scope.selectCustomer = function(cust) {
		$scope.selectedCustomer = cust;
		console.log("Just selected: " + $scope.selectedCustomer);
	};
});
