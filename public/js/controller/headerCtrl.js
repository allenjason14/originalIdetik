angular.module('wattReads').controller('headerCtrl', function($scope, mainService, $state, categoryService){

  $scope.getUser = function(){
    mainService.getUser().then(function(response){
       console.log("hit from userList getUser", response)
      $scope.user = response;
    })
  }

  $scope.getUser();

  $scope.categoryName = {
    user: $scope.user._id,
    name: ""
  };

    $scope.toggleVisible = false;

    $scope.toggleMenu = function() {
      $scope.toggleVisible = !$scope.toggleVisible;
    }

    $scope.logout = function () {
      console.log("Ctrl logout working");
      mainService.logout().then(function(response){
        $state.go('login');
        console.log(response);
        $scope.toggleVisible = true;
      });
    };

    $scope.readUserCategory = function(){
      categoryService.readUserCategory($scope.user).then(function(response){
        console.log("hit from userList readUserStory", response);
        $scope.category = response.category;
      })
    };

    $scope.readUserCategory();

    $scope.addCategory = function(categoryName){
      console.log('fire from addCategory', categoryName)
        categoryService.addCategory(categoryName).then(function(response){
          console.log("hit from return addCat", response);
          $scope.category.push(response);
          // $scope.readUserCategory();
        })
    };

});
