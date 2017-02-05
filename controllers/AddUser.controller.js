(function(){
  
  'use strict';
  
  angular.module('plunker').controller('AddUserController' ,AddUserController);
  
 // UserController.$inject[];
  
  function AddUserController($location , dataService){

    var userVm = this;

  	init();
  	function init(){
  		console.log("Inside add user Controller");
    	
  	}


      userVm.addUser = function(){

        
        console.log(userVm.newUser);

        dataService.getUser().then(function(user){
          user.push(userVm.newUser);
        }, function(response){
            console.log(response);
        })

      };

      userVm.goBack = function(path){
          $location.path(path);
      }
      
    
    
  }
  
  
  
  })();