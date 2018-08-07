angular.module('bio', [])
  .directive('bio', function($http){
    return{
      scope:{
        data:'@',
        language:'@'
      },
      templateUrl: 'bio/bio.tpl.html?ver=0807',
      link: function($scope) {
        
        $scope.language = 'en';
        
        function bioHttp()
        {
          $http.get('bio/data/' + $scope.data + '_' + $scope.language + '.json')
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

        bioHttp();

        $scope.$on("language", function (event,message){

          $scope.language = message;
          bioHttp();
          
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