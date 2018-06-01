angular.module('technology', [])
  .directive('technology', function(){
    return{
      scope:{
      },
      templateUrl: 'technology/technology.tpl.html?version=0601',
      link: function($scope) {
        var scene6 = new ScrollMagic.Scene({
          triggerElement: "#parallax6",
          offset:-100
        }).setVelocity("#parallax6 .content", {opacity: 1.0}, {duration: 400})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop6 = new ScrollMagic.Scene({
          triggerElement: "#parallax6",
          triggerHook:1,
          offset:200
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        $scope.$parent.navLoaded.push('technology');

        sceneTop6.on("enter", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();
        });

        sceneTop6.on("leave", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();
        });


        scene6.on("enter", function (event) {
          $scope.$parent.activeNav = 'technology';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax6");
        });

        scene6.on("leave", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          $scope.$parent.$apply();
        });

      }
    };
  });