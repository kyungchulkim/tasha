angular.module('team', ['bio','advisor'])
  .directive('team', function(){
    return{
      scope:{
      },
      templateUrl: 'team/team.tpl.html?ver=0703',
      link: function($scope) {

        $scope.advisors = [
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
          offset:0
        }).setVelocity("#parallax11 .content", {opacity: 1.0}, {duration: 400})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop11 = new ScrollMagic.Scene({
          triggerElement: "#parallax11",
          triggerHook:1,
          offset:-200
        })//.addIndicators()
          .addTo($scope.$parent.controller);

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

        // $scope.$on("language", function (event,message){
        //   console.log($scope.language);
        //   $scope.language = message;
        //   console.log($scope.language);
        // });


      }
    };
  });