angular.module("wattReads").controller("menuCtrl", function($scope, categoryService, user, $stateParams){

  $scope.user = user.data;
  $scope.id = $stateParams.id;

  // $scope.categoryName = {
  //   user: $scope.user._id,
  //   name: ""
  // };
  //
  //
  // $scope.readUserCategory = function(){
  //   categoryService.readUserCategory($scope.user).then(function(response){
  //     console.log("hit from userList readUserStory");
  //     $scope.category = response.category;
  //   })
  // };
  //
  // $scope.readUserCategory();

  $scope.readCategory = function(){
      console.log("This is my $scope.id: ", $scope.id);
      categoryService.readCategory($scope.id).then(function(response){
          console.log("This is the return from menuCtrl readCategory", response);
          $scope.selCat = response;
      })
  };

  $scope.readCategory();


$scope.addCategory = function(categoryName){
  console.log('fire from addCategory', categoryName)
    categoryService.addCategory(categoryName).then(function(response){
      console.log("hit from return addCat", response);
    })
};

$scope.updateCategory = function(){
  console.log("hit from updateCat fired");
  categoryService.updateCategory(categoryName, catId).then(function(response){
    console.log("hit from update cat", response);
  })
}

//
// $scope.bob =[
//   {
//     name: "bob",
//     body: {
//       name:"tom",
//       body:{}
//     }
//   },
//   {
//     name:"bob1",
//     body: {}
//   },
//   {
//     name: "tim",
//     body: {
//       name: "Chris",
//       body:{}
//     }
//   },
//   {
//     name: "tim1",
//     body: {}
//   },
//   {
//     name:"tim2",
//     body:{}
//   }
// ]
//
// $scope.list = [$scope.tim, $scope.bob];



});
