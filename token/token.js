angular.module('token', [])
  .directive('token', function(){
    return{
      scope:{
      },
      templateUrl: 'token/token.tpl.html',
      link: function($scope) {

        var scene8 = new ScrollMagic.Scene({
          triggerElement: "#parallax8",
          offset:-300
        }).setVelocity("#parallax8 .content", {opacity: 1.0}, {duration: 400})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop8 = new ScrollMagic.Scene({
          triggerElement: "#parallax8",
          triggerHook:1,
          offset:-200
        })//.addIndicators()
          .addTo($scope.$parent.controller);

        var scene9 = new ScrollMagic.Scene({
          triggerElement: "#parallax9",
          offset:0
        }).setVelocity("#parallax9 .content", {opacity: 1.0}, {duration: 400})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var scene10 = new ScrollMagic.Scene({
          triggerElement: "#parallax10",
          offset:-200
        }).setVelocity("#parallax10 .content", {opacity: 1.0}, {duration: 400})
        //.addIndicators()
          .addTo($scope.$parent.controller);

        var sceneTop10 = new ScrollMagic.Scene({
          triggerElement: "#parallax10",
          triggerHook:1,
          offset:200
        })//.addIndicators()
          .addTo($scope.$parent.controller);

          var scene12 = new ScrollMagic.Scene({
            triggerElement: "#parallax12",
            offset:-300
          }).setVelocity("#parallax12 .content", {opacity: 1.0}, {duration: 400})
          //.addIndicators()
            .addTo($scope.$parent.controller);
  
          var sceneTop12 = new ScrollMagic.Scene({
            triggerElement: "#parallax12",
            triggerHook:1,
            offset:200
          })//.addIndicators()
            .addTo($scope.$parent.controller);

            var scene13 = new ScrollMagic.Scene({
              triggerElement: "#parallax13",
              offset:-300
            }).setVelocity("#parallax13 .content", {opacity: 1.0}, {duration: 400})
            //.addIndicators()
              .addTo($scope.$parent.controller);

        $scope.$parent.navLoaded.push('token');

        sceneTop8.on("enter", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();
        });

        sceneTop8.on("leave", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();
        });

        sceneTop10.on("enter", function (event) {
          $scope.$parent.activeScene = 'dark';
          $scope.$parent.$apply();
        });

        sceneTop10.on("leave", function (event) {
          $scope.$parent.activeScene = 'default';
          $scope.$parent.$apply();
        });

        scene8.on("enter", function (event) {
          $scope.$parent.activeNav = 'token';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax8");
        });

        scene8.on("leave", function (event) {
          $scope.$parent.activeNav = 'prototype';
          $scope.$parent.$apply();
        });

        scene9.on("enter", function (event) {
          $scope.$parent.activeNav = 'token';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax9");
        });

        scene9.on("leave", function (event) {
          $scope.$parent.activeNav = 'prototype';
          $scope.$parent.$apply();
        });
             
        scene10.on("enter", function (event) {
          $scope.$parent.activeNav = 'token';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax10");
        });

        scene10.on("leave", function (event) {
          $scope.$parent.activeNav = 'prototype';
          $scope.$parent.$apply();
        });

        scene12.on("enter", function (event) {
          $scope.$parent.activeNav = 'token';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax12");
        });

        scene12.on("leave", function (event) {
          $scope.$parent.activeNav = 'prototype';
          $scope.$parent.$apply();
        });
        
        scene13.on("enter", function (event) {
          $scope.$parent.activeNav = 'token';
          $scope.$parent.$apply();

          $scope.$parent.aniDiv("#parallax12");
        });

        scene13.on("leave", function (event) {
          $scope.$parent.activeNav = 'prototype';
          $scope.$parent.$apply();
        });

        // var languageCheck = 'en'
        
        // $owl = $('body').find('#owl-roadmap');
        
        // $owl.on('destroy.owl.carousel', function(event){
        //   console.log("destroy");
        //   $owl.removeClass('owl-loaded');
        // });

        // $owl.on('initialize.owl.carousel', function(event){
        //   console.log("initialize");
        
        // });

        // $owl.on('initialized.owl.carousel', function(event){
        //   console.log("initialized");
        
        // });

        // $scope.$on("language", function (event,message){

        //   $owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        //   $owl.find('.owl-stage-outer').children().unwrap();
        //   // $owl.trigger('destroy.owl.carousel').removeClass('owl-drag');
          
        //   if(message === 'en' && languageCheck !== 'en'){
        //     console.log("en")
        //     $scope.roadmaps = roadMapEng;
        //     languageCheck = message;
            
        //   }else if(message === 'kr' && languageCheck !== 'kr'){
        //     console.log("kr")
        //     $scope.roadmaps = roadMapKor;
        //     languageCheck = message;
            
        //   }

        // });
        $('.use-case').owlCarousel({
          nav:true,
          pagination: false,
          rewindNav : false,
          dots: true,
          items:1
        })

        $('.owl-carousel').owlCarousel({
          nav:true,
          pagination: false,
          rewindNav : false,
          responsive:{
            0:{
              items:1
            },
            360:{
              items:1
            },
            450:{
              items:2
            },
            768:{
              items:3
            },
            1025:{
              items:4
            }
          }
      })
        
      $('.owl-carousel').find('.owl-nav').removeClass('disabled');
        $('.owl-carousel').on('changed.owl.carousel', function(event) {
          $(this).find('.owl-nav').removeClass('disabled');
        });


        // $scope.roadmaps = roadMapEng;
        
      }
    };
  });
  // .directive("owlCarousel", function() {
  //   return {
  //     restrict: 'E',
  //     transclude: false,
  //     link: function (scope) {
  //       scope.initCarousel = function(element) {
  //         console.log("init1");
       
  //         // provide any default options you want
  //         var defaultOptions = {
  //           nav:true
  //         };
  //         var customOptions = scope.$eval($(element).attr('data-options'));
          
  //         // combine the two options objects
  //         for(var key in customOptions) {
  //           defaultOptions[key] = customOptions[key];
  //         }
  //         console.log(element);
  //         // init carousel
  //         $(element).owlCarousel(defaultOptions);
  //       };
  //     }
  //   };
  // })
  //   .directive('owlCarouselItem', [function() {
  //     return {
  //       restrict: 'A',
  //       transclude: false,
  //       link: function(scope, element) {
  //         // wait for the last item in the ng-repeat then call init
          
  //         if(scope.$last) {
  //           scope.initCarousel(element.parent());
  //         }
          
  //       }
  //     };
  //   }]);

    var roadMapEng = [
      {
        "year" : "05 2018",
        "contents1" : "TEMCO Website Launch",
        "contents2" : "TEMCO Whitepaper Release"
      },
      {
        "year" : "06 2018",
        "contents1" : "TEMCO Prototype Release",
        "contents2" : "Development of Adivsory Board"
      },
      {
        "year" : "3Q 2018",
        "contents1" : "Partnership and Business Development"
      },
      {
        "year" : "4Q 2018",
        "contents1" : "Initiate TEMCO Platform Pilot Test with Partners"
      },
      {
        "year" : "1Q 2019",
        "contents1" : "Begin Developing Decentralized Distribution Network"
      },
      {
        "year" : "2Q 2019",
        "contents1" : "Consumer App Launch",
        "sub1" : "Smart Scan and Voting System"
      },
      {
        "year" : "3Q 2019",
        "contents1" : "E-commerce Partner's Mall and Points Mall Launch",
        "contents2" : "Initiate TEMCO Blockchain API Service"
      },
      {
        "year" : "4Q 2019",
        "contents1" : "Vendor App Launch",
        "sub1" : "Vendor Verification System",
        "sub2" : "Smart Contract (transfer, compensation, and penalty agreements etc.)"
      },
      {
        "year" : "1Q 2020",
        "contents1" : "TEMCO Big Data Platform & BI Tool Release",
        "sub1" : "Data Warehouse(Hadoop), Analytic Engine(Spark)",
        "sub2" : "Data Visualization Tool",
        "sub3" : "PKI Tool"
      },
      {
        "year" : "2~4Q 2020",
        "contents1" : "Development of TEMCO Blockchain"
      }
    ];

    var roadMapKor = [
      {
        "year" : "05 2018",
        "contents1" : "TEMCO 웹사이트 런칭",
        "contents2" : "TEMCO 백서 출시"
      },
      {
        "year" : "06 2018",
        "contents1" : "TEMCO Prototype Release",
        "contents2" : "Development of Adivsory Board"
      },
      {
        "year" : "3Q 2018",
        "contents1" : "Partnership and Business Development"
      },
      {
        "year" : "4Q 2018",
        "contents1" : "Initiate TEMCO Platform Pilot Test with Partners"
      },
      {
        "year" : "1Q 2019",
        "contents1" : "Begin Developing Decentralized Distribution Network"
      },
      {
        "year" : "2Q 2019",
        "contents1" : "Consumer App Launch",
        "sub1" : "Smart Scan and Voting System"
      },
      {
        "year" : "3Q 2019",
        "contents1" : "E-commerce Partner's Mall and Points Mall Launch",
        "contents2" : "Initiate TEMCO Blockchain API Service"
      },
      {
        "year" : "4Q 2019",
        "contents1" : "Vendor App Launch",
        "sub1" : "Vendor Verification System",
        "sub2" : "Smart Contract (transfer, compensation, and penalty agreements etc.)"
      },
      {
        "year" : "1Q 2020",
        "contents1" : "TEMCO Big Data Platform & BI Tool Release",
        "sub1" : "Data Warehouse(Hadoop), Analytic Engine(Spark)",
        "sub2" : "Data Visualization Tool",
        "sub3" : "PKI Tool"
      },
      {
        "year" : "2~4Q 2020",
        "contents1" : "Development of TEMCO Blockchain"
      }
    ];