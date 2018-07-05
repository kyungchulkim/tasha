angular.module('whitepaper', [])
  .directive('whitepaper', function(){
    return{
      scope:{
      },
      templateUrl: 'whitepaper/whitepaper.tpl.html?ver=0703',
      link: function($scope) {

        var scene5 = new ScrollMagic.Scene({
          triggerElement: "#parallax5",
          offset:-150
        }).setVelocity("#parallax5 .content", {opacity: 1.0}, {duration: 400})
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop5 = new ScrollMagic.Scene({
          triggerElement: "#parallax5",
          triggerHook:1,
          offset:750
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        $scope.$parent.navLoaded.push('whitepaper');

        scene5.on("enter", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          $scope.$apply();

          $scope.$parent.aniDiv("#parallax5");
        });

        scene5.on("leave", function (event) {
          $scope.$parent.activeNav = 'about';
          $scope.$apply();
        });

        sceneTop5.on("enter", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();
        });

        sceneTop5.on("leave", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();
        });

        $scope.whitepaper = "templates/temco_whitepaper_eng.pdf";
        
        $scope.$on("language", function(event,message){

          if(message === "en"){
            $scope.whitepaper = "templates/temco_whitepaper_eng.pdf";
          }else if(message === "kr"){
            $scope.whitepaper = "templates/temco_whitepaper_eng.pdf";
            // $scope.whitepaper = "templates/temco_whitepaper_kr.pdf";
          }
        })
      }
    };
  });