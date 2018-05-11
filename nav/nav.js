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

      }
    };
  });