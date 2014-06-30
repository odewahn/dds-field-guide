(function(){
		
   var app = angular.module('splashPage', []);

   app.directive('mailchimp', function() {
      return {
	     restrict: 'E',
		 templateUrl: 'app/mailchimp.html'
	  };
   });
   

   app.directive('themes', function() {
      return {
	     restrict: 'E',
		 templateUrl: 'app/themes.html'
	  };
   });

   app.directive('quotes', function() {
      return {
	     restrict: 'E',
		 templateUrl: 'app/quotes.html'
	  };
   });

   // Main controller to load the data for the homepage
   app.controller('SplashController', ['$http',function($http) {
	  var contents = this;
	  contents.splashdata = {};
	  $http.get("app/index.js").success(function(data) {
		contents.splashdata = data;
	  });
   }]);

   app.controller('ContactController', ['$http', function($http) {
      this.contact = {};

      this.submitContact = function(contact){
	      //Grab the data again -- fucking javascript scoping
		  $http.get("app/index.js").success(function(data) {
			
			 // set up mailchimp per https://github.com/keithio/angular-mailchimp/blob/master/angular-mailchimp.js#L24-31
			 // these data are found in mailchimp post action
			 //  oreilly.us8.list-manage.com/subscribe/post?u=ae44d1d104bea4a0b3a65c5e5&amp;id=6210a8610e"
			 mailchimp_username = "oreilly";
			 mailchimp_dc = "us8";
			 mailchimp_u = "ae44d1d104bea4a0b3a65c5e5";
			 mailchimp_id = "6210a8610e";
			
			 url = 'http://' + mailchimp_username + '.' + mailchimp_dc + '.list-manage.com/subscribe/post-json';
			 params = {
	            'EMAIL': contact.email,
	            'NAME': contact.name,
	            'TITLE': contact.title,
	            'ORG': contact.organization,
	            'COMMENTS': contact.comments,
	            'PROJECT': data.project_name,
	            'SOURCE': data.source,
	            'c': 'JSON_CALLBACK',
	            'u': mailchimp_u,
	            'id': mailchimp_id
	         };

			 $.ajax({
			    url: url,
			    data: params,
			    type: 'POST',
			    crossDomain: true,
			    dataType: 'jsonp',
			    success: function(res) { console.log(res); },
			    error: function(res) { console.log(res); },
			    beforeSend: function(xhrObj){
		                xhrObj.setRequestHeader("Content-Type","application/json");
		                xhrObj.setRequestHeader("Accept","application/json");
		        }
			 });
	
	
	         // Now I need to figure out how to post this
	         console.log("Post to: " + url)	
			 console.log(params);

		  });	     
      };

   }]);
	
})();
