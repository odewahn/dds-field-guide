(function(){
	
   var dat = [];

   function setDat(d) {
      dat = d;	
   }

   var app = angular.module('splashPage', []);
   app.controller('SplashController', function() {
      $.ajax({
	     url: "index.json",
	     dataType: 'json',
	     async: false,
	     success: function(data){
		    setDat(data);
		    console.log(data);
	     }
      });
      this.hi = "Howdy, andrew!"
      this.splashdata = dat;

   })	
})();
