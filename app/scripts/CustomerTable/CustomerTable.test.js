/**
 * Unit Test for Customer Table
 * Created by Calvin on 5/15/15.
 */
"use strict"; // requires pre-declare vars.

describe("Customer Table Tests", function() {
    var scope, customerTableController;
    var $controller, $rootScope;
    var defaultCustomers = [
        new Customer(1, "Harry", "Potter", "555-1212", "harry@hogwarts.ac.uk"),
        new Customer(2, "Ron", "Weasley", "555-1213", "ron@hogwarts.ac.uk"),
        new Customer(3, "Hermione", "Granger", "555-1414", "hermione@hogwarts.ac.uk")
    ];

    beforeEach(module('ctsng'));

    beforeEach(inject(function(_$rootScope_, _$controller_) {
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        scope = $rootScope.$new();
        scope.customers = defaultCustomers;

        customerTableController = _$controller_('CustomerTableController', {
                $scope : scope
        });
    }));

    it("should populate the table after setting the model", function() {
        expect(customerTableController).toBeDefined();
        console.log(customerTableController);
        expect(customerTableController.$scope).toBeDefined();
        console.log(customerTableController.$scope);
        expect(customerTableController.$scope.customers).toBeDefined();
        expect(customerTableController.$scope.customers.length).toBe(3);
        expect(customerTableController.$scope.customers[0].firstName).toBe("Harry");
    });




});

