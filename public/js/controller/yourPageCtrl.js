angular.module('wattReads').controller("yourPageCtrl", function($scope, user, storyService){

  $scope.user = user.data;

  $scope.readUserStory = function(){
    storyService.readUserStory($scope.user).then(function(response){
      console.log("hit from userList readUserStory");
      $scope.story = response;
    })
  };

  $scope.readUserStory();


  $scope.getFiltered= function(obj, idx){
   //Set a property on the item being repeated with its actual index
   //return true only for every 1st item in 3 items
    return !((obj._index = idx) % 3);
}

});
