angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.login', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.misNotificaciones', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/misNotificaciones.html',
        controller: 'misNotificacionesCtrl'
      }
    }
  })

  .state('tabsController.logout', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/logout.html',
        controller: 'logoutCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});