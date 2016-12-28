var myapp = angular.module('myApp', []);

myapp.controller('MyCtrl', ['$scope', function($scope) {

      var self = this;
	  
	  self.object1 = 0;
	  self.object2 = 0;
	  
	  self.getResult = function()
	  {
	    self.result = parseInt(self.object1) + parseInt(self.object2);	  
	  }
	 

	  
      
      
}]);





