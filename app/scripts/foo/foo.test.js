// ---SPECS-------------------------

describe('ctsng', function () {
  var scope,
    controller;
  
  beforeEach(function () {
    module('ctsng');
  });

  describe('CtsngController', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('CtsngController', {
        '$scope': scope
      });
    }));
        
    it('sets the name', function () {
      scope.fooBar();
      expect(scope.foo).toBe('bar');
    });
  });
    
});
