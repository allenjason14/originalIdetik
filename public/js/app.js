angular.module('wattReads', ['ui.router', 'textAngular'])
  .config(function($urlRouterProvider, $stateProvider){

      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state("home", {
          url: '/',
          templateUrl: "routes/homeTem.html",
          controller: "homeCtrl",
          resolve: {
            user: function(mainService) {
              return mainService.getUser();
            }
          }
        })

          .state("edit", {
            url: '/edit/:id',
            templateUrl: "routes/editTem.html",
            controller: "editCtrl",
            resolve: {
              user: function(mainService) {
                return mainService.getUser();
              }
            }
          })

        .state("newpage", {
          url: "/new",
          templateUrl: "routes/newPageTem.html",
          controller: "newPageCtrl",
          resolve: {
            user: function(mainService) {
              return mainService.getUser();
            }
        }
      })
          .state("login", {
            url: "/login",
            templateUrl: "routes/loginTem.html",
            controller: "loginCtrl"
          })

          .state("wikipage", {
            url: "/wikipage/:id",
            templateUrl: "routes/wikiPageTem.html",
            resolve: {
              user: function(mainService) {
                return mainService.getUser();
              }
            },
            controller: "wikiPageCtrl"
          })

          .state("menu", {
          url: "/menu/:id",
          templateUrl: "routes/menuTem.html",
          controller: 'menuCtrl',
          resolve: {
            user: function(mainService) {
              return mainService.getUser();
            }
          }
        })

        .state("yourPages", {
        templateUrl: "routes/yourPagesTem.html",
        controller: "yourPageCtrl",
        resolve: {
          user: function(mainService) {
            return mainService.getUser();
          }
        }
        })

          .state("profile", {
          templateUrl: "routes/profileTem.html",
          controller: 'profileCtrl',
          resolve: {
            user: function(mainService, $state) {
              return mainService.getUser().then(function(response){
                return response.data;
              }).catch(function(err) {
                $state.go('login')
              });
            }
          }
        })

    });
