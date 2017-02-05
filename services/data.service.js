(function(){

	'use strict';

	angular.module('plunker').service('dataService', dataService);

	function dataService($http , $q){

		var self =this;

		self.getUser = function (){
			return $http.get('http://mocker.egen.io/users').then(function(response){

				console.log(response.data);

				return response.data;

			}, function(response){
					console.log(response);
					return $q.reject(response);
			})
		};

		

	}




})();