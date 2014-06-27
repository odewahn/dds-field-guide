(function(){
	
   var app = angular.module('splashPage', []);
   app.controller('SplashController', ['$http', function($http) {
	  var contents = this;
	  contents.splashdata = {};
	  $http.get("app/index.js").success(function(data) {
		contents.splashdata = data;
	  });
   }]);	
})();
