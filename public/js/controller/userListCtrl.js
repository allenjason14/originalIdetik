angular.module('wattReads').controller('userListCtrl', function(storyService, mainService, $scope, $state, categoryService){

  $scope.tabs = [];
  $scope.chooseArr = [];


  // $scope.selectName = function(num) {
  //   $scope.chooseArr = [];
  //   $state.go('wikipage');
  //   $scope.chooseArr.push($scope.story[num]);
  //   console.log($scope.story[num]);
  //   console.log($scope.chooseArr[0].body);
  // }

  $scope.getUser = function(){
    mainService.getUser().then(function(response){
       console.log("hit from userList getUser")
      $scope.user = response;
    })
  }

  $scope.getUser();


  $scope.categoryName = {
    user: $scope.user._id,
    name: ""
  };

  $scope.readUserCategory = function(){
    categoryService.readUserCategory($scope.user).then(function(response){
      console.log("hit from userList readUserStory");
      $scope.category = response.category;
    })
  };

  $scope.readUserCategory();

  $scope.addCategory = function(categoryName){
    console.log('fire from addCategory', categoryName)
      categoryService.addCategory(categoryName).then(function(response){
        console.log("hit from return addCat", response);
      })
      // $scope.readUserCategory();
  };

  // $scope.readUserStory = function(){
  //   storyService.readUserStory($scope.user).then(function(response){
  //     console.log("hit from userList readUserStory");
  //     $scope.story = response;
  //   })
  // };
  //
  // $scope.readUserStory();

});
