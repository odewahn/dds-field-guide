(function(){
	
   var app = angular.module('splashPage', []);
   app.controller('SplashController', ['$http', function($http) {
	  var contents = this;
	  contents.splashdata = {};
	  $http.get("/index.json").success(function(data) {
		contents.splashdata = data;
	  });
   }]);	
})();
