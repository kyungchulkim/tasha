angular.module('header', [])
  .directive('header', function($interval){
    return{
      scope:{
      },
      templateUrl: 'header/header.tpl.html',
      link: function($scope) {
        var scene1 = new ScrollMagic.Scene({
          triggerElement: "#parallax1",
          offset:60
        }).setVelocity("#parallax1 .content", {opacity: 1.0,}, {duration: 400})
        //.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var headerTransform = new ScrollMagic.Scene({
          triggerElement: "#headerTransform",
          offset:500
        }).setClassToggle(".navbar", "navbar-color")
        //.addIndicators()
          .addTo($scope.$parent.controller);



        var textList = [{
            item : "Process"
          },
          {
            item : "Process"
          },
          {
            item : "Process"
          },
          {
            item : "Process"
          }
        ]

        // 3초 타이머에 따라서 글씨 변환되는 기능
        
        $scope.index = textList[0].item;

        let i =1;

        $interval(function() {

          $scope.fadein = {
            "width":"18vw",
            "display":"inline-block",
            "text-align":"center",
            "-webkit-animation": "fadein 3s infinite",
            "-moz-animation": "fadein 3s infinite",
            "animation": "fadein 3s infinite"
          }

          $scope.index = textList[i].item;
          i++;
          if(i==3){
            i=0;
          }
          
        }, 3000);
        
      }
    };
  });