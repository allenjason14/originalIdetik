angular.module("wattReads").service("categoryService", function($http){

//creates a new page

  this.addCategory = function(catName){
    console.log("hit from addCat categoryService");
    return $http({
      method: 'POST',
      url: "/newCat",
      data: catName
    }).then(function(response){
      console.log(response.data);
      return response.data
    })
  }

  this.readUserCategory = function(user){
    console.log(user);
    return $http({
      method: "GET",
      url: "/readCat/" + user._id,
    }).then(function(response){
      return response.data
    })
  }

  this.readCategory = function(catID){
    return $http({
      method: "GET",
      url: "/readSelCat/" + catID
    }).then(function(response){
      return response.data;
    })
  }

this.addCat = function(addOptions) {
  console.log("add to cat reaches this far")
   return $http({
        method: "PUT",
        url: "/addToCat/",
        data: addOptions
      }).then(function(response){
        return response.data;
      })
    };

  });

  //   this.removeNotes = function(idArray) {
  //   console.log("hit from removeNotes", idArray);
  //   return $http({
  //     method: 'PUT',
  //     url: ip + '/deleteNote/',
  //     data: {_id: idArray},
  //   }).then(function(res) {
  //   console.log(res.data);
  //   }, function(error) {
  //   console.log(error);
  //   });
  // };


this.updateCategory = function(catName, catId){
  return $http({
       method: "PUT",
       url: "/updateCat/" + catId,
       data: catName
     }).then (function(response){
        return response.data
     })
   };


// //saves new sections of a page
//   this.saveSections = function(storyData, storyId){
//     return $http({
//       method: "PUT",
//       url: "/updateStory/" + storyId,
//       data: storyData.body
//     }).then (function(response){
//       return response.data
//     })
//   };
//
//   this.updateTab = function(tabData, tabID){
//     return $http({
//       method: "PUT",
//       url: "/updateTab/" + tabId,
//       data: tabData.body
//     }).then (function(response){
//       return response.data
//     })
//   }
//
//   this.updateTab = function(tabData, tabId){
//     return $http({
//       method: "PUT",
//       url: "/updateTab/" + tabId,
//       data: tabData
//     }).then (function(response){
//       return response.data
//     })
//   }
//
//
//   this.removePage = function(storyId){
//     return $http({
//       method: "DELETE",
//       url: "/deleteStory/" + storyId
//     }).then(function(response){
//       console.log("The page is deleted");
//     })
//   }
// });
