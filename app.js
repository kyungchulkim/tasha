var app = angular.module('TashaApp', [
  'nav',
  'header',
  'about',
  'whitepaper',
  'technology',
  'prototype',
  'token',
  'team',
  'footer',
]);

app.controller('TashaCtrl', function ($scope, $timeout) {

  //nav

  function updateTop(mode){
    if(mode === 'dark'){
      $('#go_to_top img').attr('src','img/go_to_top_white@2x.png');
      $('#go_to_top_text').css('color','#fff');
    }
    else{
      $('#go_to_top img').attr('src','img/go_to_top@2x.png');
      $('#go_to_top_text').css('color','#202020');
    }
  }

  var isLoading = false;
  $scope.navClicked = function($event,linkId,noScroll){
    if(!noScroll){
      isLoading = true;
      $("html, body").animate({scrollTop: $('a[name=' + linkId + ']').offset().top }, 500, function(){
        updateTop($scope.activeScene);
        isLoading = false;
      });
    }
    $('.nav-item').removeClass('active');

    if(linkId === 'home') {
      return;
    }
    var target = $event ? $($event.currentTarget) : $('.nav-link[data=' + linkId + ']');
    target.parent().addClass('active');
  };

  $scope.$watch('activeScene', function(newValue) {
    if (newValue) {
      updateTop(newValue);
    }
  });

  $scope.navLoaded = ['notice'];

  $scope.$watch('activeNav', function(newValue){
    if(newValue && !isLoading && $scope.navBars && $scope.navBars.length === $scope.navLoaded.length){
      $scope.navClicked(undefined,newValue,true);
    }
  });

  // init controller
  $scope.controller = new ScrollMagic.Controller();

});