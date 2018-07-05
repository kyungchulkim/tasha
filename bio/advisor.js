angular.module('advisor', [])
  .directive('advisor', function($http){
    return{
      scope:{
        data:'@'
      },
      templateUrl: 'bio/advisor.tpl.html?ver=0703',
      link: function($scope) {

        $scope.language = 'en';

        function advisorHttp()
        {
        $http.get('bio/data/' + $scope.data  + '_' + $scope.language + '.json')
          .then(function(resp){
            $scope.firstName = resp.data.firstName.toUpperCase();
            $scope.lastName = resp.data.lastName.toUpperCase();
            $scope.position = resp.data.position;
            $scope.img = resp.data.img;
            $scope.linkedInUrl = resp.data.linkedInUrl;            
            $scope.isTeam = resp.data.isTeam;            
            $scope.bios = resp.data.bio;
            $scope.company = resp.data.company;
          });
        }

        advisorHttp();

        $scope.$on("language", function (event,message){

          $scope.language = message;
          advisorHttp();
          
        });

          var opacityIndex = true;

          $scope.portraitClick = function(){
        
            opacityIndex = !opacityIndex;
            if(opacityIndex){
              $scope.opacity = 	"transition: 1s ease; opacity: 1;"; 
            }
            
           
          }
      }
      
  };
});