(function(){

	'use strict';

	angular.module('plunker').controller('DisplayUserController', DisplayUserController);

	function DisplayUserController($location, sharedService){

		var displayVm = this;

		init();

		function init(){
				console.log("sharedService-details" + sharedService.getItem());



	 displayVm.userDet = sharedService.getItem()[0] ;

	// console.log("displayVm" + displayVm.userDet.email);

		};

		displayVm.goBack = function(path){

			$location.path(path);

		};

	
	 	
	 
	}



})();