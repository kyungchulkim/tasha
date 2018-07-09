angular.module('header', [])
  .directive('header', function($interval){
    return{
      scope:{
      },
      templateUrl: 'header/header.tpl.html?ver=0706',
      link: function($scope) {
        var scene1 = new ScrollMagic.Scene({
          triggerElement: "#parallax1",
          offset:60
        }).setVelocity("#parallax1 .content", {opacity: 1.0,}, {duration: 400})
        //.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
        //.addIndicators()
          .addTo($scope.$parent.controller);



       // navbar color 바뀌는 위치를 정하기 위해서 설정

        // if(window.innerWidth < 1024)
        // {
        //   var headerTransform = new ScrollMagic.Scene({
        //     triggerElement: "#headerTransform",
        //     offset:400
        //   }).setClassToggle(".navbar", "navbar-color")
        //     .addTo($scope.$parent.controller);
        // }
        // else if(window.innerWidth < 450)
        // {
        //   var headerTransform = new ScrollMagic.Scene({
        //     triggerElement: "#headerTransform",
        //     offset:350
        //   }).setClassToggle(".navbar", "navbar-color")
        //     .addTo($scope.$parent.controller);
        // }
        // else{
        //   var headerTransform = new ScrollMagic.Scene({
        //     triggerElement: "#headerTransform",
        //     offset:500
        //   }).setClassToggle(".navbar", "navbar-color")
        //     .addTo($scope.$parent.controller);
        // }
        
        var textList;
        
        var textListEn = [{
            item : "Product"
          },
          {
            item : "Process"
          },
          {
            item : "Data"
          },
          {
            item : "Value"
          }
        ];

        var textListKr = [{
          item : "Product"
        },
        {
          item : "Process"
        },
        {
          item : "Data"
        },
        {
          item : "Value"
        }
      ];

        // var textListKr = [{
        //     item : "제품"
        //   },
        //   {
        //     item : "진행"
        //   },
        //   {
        //     item : "데이터"
        //   },
        //   {
        //     item : "가치"
        //   }
        // ];
        // 3초 타이머에 따라서 글씨 변환되는 기능

        textList = textListEn;
        $scope.index = textList[0].item;

        // $scope.$on("language", function (event,message){

        //   if(message === 'en'){
            
        //     textList = textListEn;
        //     $scope.index = textListEn[textListIndex-1].item;
          
        //   }else if(message === 'kr'){
            
        //     textList = textListKr;
        //     console.log(textListIndex-1);
        //     $scope.index = textListKr[textListIndex-1].item;
          
        //   }

        // });

        let textListIndex =1;

        $interval(function() {

          $scope.fadein = {
            "width":"18vw",
            "display":"inline-block",
            "text-align":"center",
            "-webkit-animation": "fadein 3s infinite",
            "-moz-animation": "fadein 3s infinite",
            "animation": "fadein 3s infinite"
          }

          $scope.index = textList[textListIndex].item;
          textListIndex++;

          if(textListIndex==3){
            textListIndex=0;
          }
          
        }, 3000);

        
        window.onresize = function(event) {
        
          if(languageFlag === "en"){
            $scope.en = {
              "display" : "block",
              "animation" : "none",
            }

            $scope.kr = {
              "display" : "none"
            }
          }else if(languageFlag === "kr"){
            $scope.en = {
              "display" : "none"
            }

            $scope.kr = {
              "display" : "block"
            }
          }
          
          if(window.innerWidth<1024){
            $scope.en = {
              "display" : "none"
            }

            $scope.kr = {
              "display" : "none"
            }
          }

        };


        $scope.kr = {
          "display" : "none"
        }

        var languageFlag = "en";

        $scope.$on("language", function (event,message){

          languageFlag = message;
          
          if(message === "en"){
            $scope.en = {
              "display" : "block",
              "animation" : "none",
            }

            $scope.kr = {
              "display" : "none"
            }
          }else if(message === "kr"){
            $scope.en = {
              "display" : "none"
            }

            $scope.kr = {
              "display" : "block"
            }
          }
          
          if(window.innerWidth<1024){
            $scope.en = {
              "display" : "none"
            }

            $scope.kr = {
              "display" : "none"
            }
          }
          
          
        });

      }
    };
  });