(function(){
  
  'use strict';
  
  angular.module('plunker').controller('UserController' ,UserController);
  
 //UserController.$inject['$location', 'dataService'];
  
  function UserController($location, dataService, sharedService){
    
      
      var mainVM = this;

      init();

      function init(){
        dataService.getUser().then(function(user){
          console.log("users" + user);
          mainVM.user = user;



        }, function(error){
          console.log(error);
        })
      };


      
      mainVM.deleteUser = function(position){
        console.log('deleted User :' + mainVM.user[position].firstName);
        mainVM.user.splice(position,1);
         console.log(mainVM.user);
      };

      mainVM.showUserDetail = function(position){

        console.log('show User :' + mainVM.user[position].firstName);
        sharedService.addItem(mainVM.user[position]);
        $location.path('/displayUser');

      };
      
     // $http.get('http://mocker.egen.io/users');
      
     mainVM.addUser = function(path){

        $location.path(path);

     };

     console.log(dataService.getUser());

     /*wrongmainVM.getUser = function(){

     }*/
      
      /*mainVM.user = [
          {
            "id": "514374b7-8015-41fa-8286-75e02ac15960",
            "firstName": "Montana",
            "lastName": "Botsford",
            "email": "Jennyfer66@gmail.com",
            "address": {
              "street": "7903 Block Mills",
              "city": "West Annamarie",
              "zip": "26239",
              "state": "IA",
              "country": "USA"
            },
            "dateCreated": "2017-01-26T14:37:19.930Z",
            "company": {
              "name": "Grady Inc",
              "website": "https://marlon.biz"
            },
            "profilePic": "http://lorempixel.com/640/480/city"
          },
          {
            "id": "114bac93-66e2-47bd-918a-4a6c5d341031",
            "firstName": "Deon",
            "lastName": "Rippin",
            "email": "Delphia.Keeling@gmail.com",
            "address": {
              "street": "3721 Judson Key",
              "city": "Verdabury",
              "zip": "69931",
              "state": "IA",
              "country": "USA"
            },
            "dateCreated": "2017-01-26T11:07:06.033Z",
            "company": {
              "name": "Dibbert Inc",
              "website": "https://luciano.name"
            },
            "profilePic": "http://lorempixel.com/640/480/cats"
          },
          {
            "id": "9f8e39df-4414-4a66-bc72-d807e08a20f2",
            "firstName": "Reuben",
            "lastName": "Pouros",
            "email": "Axel.Jacobs26@hotmail.com",
            "address": {
              "street": "8552 Durward Underpass",
              "city": "Lake Gaylord",
              "zip": "76283",
              "state": "WV",
              "country": "USA"
            },
            "dateCreated": "2017-01-25T22:24:38.617Z",
            "company": {
              "name": "Ullrich, Kautzer and Luettgen",
              "website": "https://dortha.net"
            },
            "profilePic": "http://lorempixel.com/640/480/nightlife"
          },
          {
            "id": "89608980-700f-44ea-9ee6-ff139ea4c7da",
            "firstName": "Ronny",
            "lastName": "Schimmel",
            "email": "Jarret_Okuneva@gmail.com",
            "address": {
              "street": "2134 Oda Union",
              "city": "South Bryanachester",
              "zip": "09902-1209",
              "state": "CA",
              "country": "USA"
            },
            "dateCreated": "2017-01-26T03:16:13.260Z",
            "company": {
              "name": "Aufderhar LLC",
              "website": "https://joesph.org"
            },
            "profilePic": "http://lorempixel.com/640/480/food"
          },
          {
            "id": "9518a0f9-b2cd-4e40-b021-c83930bbfb40",
            "firstName": "Arnulfo",
            "lastName": "Streich",
            "email": "Nicholas59@yahoo.com",
            "address": {
              "street": "8430 Giuseppe Forge",
              "city": "South General",
              "zip": "46209-1497",
              "state": "IN",
              "country": "USA"
            },
            "dateCreated": "2017-01-26T04:53:33.701Z",
            "company": {
              "name": "Runolfsdottir, Prosacco and Orn",
              "website": "http://jerry.name"
            },
            "profilePic": "http://lorempixel.com/640/480/business"
          },
          {
            "id": "e6a685dc-4422-436d-817e-c60558656696",
            "firstName": "Lura",
            "lastName": "Bradtke",
            "email": "Giovani.Olson65@yahoo.com",
            "address": {
              "street": "6240 Lakin Cliff",
              "city": "Alenaville",
              "zip": "85719-6054",
              "state": "MN",
              "country": "USA"
            },
            "dateCreated": "2017-01-25T20:03:20.187Z",
            "company": {
              "name": "Pollich LLC",
              "website": "https://fredy.com"
            },
            "profilePic": "http://lorempixel.com/640/480/transport"
          },
          {
            "id": "2c6dbf90-b199-445a-b58d-8bbf9af7d644",
            "firstName": "Glenna",
            "lastName": "Von",
            "email": "Jerrell_Marquardt@yahoo.com",
            "address": {
              "street": "5317 Jazmyn Divide",
              "city": "Keeblerbury",
              "zip": "02452-0437",
              "state": "NH",
              "country": "USA"
            },
            "dateCreated": "2017-01-25T23:34:06.962Z",
            "company": {
              "name": "Frami Inc",
              "website": "http://abbey.biz"
            },
            "profilePic": "http://lorempixel.com/640/480/people"
          },
          {
            "id": "40de4cc8-2b5e-4622-bb4b-34470a1aed89",
            "firstName": "Muhammad",
            "lastName": "Thompson",
            "email": "Brady_Frami@yahoo.com",
            "address": {
              "street": "608 Sanford Expressway",
              "city": "South Marjorie",
              "zip": "67890",
              "state": "ND",
              "country": "USA"
            },
            "dateCreated": "2017-01-25T16:29:50.940Z",
            "company": {
              "name": "Gleichner - Boehm",
              "website": "https://andre.com"
            },
            "profilePic": "http://lorempixel.com/640/480/technics"
          },
          {
            "id": "c53e806d-f089-46a1-b201-eedf3af2153c",
            "firstName": "Clifton",
            "lastName": "Ward",
            "email": "Emma.Jast82@yahoo.com",
            "address": {
              "street": "5933 Wilkinson Turnpike",
              "city": "South Roxanne",
              "zip": "00648",
              "state": "ID",
              "country": "USA"
            },
            "dateCreated": "2017-01-25T18:43:27.194Z",
            "company": {
              "name": "Streich - Willms",
              "website": "http://burdette.net"
            },
            "profilePic": "http://lorempixel.com/640/480/sports"
          },
          {
            "id": "b3272d74-2da4-4d70-898c-e08404c3f84c",
            "firstName": "Monserrat",
            "lastName": "Dickens",
            "email": "Torrance65@gmail.com",
            "address": {
              "street": "2313 Halvorson Stream",
              "city": "Torpstad",
              "zip": "99944",
              "state": "LA",
              "country": "USA"
            },
            "dateCreated": "2017-01-26T14:00:21.132Z",
            "company": {
              "name": "Terry, Hane and Shanahan",
              "website": "https://veda.name"
            },
            "profilePic": "http://lorempixel.com/640/480/sports"
          }
        ];*/
      }
  
  
  
  })();