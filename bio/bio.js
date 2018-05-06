angular.module('bio', [])
  .directive('bio', function($http){
    return{
      scope:{
        data:'@'
      },
      templateUrl: 'bio/bio.tpl.html',
      link: function($scope) {
        $http.get('bio/data/' + $scope.data + '.json')
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
    };
  });