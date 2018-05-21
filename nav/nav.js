angular.module('nav', [])
  .directive('nav', function(){
    return{
      scope:{
      },
      templateUrl: 'nav/nav.tpl.html',
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
            title:'technology'
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
        ];

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