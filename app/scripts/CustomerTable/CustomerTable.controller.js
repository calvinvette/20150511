/*
This is the tightly-coupled direct version of getting the customer list from the AddCustomerService:

angular.module("ctsng").controller("CustomerTableController", function($scope, $rootScope, AddCustomerService) {
 $scope.customers = AddCustomerService.getCustomers();

 */
angular.module("ctsng").controller("CustomerTableController", function($scope, $rootScope) {
	$scope.customers = [ ];
	$scope.selectedCustomer = new Customer(); // For selecting, esp. wrt. Master-Detail
	$scope.workingCustomer = new Customer(); // For Editing,

	$scope.editCustomer = function(cust) {
		console.log("Editing: " + cust);
		angular.copy(cust, $scope.workingCustomer); // Copy the original into workingCustomer to edit
	};

	$scope.isEditing = function(cust) {
		return $scope.workingCustomer.customerId == cust.customerId; // == or ===
	};

	$rootScope.$on("CustomerListUpdated", function(evt, data) {
		$scope.customers = data;
	});

	// At startup, this will request the list of customers
	$scope.$emit("CustomerListRequestEvent");

	$scope.selectCustomer = function(cust) {
		$scope.selectedCustomer = cust;
		console.log("Just selected: " + $scope.selectedCustomer);
	};

	$scope.keyClick = function(evt, cust)  {
		debugger;
		switch(evt.keyCode) {
			case 13: // Enter key
				$scope.saveWorkingCustomer(cust);
				break;
			case 27: // Escape key
				$scope.revertToOriginal(cust);
				break;
		}
	};

	$scope.saveWorkingCustomer = function(cust) {
		angular.copy($scope.workingCustomer, cust);
		$scope.workingCustomer = new Customer(); // -1 customer shouldn't match any customer in the array
	};

	$scope.revertToOriginal = function(cust) {
		$scope.workingCustomer = new Customer(); // -1 customer shouldn't match any customer in the array
	};
});
