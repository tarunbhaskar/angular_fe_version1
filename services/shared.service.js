(function(){
	'use strict';

	angular.module('plunker').service('sharedService' , sharedService);

	function sharedService(){
		var itemList = [];

  var addItem = function(newObj) {
      itemList.push(newObj);
  };

  var getItem = function(){
      return itemList;
  };

  return {
    addItem: addItem,
    getItem: getItem
  };
	}
})();