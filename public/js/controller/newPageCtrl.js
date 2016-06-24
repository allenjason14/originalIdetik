angular.module("wattReads").controller("newPageCtrl", function($scope, storyService, mainService, user, $state, categoryService){

  $scope.user = user.data;
  $scope.storyName = {
      user: $scope.user._id
    }
  // $scope.userId = $scope.user._id;

  $scope.readUserCategory = function(){
    categoryService.readUserCategory($scope.user).then(function(response){
      console.log("hit from userList readUserStory");
      $scope.category = response.category;
    })
  };

  $scope.readUserCategory();


  $scope.chooseArr = [];
  $scope.saveArr = [];
  $scope.toggleTab = false;
  $scope.toggleDisplay = false;
  $scope.toggleDropDown = false;

  $scope.selection=[];


  $scope.storyData = {
    body:{}
  }

  $scope.addOptions = {
    name: "",
    id: ""
  }

  $scope.addStory = function(){
    console.log($scope.storyName.name)
    if($scope.storyName.name !== undefined){
      console.log("this is what I'm sending from addStory " + $scope.storyName);
      storyService.addStory($scope.storyName).then(function(response){
      // $scope.saveArr.push(response);
      console.log("this is the response I'm getting: " + response);
      $scope.storyId = response._id;
      $scope.addOptions.id = $scope.storyId;
      $scope.storyRes = response;
    })
    $scope.toggleTab = true;
    console.log($scope.toggleTab);
}
  else {
  alert("Please Name Your Page");
}
  }

  $scope.saveSections = function(){
    console.log("This is my attempt to update " + $scope.storyData);
    storyService.saveSections($scope.storyData, $scope.storyId).then(function(response){
      console.log(response , " from saveSections function");
      $scope.updatedStory = response;
      $scope.storyData.body.text = "";
      $scope.storyData.body.title = "";
      $scope.toggleDisplay = true;

    })
  };

  $scope.addCat = function(){
    console.log("hit from add to Cat", $scope.addOptions);
    categoryService.addCat($scope.addOptions).then(function(response){
      console.log("hit from addToCat return", response)
    })
  };

$scope.toggleDrop = function(){
  $scope.toggleDropDown = !$scope.toggleDropDown;
};


    $scope.toggleSelection = function toggleSelection(catID) {
       var idx = $scope.selection.indexOf(catID);
   
       if (idx > -1) {
         $scope.selection.splice(idx, 1);
       }
   
       else {
         $scope.selection.push(catID);
       }
     };

  // $scope.addStoryToCat = function(){
  //   console.log('hit from fired remove addNotes')
  //     categoryService.addStoryToCat($scope.selection).then(function(response){
  //       console.log("update from removeNotes return");
  //     })
  // };

});
