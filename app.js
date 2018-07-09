var app = angular.module('TashaApp', [
  'ui.bootstrap','ngAnimate', 'ngSanitize', 'ngRoute',
  'pascalprecht.translate',
  'nav',
  'header',
  'about',
  'whitepaper',
  'technology',
  'prototype',
  'token',
  'team',
  'footer'
  // ,
  // 'login'

]);

app.config(['$translateProvider', function ($translateProvider) {
  
  $translateProvider.useStaticFilesLoader({
    prefix: 'lang/locale-',
    suffix: '.json?ver=0706'
  });

  $translateProvider.fallbackLanguage('en');
  $translateProvider.preferredLanguage('en');

  // Enable escaping of HTML
  $translateProvider.useSanitizeValueStrategy('sce');

}]);

app.config(function ($routeProvider,$locationProvider) {
 
  $routeProvider
    .when("/", {
      templateUrl:"home/home.tpl.html"
    })  
    .when("/usecase", {
      templateUrl:"usecase/usecase.tpl.html"
    })
    .otherwise({redirectTo: '/'});
  
});

app.controller('TashaCtrl', function ($translate, $scope, $timeout) {


  //change language

  $scope.language = 'en';

  $scope.changeLanguage = function (langKey) {
    $scope.$broadcast('language',language = langKey);
    $translate.use(langKey);
  };

  
  //nav

  function updateTop(mode){
        $('#go_to_top img').attr('src','img/go_to_top_white.png');
        $('#go_to_top_text').css('color','#fff');
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
    
    if(linkId === 'usecase'){
      window.location.href = "/#/usecase";
      window.scroll(0,0);
      return;
    }
    else if(!noScroll){
      
      if(window.location.hash != "#/"){
        window.location.href = "/#/";
        setTimeout(function() {
           animateScroll();
        },100);
      }else{
        animateScroll();
      }
      
      function animateScroll(){
        isLoading = true;
        $("html, body").animate({scrollTop: $('a[name=' + linkId + ']').offset().top }, 300, function(){
          updateTop($scope.activeScene);
          isLoading = false;
        });
      }

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

  $scope.test = function(){
    console.log("test");
  }
});

app.controller('ModalCtrl', function ($scope, $uibModal, $log, $document) {
  var $ctrl = this;

  $ctrl.animationsEnabled = true;

  $ctrl.openlogin = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'login.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });

  };
  
  $ctrl.signup = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
   
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'signup.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl;
        }
      }
    });
  

  $ctrl.openkakao = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
   
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'kakao.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  };


    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

  $ctrl.openMultipleModals = function () {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'bottom';  
      }
    });

    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-top',
      ariaDescribedBy: 'modal-body-top',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'top';  
      }
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, $http) {
  var $ctrl = this;
  
  $ctrl.kakaoLink = function() {
    $uibModalInstance.dismiss();
    window.open(
      'https://open.kakao.com/o/gkG9IoK',
      '_blank'
    );
  }

  $ctrl.login = function() {
    $ctrl.loginCheck();
  }

  $ctrl.loginCheck = function() {
    
    // 패스워드 정규식 
    // 영문 대소문자 1개 이상 6자리이상 20자리 이하 
    var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // 이메일 정규식
    var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if($ctrl.user === undefined)
    {
      $ctrl.passwordErrorCheck = false;
      $ctrl.emailRequireCheck = false;
      return;

    }else{
      if($ctrl.user.email === undefined){
        $ctrl.emailRequireCheck = false;
        return;
      }else{
        $ctrl.emailRequireCheck = true;
        emailReg.test($ctrl.user.email) ? $ctrl.emailErrorCheck = true : $ctrl.emailErrorCheck = false;
      }
      // passwordReg.test($ctrl.user.password) ? $ctrl.passwordErrorCheck = true : $ctrl.passwordErrorCheck = false;
      if(passwordReg.test($ctrl.user.password)){
        $ctrl.passwordErrorCheck = true
      }else{
        $ctrl.passwordErrorCheck = false;
        return;
      }
    }

    var req = {
      method: 'POST',
      url: 'http://localhost:8080/loginJson',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
      },
      data: {
        email: $ctrl.user.email,
        password: $ctrl.user.password
      }
    }

    $http(req
    ).then(function(resp){
      console.log(resp.data);
      let content = resp.data.content;
      if(content === "successful"){
        $uibModalInstance.dismiss();
      }
      else if(content === "failed_wrong_password"){
        $ctrl.failed_wrong_password = false;
      }else if(content === "failed_user_not_exists"){
        $ctrl.failed_user_not_exists = false;
      }
    }, 
    function(error) { // optional
      console.log("error",error);
    });

  }

  $ctrl.signup = function() {
    console.log(items);
    
    // 패스워드 정규식 
    // 영문 대소문자 1개 이상 6자리이상 20자리 이하 
    var passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // 이메일 정규식
    var emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if($ctrl.user === undefined)
    {
      $ctrl.passwordErrorCheck = false;
      $ctrl.emailRequireCheck = false;
      console.log("user");
      return;
    }
    else{
      if($ctrl.user.email === undefined){
        $ctrl.emailRequireCheck = false;
        return;
      }else{
        $ctrl.emailRequireCheck = true;
        // emailReg.test($ctrl.user.email) ? $ctrl.emailErrorCheck = true : $ctrl.emailErrorCheck = false;
        if(emailReg.test($ctrl.user.email))
          $ctrl.emailErrorCheck = true;
        else{
          $ctrl.emailErrorCheck = false;
          return;
        }
      }

      passwordReg.test($ctrl.user.password) ? $ctrl.passwordErrorCheck = true : $ctrl.passwordErrorCheck = false;
      if($ctrl.passwordErrorCheck){
        if($ctrl.user.passwordCheck !== undefined){
          $ctrl.user.password === $ctrl.user.passwordCheck ? $ctrl.passwordEqualCheck = true : $ctrl.passwordEqualCheck = false;
          if($ctrl.passwordEqualCheck === false)
           return;
        }else{
          $ctrl.passwordEqualCheck = false;
          return;
        } 
      }else{
        return;
      }
    }

    var req = {
      method: 'POST',
      url: 'http://localhost:8080/registerUserJson',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
      },
      data: {
        email: $ctrl.user.email,
        password: $ctrl.user.password
      }
    }

    $http(req).then(function(resp){
      console.log(resp.data);
      if(resp.data.content === "successful"){
    
        $uibModalInstance.dismiss();
        items.openlogin();
      }else if(resp.data.content === "failed_user_exists"){
        $ctrl.failed_user_exists = false;
      }
    }, 
    function(error) { // optional
      console.log("error",error);
    });

  }

  $ctrl.toSignup = function() {
    console.log(items);
    $uibModalInstance.dismiss();
    items.signup();
  }

});

// app.controller('KakaoModalInstanceCtrl', function ($uibModalInstance, items) {
//   var $ctrl = this;
//   $ctrl.items = items;
//   $ctrl.selected = {
//     item: $ctrl.items[0]
//   };

//   $ctrl.ok = function () {
//     uibModalInstance.close($ctrl.selected.item);
//   };

//   $ctrl.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });

app.component('modalComponent', {
  templateUrl: 'login.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
      console.log("loginok");
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});