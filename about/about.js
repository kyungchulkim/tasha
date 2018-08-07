angular.module('about', ['advisor-board'])
  .directive('about', function ($timeout) {
    return {
      scope: {
      },
      templateUrl: 'about/about.tpl.html?ver=0807',
      link: function ($scope) {

        var scene2 = new ScrollMagic.Scene({
          triggerElement: "#parallax2",
          offset: 0
        }).setVelocity("#parallax2 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var scene3 = new ScrollMagic.Scene({
          triggerElement: "#parallax3",
          offset: -50
        }).setVelocity("#parallax3 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop3 = new ScrollMagic.Scene({
          triggerElement: "#parallax3",
          triggerHook: 1,
          offset: 75
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene4 = new ScrollMagic.Scene({
          triggerElement: "#parallax4",
          offset: -250
        }).setVelocity("#parallax4 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop4 = new ScrollMagic.Scene({
          triggerElement: "#parallax4",
          triggerHook: 1,
          offset: -325
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene14 = new ScrollMagic.Scene({
          triggerElement: "#parallax14",
          offset: -300
        }).setVelocity("#parallax14 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var topTransform = new ScrollMagic.Scene({
          triggerElement: "#parallax2",
          triggerHook: 1,
          offset: 350
        }).setClassToggle("#go_to_top", "show")
          //.addIndicators()
          .addTo($scope.$parent.controller);

        $scope.$parent.navLoaded.push('about');

        scene3.on("enter", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax3");
        });

        scene3.on("leave", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();
        });

        sceneTop4.on("enter", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax4");
        });

        sceneTop4.on("leave", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();
        });

        scene2.on("enter", function (event) {
          $scope.$parent.activeNav = 'about';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax2");

        });

        scene2.on("leave", function (event) {
          $scope.$parent.activeNav = 'home';
          $scope.$parent.$apply();
        });

        scene14.on("enter", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax14");
        });

        scene14.on("leave", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          $scope.$parent.$apply();
        });

        let isShow = [];

        $scope.open_advisor = function (index) {

          let countTrue = 0;
          for (j = 0; j < 2; j++) {
            if (isShow[j] === true) {
              countTrue++;
            }
          }

          if (countTrue === 0) {
            isShow[index] = !isShow[index];
            countTrue = 0;
            $("html, body").animate({scrollTop : $('.advisor-board-detail-wrapper').offset().top-72 },500);
          }
          else {
            for (i = 0; i < 4; i++) {
              if (i != index) {
                isShow[i] = false;
              } else {
                if (isShow[index] === true) {
                  isShow[index] = !isShow[index];
                  
                } else {
                  $timeout(function () {
                    isShow[index] = !isShow[index];
                  }, 500);
                  $("html, body").animate({scrollTop : $('.advisor-board-detail-wrapper').offset().top-72 });

                }
              }
            }
          }

          
        }

        $scope.isShow = function (index) {

          let display = isShow[index] ? 'block' : 'block';
          let max_height = isShow[index] ? '500px' : '0';
          return {
            "display": display,
            "height": max_height
          }
        }
      }
    };
  });