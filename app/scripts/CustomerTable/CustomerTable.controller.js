angular.module("ctsng").controller("CustomerTableController", function($scope, $rootScope) {
	$scope.customers = [];
	$scope.selectedCustomer = new Customer();
	
	$rootScope.$on("CustomerListUpdated", function(evt, data) {
		$scope.customers = data;
	});
	
	$scope.$emit("CustomerListRequestEvent");
	
	$scope.selectCustomer = function(cust) {
		$scope.selectedCustomer = cust;
		console.log("Just selected: " + $scope.selectedCustomer);
	};
});
