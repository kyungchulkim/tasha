angular.module('prototype', [])
  .directive('prototype', function(){
    return{
      scope:{
      },
      templateUrl: 'prototype/prototype.tpl.html?ver=0706',
      link: function($scope) {

        var scene7 = new ScrollMagic.Scene({
          triggerElement: "#parallax7",
          offset:300
        }).setVelocity("#parallax7 .content", {opacity: 1.0}, {duration: 400})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop7 = new ScrollMagic.Scene({
          triggerElement: "#parallax7",
          triggerHook:1,
          offset:200
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        $scope.$parent.navLoaded.push('prototype');

        sceneTop7.on("enter", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();
        });

        sceneTop7.on("leave", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();
        });

        scene7.on("enter", function (event) {
          $scope.$parent.activeNav = 'prototype';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax7");
        });

        scene7.on("leave", function (event) {
          $scope.$parent.activeNav = 'technology';
          $scope.$parent.$apply();
        });

      }
    };
  });