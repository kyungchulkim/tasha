var app = angular.module('TashaApp', [
  'ui.bootstrap','ngAnimate', 'ngSanitize',
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
  // add translation tables
  
  $translateProvider.useStaticFilesLoader({
    prefix: 'lang/locale-',
    suffix: '.json'
  });

  $translateProvider.fallbackLanguage('en');
  $translateProvider.preferredLanguage('en');

  // Enable escaping of HTML
  $translateProvider.useSanitizeValueStrategy('sce');
}]);

app.controller('TashaCtrl', function ($translate, $scope, $timeout) {


  //change language

  $scope.language = 'en';

  $scope.changeLanguage = function (langKey) {
    
    $scope.$broadcast('language',language = langKey);
    $translate.use(langKey);
  };

  
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
    
    if(linkId === 'login'){
      console.log(linkId);
      return;
    }

    else if(!noScroll){
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

  $scope.test = function(){
    console.log("test");
  }
});

app.controller('ModalCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  
  $ctrl.items = ['item1', 'item2', 'item3'];
  
  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
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
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  
  $ctrl.openkakao = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'kakao.html',
      controller: 'KakaoModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

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

app.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

app.controller('KakaoModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

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
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});