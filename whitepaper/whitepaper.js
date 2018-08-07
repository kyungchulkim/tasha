angular.module('whitepaper', [])
  .directive('whitepaper', function () {
    return {
      scope: {
      },
      templateUrl: 'whitepaper/whitepaper.tpl.html?ver=0807',
      link: function ($scope) {

        var scene5 = new ScrollMagic.Scene({
          triggerElement: "#parallax5",
          offset: -150
        }).setVelocity("#parallax5 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop5 = new ScrollMagic.Scene({
          triggerElement: "#parallax5",
          triggerHook: 1,
          offset: 750
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene13 = new ScrollMagic.Scene({
          triggerElement: "#parallax13",
          offset: -300
        }).setVelocity("#parallax13 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
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

        scene13.on("enter", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax13");
        });

        scene13.on("leave", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          $scope.$parent.$apply();
        });



        $scope.whitepaper_en = "templates/temco_whitepaper_en.pdf";
        $scope.whitepaper_kr = "templates/temco_whitepaper_kr.pdf";
        $scope.fastfact_en = "templates/fast_fact_one_page_en.pdf";
        $scope.fastfact_kr = "templates/fast_fact_one_page_kr.pdf";
        $scope.fastfact_cn = "templates/fast_fact_one_page_cn.pdf";
        // $scope.$on("language", function(event,message){

        //   if(message === "en"){
        //     $scope.whitepaper = "templates/temco_whitepaper_eng.pdf";
        //     $scope.fastfact = "templates/temco_whitepaper_eng.backup.180704.pdf";
        //   }else if(message === "kr"){
        //     $scope.whitepaper = "templates/temco_whitepaper_eng.pdf";
        //     $scope.fastfact = "templates/temco_whitepaper_eng.backup.180704.pdf";
        //     // $scope.whitepaper = "templates/temco_whitepaper_kr.pdf";
        //   }
        // })
      }
    };
  });