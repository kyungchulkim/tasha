angular.module('team', ['bio', 'advisor'])
  .directive('team', function () {
    return {
      scope: {
      },
      templateUrl: 'team/team.tpl.html?ver=0807',
      link: function ($scope) {

        $scope.advisors = [
          'gabriel_kurman',
          'will_o_brien',
          // 'jaron_lukasiewicz',
          // 'adrian_lai',
          // 'brian_tk_lee',
          'yongsik',
          'hyungsik',
          'yujin',
          'jisun',
          'gichae',
          'haneul',
          'dongjin'
        ];

        $scope.teamMembers = [
          'brian_lee',
          'jaeseob_yoon',
          'hongsub_lim',
          'yongchul_kim',
          'chris',
          'joey_cho',
          'saemi_hong',
          'jongseong_kim',
          'natasha_woo',
          'sunha_hwang',
          'kyungchul_kim'

        ];

        var scene11 = new ScrollMagic.Scene({
          triggerElement: "#parallax11",
          offset: -200
        }).setVelocity("#parallax11 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop11 = new ScrollMagic.Scene({
          triggerElement: "#parallax11",
          triggerHook: 1,
          offset: -200
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene15 = new ScrollMagic.Scene({
          triggerElement: "#parallax15",
          offset: -300
        }).setVelocity("#parallax15 .content", { opacity: 1.0 }, { duration: 400 })
          //.addIndicators()
          .addTo($scope.$parent.controller);
        
        var scene16 = new ScrollMagic.Scene({
          triggerElement: "#parallax16",
          offset: -300
        }).setVelocity("#parallax16 .content", { opacity: 1.0 }, { duration: 400 })
          .addTo($scope.$parent.controller);

        var sceneTop16 = new ScrollMagic.Scene({
          triggerElement: "#parallax16",
          triggerHook: 1,
          offset: -200
        }).addTo($scope.$parent.controller);


        $scope.$parent.navLoaded.push('advisors');
        $scope.$parent.navLoaded.push('team');

        sceneTop11.on("enter", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();
        });

        sceneTop11.on("leave", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();
        });

        scene11.on("enter", function (event) {
          $scope.$parent.activeNav = 'team';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax11");
        });

        scene11.on("leave", function (event) {
          $scope.$parent.activeNav = 'prototype';
          $scope.$parent.$apply();
        });

        scene15.on("enter", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax14");
        });

        scene15.on("leave", function (event) {
          $scope.$parent.activeNav = 'whitepaper';
          $scope.$parent.$apply();
        });

        scene16.on("enter", function (event) {
          $scope.$parent.activeNav = 'advisors';
          $scope.$parent.$apply();
        });

        scene16.on("leave", function (event) {
          $scope.$parent.activeNav = 'advisors';
          $scope.$parent.$apply();
        });
      }
    };
  });