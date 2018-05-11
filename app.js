var app = angular.module('TashaApp', [
  'nav',
  'header',
  'about',
  'whitepaper',
  'technology',
  'prototype',
  'token',
  'team',
  'footer'

]);

app.controller('TashaCtrl', function ($scope, $timeout) {

  //nav

  function updateTop(mode){
    // if(mode === 'dark'){
    //   $('#go_to_top img').attr('src','img/go_to_top_white@2x.png');
    //   $('#go_to_top_text').css('color','#fff');
    // }
    // else{
    //   $('#go_to_top img').attr('src','img/go_to_top@2x.png');
    //   $('#go_to_top_text').css('color','#202020');
  
        $('#go_to_top img').attr('src','img/go_to_top_white@2x.png');
        $('#go_to_top_text').css('color','#fff');
      // }
      // else{
      //   $('#go_to_top img').attr('src','img/go_to_top@2x.png');
      //   $('#go_to  _top_text').css('color','#202020');
    
  }

  

  $scope.aniDiv = function(div){

          var $aniKey = $(''+div+' .animated');
          
          $aniKey.each(function(){
            var aniWay = $(this), typ = aniWay.data("animate"), dur = aniWay.data("duration"), dly = aniWay.data("delay");
            
                aniWay.addClass("animated "+typ).css("visibility", "visible");
                if(dur){ 
                    aniWay.css('animation-duration', dur+'s'); 
                }
                if(dly){ 
                    aniWay.css('animation-delay', dly+'s'); 
                }
               
    });
  }

  $scope.delDiv = function(div){

    var $aniKey = $(''+div+' .animated');
    
    $aniKey.each(function(){
      var aniWay = $(this), typ = aniWay.data("animate"), dur = aniWay.data("duration"), dly = aniWay.data("delay");
        aniWay.removeClass(typ);
        aniWay.css('visibility', ''); 
        aniWay.css('animation-duration', ''); 
        aniWay.css('animation-delay', '');     
  });
}

  var isLoading = false;
  $scope.navClicked = function($event,linkId,noScroll){
    if(!noScroll){
      isLoading = true;
      $("html, body").animate({scrollTop: $('a[name=' + linkId + ']').offset().top }, 300, function(){
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
          
  
  $timeout(function () {
    $scope.delDiv("#parallax2");
  }, 1000);


});