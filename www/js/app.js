// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){

        $stateProvider
          .state('eventmenu',{
            url:"/event",
            abstract: true,
            templateUrl:"templates/event-menu.html"
          })
          .state('eventmenu.home',{
            url:"/home",    
            views:{
              "menuContent":{
                templateUrl:"templates/home.html"
              }
            }
          })
          .state('eventmenu.checkin',{
            url:"/check-in",
            views:{
              'menuContent':{
                templateUrl:"templates/check-in.html"
              }
            }
          })
          .state('eventmenu.attendees',{
            url:"/attendees",
            views:{
              'menuContent':{
                templateUrl:"templates/attendees.html"
              }
            }
          })
              $urlRouterProvider.otherwise("/event/home");
})

.controller('mainController',function($scope,$ionicSideMenuDelegate){

          $scope.toggleLeft = function(){
            $ionicSideMenuDelegate.toggleLeft();
          }
})