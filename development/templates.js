(function(module) {
try { module = angular.module("ctsng.templates"); }
catch(err) { module = angular.module("ctsng.templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("foo/foo.tpl.html",
    "<div>foo</div>");
}]);
})();
