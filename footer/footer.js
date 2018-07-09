angular.module('footer', [])
  .directive('footer', function(){
    return{
      scope:{
      },
      templateUrl: 'footer/footer.tpl.html?ver=0706',
      link: function($scope) {

        $scope.kakaoClick = function(){
          alert("카카오톡 비밀번호는 1004 입니다.");
          window.open(
            'https://open.kakao.com/o/gkG9IoK',
            '_blank'
          );
        };
      }
    };
  });
//To support image [object-fit: contain] for cross browsing;
angular.element(document).ready(function () {
    objectFitImages();
});