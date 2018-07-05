angular.module('nav', [])
  .directive('nav', function(){
    return{
      scope:{
      },
      templateUrl: 'nav/nav.tpl.html?ver=0703',
      link: function($scope) {

        //navbar
        $scope.$parent.navBars = [
          {
            title:'about'
          },
          {
            title:'whitepaper'
          },
          {
            title:'technology',
            subtitle1: 'test1',
            subtitle2: 'test2'
          },
          // {
          //   title:'prototype'
          // },
          {
            title:'token'
          },
          {
            title:'team'
          }
          ,
          {
            title:'community'
          }
          ,
          {
            title:'usecase'
          }
        ];

        $scope.click_en = {
          "color":"#00fff7",
          "font-weight":"900"
        }

        $scope.click_kr = {
          "color":"#ffffff",
          "font-weight":"500",
          "opacity":"0.8"
        }
        
        $scope.$on("language", function (event,message){

          if(message === "en"){
            $scope.click_en = {
              "color":"#00fff7",
              "font-weight":"900"
            }

            $scope.click_kr = {
              "color":"#ffffff",
              "font-weight":"500",
              "opacity":"0.8"
            }
          }else if(message === "kr"){
            $scope.click_kr = {
              "color":"#00fff7",
              "font-weight":"900"
            }

            $scope.click_en = {
              "color":"#ffffff",
              "font-weight":"500",
              "opacity":"0.8"
            }
          }
        });
        // $scope.navbarClick = function() {
        //   if(document.getElementsByClassName('navbar-toggler')[0].getAttribute("aria-expanded") === "false"){
        //     $('.navbar-color').css('opacity','1');
        //   }else{
        //     $('.navbar-color').css('opacity','0.9');
        //   }
        // }

        // $scope.hideNavbar = function() {
        //   let ariaIndex = document.getElementsByClassName('navbar-toggler')[0].getAttribute("aria-expanded");
         
        //   if(ariaIndex === "true"){
        //     $('.navbar-toggler').trigger('click');
        //   }
        // }

      }
    };
  });